var attendance=require('../models/attendance_model_admin');
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    attendance.addAttendance(req.body,function(err,rows){
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

router.get('/:student_id',function(req,res,next){
    attendance.getStudentAttendanceByStudentId(req.params.student_id,function(err,rows){
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