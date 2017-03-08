# javascript-
##unit1 
*  邮箱验证
*  用户名 数字、字母、中文 、划线不能以下划线开头 2-12位
*  密码验证 6-20位英文和数字
*  验证码验证 4-10位英文或数字
*  手机号验证 1开头 11位

##unit2
####写一个足球类要求结果：
 ```javascript
 var footBall = new FootBall();
 footBall.setWeight('10kg');
 footBall.setPepole(12);
 footBall.setHistory('足球起源于英国');
 
 footBall.getWeight(); // 10kg
 footBall.getPepole(); // 12;
 footBall.getHistory; //足球起源于英国
 ```
####写一个篮球类要求结果：
 ```javascript
 var basketBall = new BasketBall();
 basketBall.setWeight('12kg');
 basketBall.setPepole(10);
 basketBall.setHistory('篮球很大');
 
 basketBall.getWeight(); // 12kg
 basketBall.getPepole(); // 10;
 basketBall.getHistory; //篮球很大
 ```
 ####写一个运动类要求结果：
 ```javascript
 var sports1 = new Sports('footBall');
 sports1.getPepole() // 12
 var sports2 = new Sports('basketBall');
 sports2.getPepole() // 10
