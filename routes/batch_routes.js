var batch=require('../models/batch_model');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    batch.getAllBatch(function(err,rows){
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

module.exports=router;

