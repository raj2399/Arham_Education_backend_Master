var db=require('../dbconnection');
var todo={
    getAlltodoList:function(callback)
    {
        return db.query("select * from to_do_list",callback);
    },
    getlistByid:function(List_id,callabck)
    {
        return db.query("select * from to_do_list where List_id=?",[List_id],callabck);
    },

    getlistByFaculty:function(Faculty_id,callabck)
    {
        return db.query("select * from to_do_list where Faculty_id=?",[Faculty_id],callabck);
    },
    updateStatusByListId:function(List_id,item,callabck)
    {
        return db.query("update to_do_list set Faculty_id=?,Topic=?,Status=? where List_id=? ",[item.Faculty_id,item.Topic,item.Status,List_id],callabck);
    },
    addList:function(item,callback)
    {
        return db.query("insert into to_do_list (Faculty_id,Topic,Status) values(?,?,?)",[item.Faculty_id,item.Topic,item.Status],callback);
    },
    deleteList:function(List_id,callabck)
    {
        return db.query("delete from to_do_list where List_id=?",[List_id],callabck);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].List_id;
        }
         db.query("delete from to_do_list where List_id in (?)",[delarr],callback);
    },
  

}
module.exports=todo;