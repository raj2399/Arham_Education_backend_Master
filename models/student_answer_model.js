var db=require('../dbconnection');

var student_answer={
    addStudentAnswer(item,callback)
    {
        return db.query("insert into student_answer values (?,?,?)",[item.Student_exam_id,item.Question_id,item.Answer_id],callback);
    },
    getStudentAnswers(Student_id,Exam_id,callback)
    {
        return db.query("select * from student_answer where Student_exam_id in (select Student_exam_id from student_exam where Student_id=?  and Exam_id=? )",[Student_id,Exam_id],callback);
    }

}

module.exports=student_answer;