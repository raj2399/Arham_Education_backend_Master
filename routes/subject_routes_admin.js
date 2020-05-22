var subject=require('../models/subject_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Subject_id?',function(req,res,next){

    if(req.params.Subject_id)
    {
      subject.getSubjectByID(req.params.Subject_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      subject.getAllSubject(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });
  
    router.post('/',function(req,res,next){
      subject.insertSubject(req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.put('/:Subject_id',function(req,res,next){
      subject.updateSubject(req.params.Subject_id,req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.delete('/:Subject_id',function(req,res,next){
      subject.deleteSubject(req.params.Subject_id,function(err,rows){
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

