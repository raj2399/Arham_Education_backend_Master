var db=require('../dbconnection');

var result={
    
    addResult(item,callback)
    {
        return db.query("insert into result values (?,?)",[item.Student_exam_id,item.Obtained_Marks],callback);
    },
    getResultByStudentId(Student_id,Exam_id,callback)
    {
        return db.query("select * from result where Student_exam_id in (select Student_exam_id from student_exam where Student_id=? and Exam_id=? )",[Student_id,Exam_id],callback);
    },
    getAllResultsByStudentId(Student_id,callback)
    {
        return db.query("select se.*,r.*,e.* from result r,student_exam se,exam e where r.Student_exam_id=se.Student_exam_id and e.Exam_id=se.Exam_id and Student_id=?",[Student_id],callback);
    }
    
}

module.exports=result;