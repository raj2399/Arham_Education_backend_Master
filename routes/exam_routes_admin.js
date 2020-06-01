var exam=require('../models/exam_model_admin');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    console.log(req.body);
    exam.addExam(req.body,function(err,rows){
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

router.get('/getCount/:subid',function(req,res,next){
  exam.getNumberOfQuestionBySubjectId(req.params.subid,function(err,rows){
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


router.get('/getCount/:tagid/:diff',function(req,res,next){
  exam.getNumberOfQuestionBytagId(req.params.tagid,req.params.diff,function(err,rows){
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






router.get('/:?id',function(req,res,next){
    if(req.params.id)
    {
        exam.getExamById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
    else
    {
        exam.getAllExam(function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }

})
module.exports=router;
