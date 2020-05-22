var question=require('../models/question_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:subject_id/:limit',function(req,res,next){

    question.getRandomQuestion(req.params.subject_id,req.params.limit,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})


module.exports=router;