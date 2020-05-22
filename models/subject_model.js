var db=require('../dbconnection');
var Subject={
    getAllSubject(callback){
        return db.query("select * from subject",callback);
    }

}
module.exports=Subject;