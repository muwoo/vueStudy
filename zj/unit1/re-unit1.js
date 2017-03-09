/**
 * Created by admin on 2017/3/9.
 */
var volidate = (function () {
  return{
    nameRep:/^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/,
    pwdRep:/^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/,
    codeRep: /1[3|5|7|8|]\d{9}/,
    phoneRep:/^1\d{10}/,
  }
})()

var CheckObject = function () {

};
CheckObject.prototype = {
  checkName:function (name) {
    if(volidate.nameRep.test(name)){
      return true;
    }else{
      return false;
    }
  },
  checkPwd:function (pwd) {
    if(volidate.pwdRep.test(pwd)){
      return true;
    }else{
      return false;
    }
  },
  checkCode:function (code) {
    if(volidate.codeRep.test(code)){
      return true;
    }else{
      return false;
    }
  },
  checkPhone:function (phone) {
    if(volidate.phoneRep.test(phone)){
      return true;
    }else{
      return false;
    }
  }
};
var check = new CheckObject();
check.checkName('123');
