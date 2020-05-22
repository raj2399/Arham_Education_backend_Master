var student=require('../models/student_model_admin');
var express = require('express');
var router = express.Router();

router.get('/:Student_id?',function(req,res,next){

  if(req.params.Student_id)
  {
    student.getStudentByStudent_Id(req.params.Student_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else
  {
    student.getAllStudent(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
    
});

  router.post('/',function(req,res,next){
    student.addStudent(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:Student_id',function(req,res,next){
    student.updateStudentByStudentId(req.params.Student_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:Student_id',function(req,res,next){
    student.deleteStudent(req.params.Student_id,function(err,rows){
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