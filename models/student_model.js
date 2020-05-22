var db=require('../dbconnection');

var student={
    Studentlogin(item,callback)
    {
        return db.query("select * from student where Email_id=? and Password=?",[item.Email_id,item.Password],callback);
    }, 
    getStudentByEmailID(Email_id,callback)
    {
        return db.query("select s.*,b.Batch_name from student s,batch b where s.Email_id=? and s.Batch_no=b.batch_id",[Email_id],callback);
    },
    updateStudent(item,callback)
    {
        return db.query("update student set Phone_no=? , Parent_mobile_no=? , Address=? where Student_id=? ",[item.Phone_no,item.Parent_mobile_no,item.Address,item.Student_id],callback);
    },
    changePassword(item,callback)
    {
        return db.query("update student set Password=? where Email_id=?",[item.Password,item.Email_id],callback);
    }
}

module.exports=student;