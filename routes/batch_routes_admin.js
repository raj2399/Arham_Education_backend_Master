var batch=require('../models/batch_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Batch_id?',function(req,res,next){

    if(req.params.Batch_id)
    {
      batch.getBatchById(req.params.Batch_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      batch.getAllBatch(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });
  

  router.post('/',function(req,res,next){
    batch.addBatch(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:Batch_id',function(req,res,next){
    batch.updateBatch(req.params.Batch_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:Batch_id',function(req,res,next){
    batch.deleteBatch(req.params.Batch_id,function(err,rows){
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

