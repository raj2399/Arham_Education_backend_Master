var db=require('../dbconnection');
var exam={
    addExam(item,callback)
    {
      var exam_date=new Date;
exam_date=new Date(Date.now());


        return db.query("insert into exam (Exam_name,Batch_id,Date,Marks,Time,Faculty_id) values (?,?,?,?,?,?)",[item.Exam_name,item.Batch_id,exam_date,item.Marks,item.Time,item.Faculty_id],callback);
    },
    getAllExam(callback)
    {
        return db.query("select * from exam",callback);
    },
    getExamById(id,callback)
    {
        return db.query("select * from exam where Exam_id=?",[id],callback);
    },
    getExamByStudentIdBatchID(stu_id,batch_id,callback)
    {

      var exam_date1=new Date;
exam_date1=new Date(Date.now());

        var d = new Date(exam_date1),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

            exam_date2=[year, month, day].join('-');
        console.log(exam_date2);
        return db.query("select * from exam where Batch_id=? and Exam_id not in (select Exam_id from student_exam where Student_id=?) and Date=? ",[batch_id,stu_id,exam_date2],callback);
    },
    getExamForResult(stu_id,batch_id,callback)
    {
        return db.query("select * from exam where Batch_id=? and Exam_id in (select Exam_id from student_exam where Student_id=?)",[batch_id,stu_id],callback);
    }
}

module.exports=exam;
