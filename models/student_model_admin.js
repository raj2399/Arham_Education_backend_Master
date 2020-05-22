var db=require('../dbconnection');
var join_date=Date;
join_date=new Date(join_date.now());


var student={
    Studentlogin(item,callback)
    {
        return db.query("select * from student where Email_id=? and Password=?",[item.Email_id,item.Password],callback);
    },
    getStudentByEmailID(Email_id,callback)
    {
        return db.query("select * from student where Email_id=?",[Email_id],callback);
    },
    getStudentByBatch_id(batch_id,callback)
    {
        return db.query("select * from student where Batch_no=?",[batch_id],callback);
    },
    getStudentByStudent_Id:function(Student_id,callback)
    {
        return db.query("select * from student where Student_id=?",[Student_id],callback);
    },
    getAllStudent:function(callback)
    {
        return db.query("select * from student",callback);
    },
    addStudent:function(item,callback)
    {
       var dob=new Date(item.Date_of_birth);
        console.log(item);
        console.log(dob);
        console.log(join_date)
        return db.query("insert into student (Password,Name,Batch_no,Email_id,Phone_no,Last_name,Middle_name,Parent_name,Parent_mobile_no,Address,Date_of_birth,Status,Fees,Joining_date,Gender)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [item.Password,item.Name,item.Batch_no,item.Email_id,
            item.Phone_no,item.Last_name,item.Middle_name,item.Parent_name,
            item.Parent_mobile_no,item.Address,dob,item.Status,item.Fees,join_date,item.Gender],callback);
    },
    updateStudentByStudentId:function(Student_id,item,callback){
        console.log(item);
        var date=new Date(item.Date_of_birth);
        console.log(Student_id);
        return db.query("update student set Password=?,Name=?,Batch_no=?,Email_id=?,Phone_no=?,Last_name=?,Middle_name=?,Parent_name=?,Parent_mobile_no=?,Address=?,Date_of_birth=?,Status=?,Fees=?,Joining_date=?,Gender=? where Student_id=?"
        ,[item.Password,item.Name,item.Batch_no,item.Email_id,item.Phone_no,item.Last_name,item.Middle_name,item.Parent_name,item.Parent_mobile_no,item.Address,date,item.Status,item.Fees,join_date,item.Gender,Student_id],callback);
    },
    deleteStudent:function(Student_id,callback)
    {
        return db.query("delete from student where Student_id=?",[Student_id],callback);
    },
    deleteAll:function(item,callback)
    {
        var delarr=[];
        for(i=0;i<item.length;i++){

        delarr[i]=item[i].Student_id;
        }
         db.query("delete from student where student_id in (?)",[delarr],callback);
    },

    getstudentDetails:function(callback)
    {
    return db.query("select b.Batch_name,s.* from student s,batch b where b.Batch_id=s.Batch_no",callback);
    },

    updateStudentStatus(batch_no,callback)
    {
        return db.query("update student set Status=0,Batch_no=0 where Batch_no=?",[batch_no],callback);
    }


}

module.exports=student;
