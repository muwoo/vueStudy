/**
 * Created by admin on 2017/3/8.
 */
var Football = function () {

};
Football.prototype = {
  setWeight:function (weight) {
    return weight;
  },
  setPeople:function () {
    return 12;
  },
  setHistory:function () {
    return '足球起源于英国'
  },
  getWeight:function () {
    console.log('10kg');
  },
  getPeople:function () {
    console.log(12);
  },
  getHistory:function () {
    console.log('足球起源于英国');
  }
}
var Basketball = function () {

};
Basketball.prototype = {
  setWeight:function () {
    return '12kg';
  },
  setPeople:function () {
    return 10;
  },
  setHistory:function () {
    return '篮球很蓝';
  },
  getWeight:function () {
    return '12kg'
  },
  getPeople:function () {
    return 10;
  },
  getHistory:function () {
    return ''
  }
};
var football = new Football();
var basketball = new Basketball();
football.setHistory();
var Sports = function (val) {
  switch(val){
    case 'football':
      return football;
      break;
    case 'basketball':
      return basketball;
      break
  }
};
var sport = new Sports('football');
sport.getHistory();



