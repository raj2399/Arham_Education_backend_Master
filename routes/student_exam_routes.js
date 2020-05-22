var student_exam=require('../models/student_exam_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    student_exam.addStudentExam(req.body,function(err,rows){
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