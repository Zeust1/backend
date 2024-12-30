import cardModel from "../models/cardModel.js";
import cardDetailModel from "../models/cardDetailModel.js";

const cardDetailController = {
    createCardDetail: async (req, res) => {
        const { cardId } = req.params
        const {task, description, deadLine, member} = req.body
        try {
            await cardDetailModel.syncIndexes()
            const newCardDetail = await cardDetailModel.create({
                task,
                description,
                deadLine,
                member
            })
            await cardModel.findOneAndUpdate({_id: cardId}, { cardDetailId: newCardDetail._id })

            if(!newCardDetail) throw new Error('Create failure card')
            res.status(200).send({
                success: 'New card has been created',
                cardDetailId: newCardDetail._id
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

export default cardDetailController