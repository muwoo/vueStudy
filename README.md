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
 ```
##unit3
######我之前经常使用 Vue，后来不满足于仅仅使用它，我想了解其内部实现原理，所以就尝试学习其源码，获益匪浅。所以，如果你跟我一样，希望挑战这高难度的情，那就开启这一系列吧！我们从最简单的开始。其中，动态数据绑定就是 Vue 最为基础，最为有用的一个功能。这个系列将分成5部分，一步一步来理解和实现这一功能。ok，我们从最简单的开始。给定任意一个对象，如何监听其属性的读取与变化？也就是说，如何知道程序访问了对象的哪个属性，又改变了哪个属性？ 举个例子。
```javascript
let app1 = new Observer({
  name: 'youngwind',
  age: 25
});

let app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science
```
######请实现这样的一个 Observer，要求如下：

* 传入参数只考虑对象，不考虑数组。
* new Observer返回一个对象，其 data 属性要能够访问到传递进去的对象。
* 通过 data 访问属性和设置属性的时候，均能打印出右侧对应的信息。

######参考资料
[vue早期源码学习系列之一：如何监听一个对象的变化](https://github.com/youngwind/blog/issues/84)
