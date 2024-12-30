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
        
    }
}

export default tableController