
var db=require('../dbconnection');
var date=new Date(Date.now());
var attendance={
    addAttendance(item,callback)
    {
        db.query("insert into attendance (Date,Student_id,Status) value(?,?,?)",[date,item.Student_id,item.Status],callback);
    },
    getStudentAttendanceByStudentId(student_id,callback)
    {
        db.query("select s.Name,s.Last_name,s.Middle_name,a.* from attendance a,student s where a.Student_id=s.Student_id and s.Student_id=?",[student_id],callback);
    },
};

module.exports=attendance