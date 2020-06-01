var exam=require('../models/batch_model_admin');
var express=require('express');
var router=express.Router();
router.get('/:Exam_id',function(req,res,next){

        exam.BatchResult(req.params.Exam_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    }
);
module.exports=router;
