/**
 * @author monkeywang
 * Date: 17/3/8
 */
var volidate = (function () {
  return {
    userNameRep: /^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/,
    passwordRep: /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/,
    codeRep: /1[3|5|7|8|]\d{9}/,
    phoneRep: /^1\d{10}/
  }
});


var CheckObject = function () {
};
CheckObject.prototype.checkUsername = function (value) {
  if (volidate.userNameRep.test(value)) {
    return true;
  } else {
    return false;
  }
};

CheckObject.prototype.checkPassword = function (value) {
  if (volidate.passwordRep.test(value)) {
    return true;
  } else {
    return false;
  }
};

CheckObject.prototype.checkCode = function (value) {
  if (volidate.codeRep.test(value)) {
    return true;
  } else {
    return false;
  }
};

CheckObject.prototype.checkPhone = function (value) {
  if (volidate.phoneRep.test(value)) {
    return true;
  } else {
    return false;
  }
};

var checkObject = new CheckObject();
checkObject.checkPhone('18668218226'); // true
