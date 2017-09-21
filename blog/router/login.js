var express=require('express');
var bodyParser=require('body-parser');
var router=express.Router();
router.get('/',function(req,res,next){
	res.render('login',{title:'登录页面',content:''});
});
router.post('/login',function(req,res,next){
	var userInfo={usrName:"123",usrPwd:"456"};
	console.log(req.body);
       // userInfo.usrName=req.body.usrName;
       // userInfo.usrPwd=req.body.usrPwd;
   	   // req.session.userInfo=userInfo
   console.log(userInfo);
 //  res.end(JSON.stringify(response));
	res.render('login',{title:'登录页面',content:JSON.stringify("已经登录")});
})
module.exports=router;
