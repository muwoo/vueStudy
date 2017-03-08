/**
 * @author monkeywang
 * Date: 17/3/8
 */
/*
 *  邮箱验证
 *  用户名 数字、字母、中文 、下划线,不能以下划线开头 2-12位
 *  密码验证 6-20位英文和数字
 *  验证码验证 4-10位英文或数字
 *  手机号验证 1开头 11位
 */

//邮箱验证
function checkmail() {
  var mail = document.getElementById('mail');
  if(mail.value == ''){
    console.log('请输入邮箱');
  }else{
    if(verifymail(mail.value)){

    }else{
      console.log('邮箱输入错误');
    }
  }
}
//用户名验证
function checkname() {
  var userName = document.getElementById('userName');
  if(userName.value == ''){
    console.log('请输入用户名');
  }else{
    if(verifyname(userName.value)){

    }else{
      console.log('用户名输入错误');
    }
  }
}
//密码验证
function checkpsd() {
  var psd = document.getElementById('psd');
  if(psd.value == ''){
    console.log('请输入密码');
  }else{
    if(verifypsd(psd.value)){

    }else{
      console.log('密码输入错误');
    }
  }
}
//验证码验证
function checkcode() {
  var code = document.getElementById('indentCode');
  if(code.value == ''){
    console.log('请输入验证码');
  }else{
    if(verifycode(code.value)){

    }else{
      console.log('验证码输入有误');
    }
  }
}
//手机号验证
function checkphone() {
  var phone = document.getElementById('phone');
  if(phone.value == ''){
    console.log('请输入手机号');
  }else{
    if(verifyphone(phone.value)){

    }else{
      console.log('手机号输入有误');
    }
  }
}

function verifymail(val) {
  var mail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  if(mail.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifyname(val) {
  var userName = /^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/;
  if(userName.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifypsd(val) {
  var psd = /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/;
  if(psd.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifycode(val) {
  var code = /1[3|5|7|8|]\d{9}/;
  if(code.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifyphone(val) {
  var phone = /^1\d{10}/;
  if(phone.test(val)){
    return true;
  }else{
    return false;
  }
}
