var student=require('../models/student_model_admin')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    student.Studentlogin(req.body,function(err,rows){
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

router.get('/:batch_id?',function(req,res,next){
    if(req.params.batch_id)
    {

        student.getStudentByBatch_id(req.params.batch_id,function(err,rows){
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

        student.getstudentDetails(function(err,rows){
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

});


router.put('/',function(req,res,next){
  student.updateStudentStatus(req.body.Batch_id,function(err,rows){
      if(err)
      {
          res.json(err);
      }
      else
      {
          res.json(rows);
      }
  })
});


module.exports=router;
