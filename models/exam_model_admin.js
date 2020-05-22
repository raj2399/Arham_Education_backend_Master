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