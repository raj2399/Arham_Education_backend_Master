var db=require('../dbconnection');
var Batch={
    getAllBatch(callback){
        return db.query("select * from batch",callback);
    }

}
module.exports=Batch;