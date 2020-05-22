var result=require('../models/result_model');
var express=require('express');
var router=express.Router();


router.post('/',function(req,res,next){
    console.log(req.body);
    result.addResult(req.body,function(err,rows){
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

router.get('/:Student_id/:Exam_id?',function(req,res,next){
    console.log(req.params.Exam_id);
    if(req.params.Exam_id!=undefined)
    {
        result.getResultByStudentId(req.params.Student_id,req.params.Exam_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    else
    {
        result.getAllResultsByStudentId(req.params.Student_id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        })
    }
    
})

module.exports=router;