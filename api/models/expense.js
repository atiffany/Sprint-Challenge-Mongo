import { ObjectID } from '../../../../../../.cache/typescript/2.6/node_modules/@types/bson';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const expenseSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    budget: {
        type: ObjectID,
        ref: 'Budget'

    },
    category: {
        type: ObjectID,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Expense', expenseSchema);