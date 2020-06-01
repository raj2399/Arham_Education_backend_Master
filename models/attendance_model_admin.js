
var db=require('../dbconnection');
var attendance={
    addAttendance(item,callback)
    {
      var date=new Date(Date.now());

        db.query("insert into attendance (Date,Student_id,Status) value(?,?,?)",[date,item.Student_id,item.Status],callback);
    },
    getStudentAttendanceByStudentId(student_id,callback)
    {
        db.query("select s.Name,s.Last_name,s.Middle_name,a.* from attendance a,student s where a.Student_id=s.Student_id and s.Student_id=?",[student_id],callback);
    },
    getstatusOfAttendance(callback)
    {
      var exam_date1=new Date;
exam_date1=new Date(Date.now());  var d = new Date(exam_date1),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

            exam_date2=[year, month, day].join('-');
        console.log(exam_date2);

      db.query("select DISTINCT(Batch_no) from student where Student_id in (select Student_id from attendance where Date=?)",[exam_date2],callback);
    }


};

module.exports=attendance
