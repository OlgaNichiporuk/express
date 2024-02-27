const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer: { type: String, require: true },
    correct: { type: Boolean, default: false }
});

const QuestionSchema = new Schema({
    question: { type: String, require: true },
    answers: [AnswerSchema]
});

module.exports = mongoose.model('Question', QuestionSchema);
