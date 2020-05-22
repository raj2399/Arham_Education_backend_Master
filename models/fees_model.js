var db=require('../dbconnection');
var Fee={
    getFeesByStudentId(id,callback){
        return db.query("select * from fees where Student_id=?",[id],callback);
    }

}
module.exports=Fee;