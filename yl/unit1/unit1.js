/**
 * @author monkeywang
 * Date: 17/3/8
 */
// 用户名验证
function checkusername(){
    var regex=/^(?!_)(?!.*?_$)[0-9A-Za-z_\u4e00-\u9fa5]{2,12}$/;
    var username=document.getElementById("userName").value;
    console.log(regex.exec(username));
};
// 密码验证
function checkpassword(){
    var regex=/^[0-9A-Za-z]{6,20}$/;
    var password=document.getElementById("userPwd").value;
    console.log(regex.exec(password));
}
// 随机生成效验码
window.onload=function(){
    verifycode();
};
var code;
function verifycode(){
    code="";
    var codelenth=4;
    var verifyCode=document.getElementById("verifyCode");
    var codechars=new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for(var i=0;i<codelenth;i++){
        var charnum=Math.floor(Math.random() * 52);
        code+=codechars[charnum];
    }
    if(verifyCode){
        verifyCode.innerHTML=code;
    }
}
// 效验码验证
function checkcode(){
    var checkCode=document.getElementById("checkCode").value;
    if(checkCode.length<=0){
        alert("效验码不能为空")
    }else if(checkCode.toUpperCase()!=code.toUpperCase()){
        alert("请输入正确的效验码");
        verifycode();
    }else{
        alert("输入正确")
    }
}
// 手机号验证
function checkphone(){
    var regex=/^1[3|5][0-9]\d{11}$/;
    var phone=document.getElementById("userPhone").value;
    console.log(regex.exec(phone));
}