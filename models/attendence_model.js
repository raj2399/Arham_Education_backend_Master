var db=require('../dbconnection');
var Attendence={
  getAttendenceByStudentId(id,callback)
   {
    return db.query("select * from attendance where Student_id=? and status=0",[id],callback);
   }
}
module.exports=Attendence;
