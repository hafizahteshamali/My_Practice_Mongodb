import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String},
    due_date: {type: String} 
},{timestamps: true})

const allTask = mongoose.model('overallTasks', TaskSchema);

export default allTask;