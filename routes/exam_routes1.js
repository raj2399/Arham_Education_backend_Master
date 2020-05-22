var exam=require('../models/exam_model');
var express=require('express');
var router=express.Router();


router.get('/:stu_id/:batch_id',function(req,res,next){
    exam.getExamByStudentIdBatchID(req.params.stu_id,req.params.batch_id,function(err,rows){
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