var db=require('../dbconnection');

var faculty={
    Facultylogin(item,callback)
    {
        return db.query("select * from faculty where Email_id=? and Password=?",[item.Email_id,item.Password],callback);
    },
    changePassword(item,callback)
    {
        return db.query("update faculty set Password=? where Email_id=?",[item.Password,item.Email_id],callback);
    },
    getFacultyByEmailID(Email_id,callback)
    {
        return db.query("select * from faculty where Email_id=?",[Email_id],callback);
    },


    getFacultyByFacultyId:function(Faculty_id,callback)
    {
        return db.query("select * from faculty where Faculty_id=?",[Faculty_id],callback);
    },
    getAllFaculty:function(callback)
    {
        return db.query("select * from faculty",callback);
    },
    addFaculty:function(item,callback)
    {
        var date=new Date(item.Date_of_birth);
        console.log(item);
        console.log(item.Role);
        return db.query("insert into faculty (Name,Mobile_no,Email_id,Password,Date_of_birth,Salary,Qualification,Role)  values(?,?,?,?,?,?,?,?)",[item.Name,item.Mobile_no,item.Email_id,item.Password,date,item.Salary,item.Qualification,item.Role],callback);
    },
    updateFacultyByFacultyId:function(Faculty_id,item,callback){
        //console.log(item);
        var date=new Date(item.Date_of_birth);

        return db.query("update faculty set Name=?,Mobile_no=?,Email_id=?,Password=?,Date_of_birth=?,Salary=?,Qualification=?,Role=? where Faculty_id=?",[item.Name,item.Mobile_no,item.Email_id,item.Password,date,item.Salary,item.Qualification,item.Role,Faculty_id],callback);
    },
    deleteFaculty:function(Faculty_id,callback)
    {
        return db.query("delete from faculty where Faculty_id=?",[Faculty_id],callback);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Faculty_id;
        }
         db.query("delete from  faculty where Faculty_id in (?)",[delarr],callback);
    },

    getFacultysalaryLastdate(Faculty_id,callback)
    {
        return db.query("select * from salary where Faculty_id=? ORDER BY Date DESC LIMIT 1",[Faculty_id],callback);
    }


}

module.exports=faculty;
