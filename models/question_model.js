
var db=require('../dbconnection');
var Question={
    getQuestions(tag_id,difficulty,count,limit,callback){
       
        console.log(tag_id,difficulty,count,limit);
        let lim=Number(limit);
        return db.query("SELECT * FROM questions WHERE Tag_id=? and Difficulty=? and Count=? ORDER BY RAND() LIMIT ?",[tag_id,difficulty,count,lim],callback);
    },
    getRandomQuestion(subject_id,limit,callback)
    {
        let lim=Number(limit);
        return db.query("SELECT * FROM questions WHERE Tag_id in ( SELECT Tag_id from tag where subject_id=? ) ORDER BY RAND() LIMIT ?",[subject_id,lim],callback);
    },
    getAllQuestion(callback)
    {
        return db.query("Select * from questions",callback);
    },
    updateCountQuestion(item,callback)
    {
        return db.query("update questions set Count=? where Question_id=?",[item.Count,item.Question_id],callback);
    },
    getQuestionByQuestionId(id,callback)
    {
        return db.query("select * from questions where Question_id=?",[id],callback);
    }

}
module.exports=Question;