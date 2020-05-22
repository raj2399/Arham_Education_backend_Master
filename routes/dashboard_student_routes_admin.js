var DashBoard=require('../models/dashboard_model_admin');
var express=require('express');
var router=express.Router();

router.get('/',function(req,res,next){
    DashBoard.countStudent(function(err,rows){
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

