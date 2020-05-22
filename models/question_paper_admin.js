var db=require('../dbconnection');

var question_paper={
    addQuestions(item,callback)
    {
        return db.query("insert into question_paper values (?,?)",[item.Question_id,item.Exam_id],callback);
    },
    getQuestionByExamid(id,callback)
    {
        return db.query("select * from question_paper where exam_id=?",[id],callback);
    }
    
}

module.exports=question_paper;