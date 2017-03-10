//创建一个足球类
var Football = function () {
if(!(this instanceof Football)) return new FootBall();
};
//给构造函授添加方法
Football.prototype = {
  setWeight:function (weight) {
    this.weight = weight;
  },
  setPepole:function (people) {
    this.people = people;
  },
  setHistory:function (history) {
    this.history = history;
  },
  getWeight:function () {
    console.log(this.weight);
  },
  getPeople:function () {
    console.log(this.people);
  },
  getHistory:function () {
    console.log(this.history);
  }
};
//创建一个Football的实例
var football = new FootBall();
football.setWeight('12kg');
football.setPeople(12);
football.setHistory('足球的历史');
//创建一个篮球类
var Basketball = function () {
  if(!(this instanceof Basketball)) return new BasketBall();
  Football.call(this,Basketball); //改变this的指向
};
//让篮球类的原型变成Football的一个实例
Basketball.prototype = new FootBall();

var Sports = function (sport) {
  if(!(this instanceof Sports)) return new Sports;
  switch (sport){
    case 'football':
      return Football();
      break;
    case 'basketball':
      return Basketball();
      break;
  }
}; //创建一个运动类
var sport = new Sports('football');
sport.getWeight();

