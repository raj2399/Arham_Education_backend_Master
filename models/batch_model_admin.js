var db=require('../dbconnection');
var Batch={
    getAllBatch(callback){
        return db.query("select * from batch",callback);
    },
 
    getBatchById(Batch_id,callback){
        return db.query("select * from batch where Batch_id=?",[Batch_id],callback);
    },
    addBatch:function(item,callback){
        //console.log(item);
        return db.query("insert into batch (Batch_name) values(?)",[item.Batch_name],callback);        
    },
    updateBatch:function(Batch_id,item,callback){
        //console.log(item.Batch_name);
        return db.query("update batch set Batch_name=? where Batch_id=?",[item.Batch_name,Batch_id],callback);
    },
    deleteBatch:function(Batch_id,callback)
    {
        return db.query("delete from batch where Batch_id=?",[Batch_id],callback);
    },

    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Batch_id;
        }
         db.query("delete from batch where Batch_id in (?)",[delarr],callback);
    },



}
module.exports=Batch;