var db=require('../dbconnection');
var Tag={
    getTagBySubjectId(id,callback){
        return db.query("select * from tag where Subject_id=?",id,callback);
    }

}
module.exports=Tag;