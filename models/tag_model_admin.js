var db=require('../dbconnection');
var Tag={

    getTagBySubjectId:function(id,callback){
        return db.query("select * from tag where Subject_id=?",id,callback);
    },
    getAllTopic:function(callback)
    {
      return db.query("select t.*,s.Name'Subject_name' from tag t,subject s where s.Subject_id=t.Subject_id",callback);
    },

    getlist:function(Tag_id,callabck)
    {
        return db.query("select * from tag where Tag_id=?",[Tag_id],callabck);
    },
    updateStatusByTagId:function(Tag_id,item,callabck)
    {
        return db.query("update tag set Name=?,Subject_id=? where Tag_id=? ",[item.Name,item.Subject_id,Tag_id],callabck);
    },
    addTagList:function(item,callback)
    {
        return db.query("insert into tag (Name,Subject_id) values(?,?)",[item.Name,item.Subject_id],callback);
    },
    deleteTag:function(Tag_id,callabck)
    {
        return db.query("delete from tag where Tag_id=?",[Tag_id],callabck);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Tag_id;
        }
         db.query("delete from tag where Tag_id in (?)",[delarr],callback);
    },

}
module.exports=Tag;
