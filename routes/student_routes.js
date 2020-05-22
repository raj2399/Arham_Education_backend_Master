var student=require('../models/student_model')
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

router.get('/:Email_id',function(req,res,next){
    student.getStudentByEmailID(req.params.Email_id,function(err,rows){
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

router.put('/',function(req,res,next){
    student.updateStudent(req.body,function(err,rows){
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