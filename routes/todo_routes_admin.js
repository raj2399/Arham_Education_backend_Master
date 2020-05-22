var todo=require('../models/to_do_list_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:List_id?',function(req,res,next){

    if(req.params.List_id)
    {
      todo.getlistByid(req.params.List_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
    else
    {
      todo.getAlltodoList(function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
      
  });
  
    router.post('/',function(req,res,next){
      todo.addList(req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.put('/:List_id',function(req,res,next){
      todo.updateStatusByListId(req.params.List_id,req.body,function(err,rows){
       if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
      });
    });
  
    router.delete('/:List_id',function(req,res,next){
      todo.deleteList(req.params.List_id,function(err,rows){
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

