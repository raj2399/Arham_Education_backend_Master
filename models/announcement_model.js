var db=require('../dbconnection');
var Announcement={
   getAnnouncementByBatchId(batch_id,callback)
   {
    return db.query("SELECT * FROM `announcement` WHERE batch_id=? ORDER BY Date DESC",[batch_id],callback);
   }

}
module.exports=Announcement;