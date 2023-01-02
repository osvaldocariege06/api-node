
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    task: {
        type: String,
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

const TaskModel = mongoose.model('Task', taskSchema);

module.exports = TaskModel;