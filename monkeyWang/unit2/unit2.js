/**
 * @author monkeywang
 * Date: 17/3/9
 */

/**
 * FootBall 类
 * @constructor
 */
var FootBall = function (area) {
  if (!(this instanceof FootBall)) return new FootBall();
  this.area = area;
};
FootBall.prototype = {
  setWeight: function (weight) {
    this.weight = weight;
  },
  getWeight: function () {
    return this.weight;
  },
  setPeople: function (people) {
    this.people = people;
  },
  getPeople: function () {
    return this.people;
  },
  setHistory: function (history) {
    this.history = history;
  },
  getHistory: function () {
    return this.history;
  },
  getArea: function () {
    return this.area;
  }
};

/**
 * footBall 实现
 * @type {FootBall}
 */
var footBall = new FootBall('960');
footBall.setWeight('10kg');
footBall.setPeople(12);
footBall.setHistory('足球起源于英国');

/**
 * BasketBall 类
 * @constructor
 */
var BasketBall = function (area) {
  if (!(this instanceof BasketBall)) return new BasketBall();
  FootBall.call(this, area);
};
BasketBall.prototype = new FootBall();

/**
 * basketBall 实现
 * @type {BasketBall}
 */
var basketBall = new BasketBall('260');
basketBall.setWeight('12kg');
basketBall.setPepole(10);
basketBall.setHistory('篮球很大');

/**
 * 运动类
 * @param type
 * @param area
 * @returns {Sports}
 * @constructor
 */
function Sports(type, area) {
  if (!(this instanceof Sports)) return new Sports(type, area);
  switch (type) {
    case 'footBall':
      return FootBall(area);
      break;
    case 'basketBall':
      return BasketBall(area);
      break;
  }
}
/**
 * Sports 类实现
 * @type {Sports}
 */
var sports1 = new Sports('footBall', '960');
var sports2 = new Sports('basketBall', '260');

