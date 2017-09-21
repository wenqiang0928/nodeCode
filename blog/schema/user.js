var mongoose=require('mongoose');
var userSchema=mongoose.Schema;
module.exports=new userSchema({
usrName:String,
usrPwd:String,
});
		