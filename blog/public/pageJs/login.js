 var login=function(){
 	$.ajax({url:"http://127.0.0.1:8088/login",type:"post",success:function(result){
        $("#content").html(result.content);
    }});
 }
