var db=require('../dbconnection');
var date=Date;
date=new Date(date.now());

var fees={
    getAlltransaction:function(callback)
    {
        return db.query("select * from fees",callback);
    },

    getTransactionByStudent:function(Student_id,callabck)
    {
        return db.query("select * from fees where Student_id=?",[Student_id],callabck);
    },

    addFees:function(item,callback)
    {
        return db.query("insert into fees (Student_id,Paid_amount,Date) values(?,?,?)",[item.Student_id,item.Paid_amount,date],callback);
    },

    getTansactionDetails:function(callback)
    {
    return db.query("select b.Batch_name,s.*,f.* from fees f, student s,batch b where f.Student_id=s.Student_id and b.Batch_id=s.Batch_no Limit 5",callback);
    },

    addSalary(item,callback)
    {
        console.log(item);
        return db.query("insert into salary (Faculty_id,Paid_amount,Date) values(?,?,?)",[item.Faculty_id,item.Paid_amount,date],callback);       
    }
   
  

}
module.exports=fees;