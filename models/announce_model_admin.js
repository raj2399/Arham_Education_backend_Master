var db=require('../dbconnection');
var announce={
    getAnnouncementByAnnouncementId:function(Announcement_id,callback)
    {
        return db.query("select * from announcement where Announcement_id=?",[Announcement_id],callback);
    },
    getAllAnnoucement:function(callback)
    {
        return db.query("select a.*,f.Name from announcement a,faculty f where a.Faculty_id=f.Faculty_id",callback);
    },
    addAnnounce:function(item,callback)
    {
        var date=new Date(item.Date);
        return db.query("insert into announcement (Title,Announcemnet,Date,Batch_id,Faculty_id)  values(?,?,?,?,?)",[item.Title,item.Announcemnet,date,item.Batch_id,item.Faculty_id],callback);
    },
    updateAnnouncementByAnnouncementId:function(Announcement_id,item,callback){
        var date=new Date(item.Date);
        return db.query("update announcement set Title=?,Announcemnet=?,Date=?,Batch_id=? where Announcement_id=?",[item.Title,item.Announcemnet,date,item.Batch_id,Announcement_id],callback);
    },

    deleteAnnouncement:function(Announcement_id,callback)
    {
        return db.query("delete from announcement where Announcement_id=?",[Announcement_id],callback);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Announcement_id;
        }
         db.query("delete from  announcement where Announcement_id in (?)",[delarr],callback);
    },


};
module.exports=announce;
