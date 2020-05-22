var announce=require('../models/announce_model_admin');
var express = require('express');
var router = express.Router();

router.get('/:Announcement_id?',function(req,res,next){

  if(req.params.Announcement_id)
  {
    announce.getAnnouncementByAnnouncementId(req.params.Announcement_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else
  {
    announce.getAllAnnoucement(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }

});

  router.post('/',function(req,res,next){
    announce.addAnnounce(req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.put('/:Announcement_id',function(req,res,next){
    announce.updateAnnouncementByAnnouncementId(req.params.Announcement_id,req.body,function(err,rows){
     if(err)
     {
     res.json(err);
     }
     else{
     res.json(rows);
     }
    });
  });

  router.delete('/:Announcement_id',function(req,res,next){
    announce.deleteAnnouncement(req.params.Announcement_id,function(err,rows){
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
