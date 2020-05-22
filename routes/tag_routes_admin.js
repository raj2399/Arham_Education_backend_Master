var Tag=require('../models/tag_model_admin');
var express=require('express');
var router=express.Router();

router.get('/:id',function(req,res,next){
    Tag.getTagBySubjectId(req.params.id,function(err,rows){
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
    Tag.deleteAll(req.body,function(err,rows){
 
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

