
var FootBall=function(arex){
    if(!(this instanceof FootBall))
        return new FootBall();
        this.arex=arex;
};
FootBall.prototype={
    setWeight:function(weigth){
        this.weigth=weigth;
        console.log(this.weigth)
    },
    setPeople:function(people) {
        this.people=people;
        console.log(this.people)
    },
    setHistory:function(history){
        this.history=history;
        console.log(this.history)
    }
};
var football=new FootBall("111");
football.setWeight("10kg");
football.setPeople(20);
football.setHistory("这是一个球");

var BasketBall=function(arex){
    if(!(this instanceof BasketBall))
        return new BasketBall();
        FootBall.call(this,arex);
};
BasketBall.prototype=new FootBall();
var basketball=new BasketBall("2222");
basketball.setWeight("20kg");
basketball.setPeople(30);
basketball.setHistory("这是n个球");

function Sports(type,arex){
    if(!(this instanceof Sports))
        return new Sports(type,arex)
    switch (type){
        case 'footBall':
            return FootBall(arex);
            break;
        case 'basketBall':
            return BasketBall(arex);
            break;
    }
}
var sports1=new Sports('footBall','111');
var sports2=new Sports('BasketBall','2222');



function Animal(){
    this.species="动物";
}
function Cat(name,color){
    // Animal.call(this,arguments)
    this.name=name;
    this.color=color;
}
Cat.prototype=new Animal();
Cat.prototype.constructor=Cat;
var cat1=new Cat("大",'小');
alert(cat1.species);
alert(cat1.name);

function extend(child,protd){
    var F=function(){};
     F.prototype=protd.prototype;
     child.prototype=new F();
     child.prototype.constructor=child;
     child.uber=protd.prototype;
}
extend(Cat,Animal);
var chart1=new Cat("aaa",'ddd')
alert(chart1.name);
alert(cat1.species);


var name="Nolabne";
name.age=212;
console.log(name.age);
var num1=5;
var num2=num1;
var obj1=new object();
var obj2=obj1;
obj1.name="Nicholds";
console.log(obj2.name);

function addTen(num){
    num+=10;
    return num;
}
var count=20;
var result=addTen(count);
console.log(count);
console.log(result);

function setName(obj){
    obj.name="Nicode";
}
var preson=new object();
setName(preson);
console.log(preson.name);

function setName(obj){
    obj.name="Nicholda";
    obj=new Object();
    obj.name="wawth";
}
var person=new Object();
setName(preson);
console.log(person.name);
console.log(person instanceof Object);
console.log(preson instanceof Array);
console.log(preson instanceof booelan);


var person=new Object();
person.naem="Nicon";
person.age=29;
var persong={
    name:"Nicomn",
    age:29
}
var colors=new Array();
var count=colors.push('res','blue');
count=colors.push("green");
console.log(count);
var item=colors.pop();
console.log(item);
item=colors.shift();
console.log(item);

var values=[1,2,3,4,5,6];
values.reverse();
console.log(values);

values=[4,2,5,3,7,343];
values.sort();
console.log(values);

function compare(value1,value2){
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else{
        return 0;
    }
}

var values=[1,3,2,4,1];
values.sort(compare);
console.log(values);

var colors=['red','green','blue'];
var color2=colors.concat('yellow');
console.log(colors);
console.log(color2);

var color4s=['res','green','blue','yellow'];
var color2=color4s.slice(1,3);
console.log(color2);
