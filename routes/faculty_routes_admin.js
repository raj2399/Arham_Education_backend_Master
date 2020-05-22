var faculty=require('../models/faculty_model_admin')
var express=require('express');
var router=express.Router();

router.post('/',function(req,res,next){
    faculty.Facultylogin(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

router.put('/',function(req,res,next){
    faculty.changePassword(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
})

router.get('/:Email_id',function(req,res,next){
    faculty.getFacultyByEmailID(req.params.Email_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


module.exports=router;
