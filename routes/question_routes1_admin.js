var question=require('../models/question_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Question_id?',function(req,res,next){

    if(req.params.Question_id)
    {
      question.getQuestionsById(req.params.Question_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      question.getAllQuestion(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });

  router.post('/',function(req,res,next){
    question.deleteAll(req.body,function(err,rows){
 
     if(err)
     {
     res.json(err);
     }
     else
     {
       console.log(req.body);
     res.json(rows);
     }
    });
  });

  router.put('/',function(req,res,next){
    question.updateCountQuestion(req.body,function(err,rows){
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
