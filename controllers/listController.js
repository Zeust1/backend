import listModel from "../models/listModel.js";
import tableModel from "../models/tableModel.js";

const listController = {
    createList: async (req, res) => {
        const { tableId } = req.params
        const {listName} = req.body
        try {
            await listModel.syncIndexes()
            const newList = await listModel.create({
                listName
            })
            await tableModel.findOneAndUpdate({_id: tableId}, { $push: { listId: newList._id } })

            if(!newList) throw new Error('Create failure list')
                res.status(200).send({
                    success: 'New list has been created',
                    listId: newList._id
                })   
        } catch (error) {
            if(error.code === 11000) {
                res.status(404).send('List name already exists')
            }else{
                res.status(404).send(error.message)
            }
        }
    }
}

export default listController