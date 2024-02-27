const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const Question = require('../models/question.schema');

router.post('/', async (req, res) => {
    console.log(req.body.answers);

    if(!req.body.answers || req.body.answers.length < 4){
        return res.status(400).jsonp({
            error: 'ответов должно быть 4!',
            data: null
        })
    } 

    let correct = 0;

    req.body.answers.forEach(element => {
        if(element.correct) correct += 1;
    });

    if(correct !== 1) {
        return res.status(400).jsonp({
            error: 'должен быть оден правельный ответ!',
            data: null
        })
    }

   

    const question = new Question({
        question: req.body.question,
        answers: req.body.answers,
    });

    const save = await question.save();

    return res.status(200).jsonp({
        error: null,
        data: save
    })
})

router.get('/', async (req, res) => {
    const question = await Question.find();
    res.status(200).jsonp({
        error: null,
        data: question
    })
})

router.get('/:id', async (req, res) => {
    const question = await Question.findOne({ _id: new mongoose.Types.ObjectId(req.params.id) });
    res.status(200).jsonp({
        error: null,
        data: question
    })
})

router.delete('/:id', async (req, res) => {
    const question = await Question.deleteOne({ _id: new mongoose.Types.ObjectId(req.params.id) });
    res.status(200).jsonp({
        error: null,
        data: question
    })
})

module.exports = router;
