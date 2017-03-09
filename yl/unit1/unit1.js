/**
 * @author monkeywang
 * Date: 17/3/8
 */
var variable = (function () {
   return{
       userNameRep: /^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/,
       passwordRep: /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/,
       phoneRep: /^1\d{10}/,
       code:''
    };
})();
// 用户名验证
var CheckObject=function(){

};
CheckObject.prototype.checkusername=function(){
    var username=document.getElementById("userName").value;
    if(variable.userNameRep.exec(username)===null){
        console.log("请输入正确的用户名")
    }else{
        console.log("验证成功")
    }
};
// 密码验证
CheckObject.prototype.checkpassword=function(){
    var password=document.getElementById("userPwd").value;
    if(variable.passwordRep.exec(password)===null){
        console.log("请输入正确的密码")
    }else{
        console.log("验证成功")
    }
}
// 随机生成效验码

CheckObject.prototype.verifycode=function(){
    variable.code="";
    var codelenth=4;
    var verifyCode=document.getElementById("verifyCode");
    var codechars=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for(var i=0;i<codelenth;i++){
        var charnum=Math.floor(Math.random() * 52);
        variable.code+=codechars[charnum];
    }
    if(verifyCode){
        verifyCode.innerHTML=variable.code;
    }
}
// 效验码验证
CheckObject.prototype.checkcode=function(){
    var checkCode=document.getElementById("checkCode").value;
    if(checkCode.length<=0){
        alert("效验码不能为空")
    }else if(checkCode.toUpperCase()!=variable.code.toUpperCase()){
        alert("请输入正确的效验码");
        CheckObject.prototype.verifycode();
    }else{
        alert("输入正确")
    }
}
// 手机号验证
CheckObject.prototype.checkphone=function(){
    var phone=document.getElementById("userPhone").value;
    if(variable.phoneRep.exec(phone)===null){
        console.log("请输入正确的手机号")
    }else{
        console.log("验证成功")
    }
}
CheckObject.prototype.verifycode();
