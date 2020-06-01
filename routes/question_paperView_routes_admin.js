var exam=require('../models/question_paper_admin');
var express=require('express');
var router=express.Router();
router.get('/:Exam_id',function(req,res,next){

        exam.getQuestionPaperByExamId(req.params.Exam_id,function(err,rows){
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
