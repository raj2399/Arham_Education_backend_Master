var attendence=require('../models/attendance_model_admin');
var express=require('express');
var router=express.Router();


router.get('/',function(req,res,next){
  attendence.getstatusOfAttendance(function(err,rows){
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
