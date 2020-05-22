var db=require('../dbconnection');
var Subject={
    getAllSubject(callback){
        return db.query("select * from subject",callback);
    },
    insertSubject:function(item,callback)
    {
        //console.log(item);
        return db.query("insert into subject (Name) values(?)",[item.Name],callback);
    },
    updateSubject:function(Subject_id,item,callback)
    {
      //  console.log(item);
        return db.query("update  subject set Name=? where Subject_id=?",[item.Name,Subject_id],callback);
    },
    deleteSubject:function(Subject_id,callback)
    {
      //  console.log(item);
        return db.query("delete from subject  where Subject_id=?",[Subject_id],callback);
    },
    getSubjectByID(Subject_id,callback)
    {
        return db.query("select * from subject where Subject_id=?",[Subject_id],callback);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Subject_id;
        }
         db.query("delete from subject where Subject_id in (?)",[delarr],callback);
    },



}
module.exports=Subject;