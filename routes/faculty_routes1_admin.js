var faculty=require('../models/faculty_model_admin');
var express = require('express');
var router = express.Router();

router.get('/:Faculty_id?',function(req,res,next){

  if(req.params.Faculty_id)
  {
    faculty.getFacultyByFacultyId(req.params.Faculty_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else
  {
    faculty.getAllFaculty(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
    
});

  router.post('/',function(req,res,next){
    faculty.addFaculty(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:Faculty_id',function(req,res,next){
    faculty.updateFacultyByFacultyId(req.params.Faculty_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:Faculty_id',function(req,res,next){
    faculty.deleteFaculty(req.params.Faculty_id,function(err,rows){
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