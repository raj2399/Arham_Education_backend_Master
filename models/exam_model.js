var db=require('../dbconnection');
var exam_date=new Date;
exam_date=new Date(Date.now());
var exam={
    addExam(item,callback)
    {
     
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
        return db.query("select * from exam where Batch_id=? and Exam_id not in (select Exam_id from student_exam where Student_id=?)",[batch_id,stu_id],callback);
    },
    getExamForResult(stu_id,batch_id,callback)
    {
        return db.query("select * from exam where Batch_id=? and Exam_id in (select Exam_id from student_exam where Student_id=?)",[batch_id,stu_id],callback);
    }
}

module.exports=exam;