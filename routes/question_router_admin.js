var question=require('../models/question_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:tag_id/:difficulty/:count/:limit',function(req,res,next){
    //console.log(req.params.tag_id,req.params.difficulty,req.params.count,req.params.limit);
    question.getQuestions(req.params.tag_id,req.params.difficulty,req.params.count,req.params.limit,function(err,rows){
        
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

// router.get('/',function(req,res,next){
//     question.getAllQuestion(function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
//             res.json(rows);
//         }
//     })
// })

router.post('/',function(req,res,next){
    console.log(req.body);
    
        question.addQuestion(req.body,function(err,rows){
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

router.put('/:Question_id',function(req,res,next){
    question.updateQuestions(req.params.Question_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:Question_id',function(req,res,next){
    question.deleteQuestionByID(req.params.Question_id,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });


module.exports=router;