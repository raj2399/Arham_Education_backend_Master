var question=require('../models/question_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Faculty_id',function(req,res,next){

      question.getQuestionsByFaculty_Id(req.params.Faculty_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
      
  });

 


  module.exports=router;
