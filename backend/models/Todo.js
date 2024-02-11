const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
    course: {
        type: String
    },
    detail: {
        type: String
    },
    dueDate: {
        type: Date
    }
}, {
    collection: 'todos'
});

module.exports = mongoose.model('Todo', todoSchema);