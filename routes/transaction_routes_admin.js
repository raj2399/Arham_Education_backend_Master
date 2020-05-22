var Transaction=require('../models/fees_model_admin');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    Transaction.getTansactionDetails(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
})

router.post('/',function(req,res,next){
    Transaction.addSalary(req.body,function(err,rows){
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

