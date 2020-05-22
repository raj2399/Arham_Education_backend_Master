var student_answer=require('../models/student_answer_model');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    student_answer.addStudentAnswer(req.body,function(err,rows){
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

router.get('/:Student_id/:Exam_id',function(req,res,next){
    student_answer.getStudentAnswers(req.params.Student_id,req.params.Exam_id,function(err,rows){
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