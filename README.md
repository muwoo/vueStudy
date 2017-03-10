# javascript-
##目录层次：
 目前学习曲线有三个前端开发，每个人有各自的目录，可以很好地对比彼此的代码。
 ![image](https://github.com/monkeyWangs/javascript-/blob/master/images/discribe.png)
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

##unit4
######这是“动态数据绑定”系列的第二题。在第一题的基础上，我们继续考虑以下难点：如果传入参数对象是一个“比较深”的对象（也就是其属性值也可能是对象），那该怎么办呢？举个例子。
```javascript
// 一个“比较深”的对象：某些属性的值也是一个对象
let obj = {
 a: 1,
 b: 2,
 c: {
     d: 3,
     e: 4
 }
}
```
######如果设置新的值是一个对象的话，新设置的对象的属性是否能能继续响应 getter 和 setter。举个例子。
```javascript
 let app1 = new Observer({
         name: 'youngwind',
         age: 25
 });

 app1.data.name = {
         lastName: 'liang',
         firstName: 'shaofeng'
 };

 app1.data.name.lastName;
 // 这里还需要输出 '你访问了 lastName '
 app1.data.name.firstName = 'lalala';
 // 这里还需要输出 '你设置了firstName, 新的值为 lalala'
 ```
 ######考虑传递回调函数。在实际应用中，当特定数据发生改变的时候，我们是希望做一些特定的事情的，而不是每一次都只能打印出一些信息。所以，我们需要支持传入回调函数的功能。举个例子。
 ```javascript
  let app1 = new Observer({
         name: 'youngwind',
         age: 25
 });

 // 你需要实现 $watch 这个 API
 app1.$watch('age', function(age) {
         console.log(`我的年纪变了，现在已经是：${age}岁了`)
 });

 app1.data.age = 100; // 输出：'我的年纪变了，现在已经是100岁了'
 ```
