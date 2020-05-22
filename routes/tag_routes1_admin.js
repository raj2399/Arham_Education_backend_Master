var tag=require('../models/tag_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Tag_id?',function(req,res,next){

    if(req.params.Tag_id)
    {
      tag.getlist(req.params.Tag_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      tag.getAllTopic(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });
  
    router.post('/',function(req,res,next){
      tag.addTagList(req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.put('/:Tag_id',function(req,res,next){
      tag.updateStatusByTagId(req.params.Tag_id,req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.delete('/:Tag_id',function(req,res,next){
      tag.deleteTag(req.params.Tag_id,function(err,rows){
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

