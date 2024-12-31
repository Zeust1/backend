import tableModel from "../models/tableModel.js";

const tableController = {
    createTable: async (req, res) => {
        const {tableName} = req.body
        try {
            await tableModel.syncIndexes()
            const newTable = await tableModel.create({
                tableName
            })
            if(!newTable) throw new Error('Create failure table')
            res.status(200).send({
                success: 'New table has been created',
                tableId: newTable._id
            })      
        } catch (error) {
            if(error.code === 11000) {
                res.status(404).send('Table name already exists')
            }else{
                res.status(404).send(error.message)
            }
        }
        
    },
    getTable: async (req, res) => {
        try {
            const table = await tableModel.findById({_id: '6772ea9893f8fe86d759171c'}).populate('listId', 'listName cardId')
            if(!table) throw new Error('Table not found')
            res.status(200).send({
                success: 'Successfully',
                data: table
            })
        } catch (error) {
            res.status(404).send(error.message)
        }
    }
}

export default tableController