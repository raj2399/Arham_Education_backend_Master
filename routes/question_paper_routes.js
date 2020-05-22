var question_paper=require('../models/question_paper');
var express=require('express');
var router=express.Router();

router.get('/:id',function(req,res,next){
    question_paper.getQuestionByExamid(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.post('/',function(req,res,next){
    console.log(req.body);
    
        question_paper.addQuestions(req.body,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });   
 
});

module.exports=router;