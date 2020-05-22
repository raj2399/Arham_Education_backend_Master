var db=require('../dbconnection');

var student_exam={
    addStudentExam(item,callback)
    {
        return db.query("insert into student_exam (Student_id,Exam_id) values (?,?)",[item.Student_id,item.Exam_id],callback);
    }
}

module.exports=student_exam;