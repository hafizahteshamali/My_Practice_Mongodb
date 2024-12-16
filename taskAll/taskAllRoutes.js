import express from 'express';
import { enums } from '../utils.js';
import allTask from '../model/TaskModel.js';

export const TaskRoutes = express.Router();

TaskRoutes.get('/', async (req, res)=>{
    try {
        const getTask = await allTask.find();
        res.status(200).send({status: 200, message: enums.successMessage, data: getTask});
    } catch (error) {
        res.status(400).send({status: 400, message: enums.errorMessage});
    }
})

TaskRoutes.post('/addtask', async (req, res)=>{
    try {
        const allData = req.body;
        const response = await allTask.create(allData);
        res.status(200).send({status: 200, message: enums.AddDataMessage, data: response});
    } catch (error) {
        res.status(400).send({status: 400, message: enums.errorMessage});
    }
})

TaskRoutes.delete('/deletetask/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const response = await allTask.findByIdAndDelete(id);
        res.status(200).send({status: 200, message: enums.DeleteDataMess, data: response});
    } catch (error) {
        res.status(400).send({status: 400, message: enums.errorMessage});
    }
})

TaskRoutes.put('/updatetask/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const response = await allTask.findByIdAndUpdate(id, data);
        res.status(200).send({status: 200, message: enums.DeleteDataMess, data: response});
    } catch (error) {
        res.status(400).send({status: 400, message: enums.errorMessage});
    }
})