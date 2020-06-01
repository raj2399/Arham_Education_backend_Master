var db=require('../dbconnection');

var exam={
  addExam(item,callback)
  {
      console.log(item);
      var Exam_date=new Date(item.Date);
      return db.query("insert into exam (Exam_name,Batch_id,Date,Marks,Time,Faculty_id) values (?,?,?,?,?,?)",[item.Exam_name,item.Batch_id,Exam_date,item.Marks,item.Time,item.Faculty_id],callback);
  },
    getNumberOfQuestionBytagId(tag_id,diff,callback)
    {
        return db.query("select count(*)'count' from questions where Tag_id=? and Difficulty=?",[tag_id,diff],callback);
    },
    getNumberOfQuestionBySubjectId(sub_id,callback)
    {
        return db.query("SELECT count(*)'Count' FROM `questions` WHERE Tag_id in ( SELECT Tag_id FROM `tag` WHERE Subject_id=? )",[sub_id],callback);
    },
    getAllExam(callback)
    {
        return db.query("select * from exam",callback);
    },
    getExamByBatch(Batch_id,callback)
    {
        return db.query("select * from exam where Batch_id=?",[Batch_id],callback);
    },
    getExamById(id,callback)
    {
        return db.query("select * from exam where Exam_id=?",[id],callback);
    },
    getExamAndBatch:function(callback)
    {
    return db.query("select b.Batch_name,e.* from exam e,batch b where b.Batch_id=e.Batch_id",callback);
    },

}

module.exports=exam;
