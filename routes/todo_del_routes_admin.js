var todo=require('../models/to_do_list_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:Faculty_id',function(req,res,next){
    todo.getlistByFaculty(req.params.Faculty_id,function(err,rows){
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
    todo.deleteAll(req.body,function(err,rows){
 
     if(err)
     {
     res.json(err);
     }
     else
     {
       console.log(req.body);
     res.json(rows);
     }
    });
  });


module.exports=router;

