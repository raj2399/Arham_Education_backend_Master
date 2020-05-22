var fees=require('../models/fees_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Student_id?',function(req,res,next){

    if(req.params.Student_id)
    {
      fees.getTransactionByStudent(req.params.Student_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      fees.getAlltransaction(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });
  
    router.post('/',function(req,res,next){
      fees.addFees(req.body,function(err,rows){
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

