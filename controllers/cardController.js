import cardModel from "../models/cardModel.js";
import listModel from "../models/listModel.js";

const cardController = {
    createCard: async (req, res) => {
        const { listId } = req.params
        const {cardName} = req.body
        try {
            await cardModel.syncIndexes()
            const newCard = await cardModel.create({
                cardName
            })
            await listModel.findOneAndUpdate({_id: listId}, { $push: { cardId: newCard._id } })

            if(!newCard) throw new Error('Create failure card')
            res.status(200).send({
                success: 'New card has been created',
                cardId: newCard._id
            })
        } catch (error) {
            if(error.code === 11000) {
                res.status(404).send('Card name already exists')
            }else{
                res.status(404).send(error.message)
            }
        }
    }
}

export default cardController