var db=require('../dbconnection');

var question_paper={
    addQuestions(item,callback)
    {
        return db.query("insert into question_paper values (?,?)",[item.Question_id,item.Exam_id],callback);
    },
    getQuestionByExamid(id,callback)
    {
        return db.query("select * from question_paper where exam_id=?",[id],callback);
    },
    getQuestionPaperByExamId(Exam_id,callback)
    {
        return db.query("select s.*,b.*,q.*,e.*,t.Name as topic_name from batch b,subject s,tag t,question_paper qe,questions q,exam e where e.Exam_id=qe.Exam_id and q.Tag_id=t.Tag_id and s.Subject_id=t.Subject_id  and e.Batch_id=b.Batch_id and  q.Question_id=qe.Question_id and e.Exam_id=?",[Exam_id],callback);
    }


}

module.exports=question_paper;
