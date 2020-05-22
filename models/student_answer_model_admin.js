var db=require('../dbconnection');

var student_answer={
    addStudentAnswer(item,callback)
    {
        return db.query("insert into student_answer values (?,?,?)",[item.Student_id,item.Question_id,item.Answer_id],callback);
    }
}

module.exports=student_answer;