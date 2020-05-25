
var db=require('../dbconnection');
var Question={
    getQuestions(tag_id,difficulty,count,limit,callback){

        console.log(tag_id,difficulty,count,limit);
        let lim=Number(limit);
        return db.query("SELECT * FROM questions WHERE Tag_id=? and Difficulty=? and Count<=? ORDER BY RAND() LIMIT ?",[tag_id,difficulty,count,lim],callback);
    },
    getAllQuestion(callback)
    {
        return db.query("Select t.*,q.* from questions q,tag t where t.Tag_id=q.Tag_id",callback);
    },
    getQuestionsById(Question_id,callback)
    {
        return db.query("Select t.*,q.* from questions q,tag t where t.Tag_id=q.Tag_id and Question_id=?",[Question_id],callback);
    },


    getQuestionsByFaculty_Id(Faculty_id,callback)
    {
        return db.query("Select t.*,q.* from questions q,tag t where t.Tag_id=q.Tag_id and Faculty_id=?",[Faculty_id],callback);
    },
    addQuestion(item,callback)
    {
        let x=Number(item.Count);
        let y=Number(item.subject_id);
  //      console.log(x);
//        console.log(item);
        console.log(item.subject_id);
        return db.query("insert into questions (Tag_id,Difficulty,Question,Option1,Option2,Option3,Option4,Answer,Count,Faculty_id) values (?,?,?,?,?,?,?,?,?,?)",[item.Tag_id,item.Difficulty,item.Question,item.Option1,item.Option2,item.Option3,item.Option4,item.Answer,item.Count,item.Faculty_id],callback);
    },

    deleteQuestionByID(Question_id,callback)
    {

        console.log(Question_id);
     //
        return db.query("delete from questions where Question_id=?",[Question_id],callback);
    },
    updateQuestions:function(Question_id,item,callback)
    {
      //  console.log(item);
        return db.query("update questions set Tag_id=?,Difficulty=?,Question=?,Option1=?,Option2=?,Option3=?,Option4=?,Answer=?,Count=?,Faculty_id=? where Question_id=?",[item.Tag_id,item.Difficulty,item.Question,item.Option1,item.Option2,item.Option3,item.Option4,item.Answer,item.Count,item.Faculty_id,Question_id],callback);
    },
       deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].question_id;
        }
         db.query("delete from questions where question_id in (?)",[delarr],callback);
    },

    getRandomQuestion(subject_id,limit,callback)
    {
        let lim=Number(limit);
        return db.query("SELECT * FROM questions WHERE Tag_id in ( SELECT Tag_id from tag where subject_id=? ) ORDER BY RAND() LIMIT ?",[subject_id,lim],callback);
    },
    updateCountQuestion(item,callback)
    {
        return db.query("update questions set Count=? where Question_id=?",[item.Count,item.Question_id],callback);
    }



}
module.exports=Question;
