var express=require('express');
var path=require('path');
//编码解析
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
//模板引擎
var swig=require('swig');
//session 中间件
var session = require('express-session');
//cookiesh中间件
var cookieParser = require('cookie-parser');
var app=express();
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//静态文件中间件
app.use('/public',express.static('public'));
// 设置路由
app.use('/',require('./router/login'));
// app.use('/admin',require('./router/admin'));
// app.use('/api',require('./router/api'));
app.use(cookieParser());
app.use(urlencodedParser);
//设置swig页面不缓存
swig.setDefaults({
  cache: false
})
app.use(session({
 secret: 'sessiontest',//与cookieParser中的一致
 resave: true,
 saveUninitialized:true
}));
app.set('view cache', false);
app.set('views','./views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);
//每个请求都会执行的中间件usrName:"",usrPwd:""
app.use(function(req,res,next){
	if (req.session.userInfo){//.usrName!="" || req.session.userInfo.usrPwd!="") {
		next();
	}else{
		res.render('login',{title:'登录页面',content:''});     		
	}		
});
app.listen(8088);