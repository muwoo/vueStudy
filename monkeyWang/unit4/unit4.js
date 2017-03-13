/**
 * @author monkeywang
 * Date: 17/3/10
 * Class Observer
 * @prams obj 传入的绑定数据
 */

var Observer = function(obj){
  this.data = obj; // 为data设置绑定
  this.watch = {}; //定义$watch 的触发函数
  this.walk(this.data);
};
/**
 * function walk 遍历对象内的属性
 * @param obj
 */
Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){ //判断key是不是对象的原生属性
      var val = obj[key];
      if(typeof val === 'object'){ //如果存在多层次对象
        new Observer(val); //递归
      }
      this.setProperty(key, val);
    }
  }
};
/**
 * function setProperty 设置元素属性监听
 * @param key 键
 * @param val 值
 */
Observer.prototype.setProperty = function (key, val) {
  Object.defineProperty(this.data, key, {
    set: function (newValue) {
      this.$dispatch(key, newValue); //触发监听事件
      console.log('你设置了'+key+'的值为'+newValue);
      if(val ===  newValue) return;
      val =  newValue;  //设置新值
    }.bind(this),
    get: function () {
      console.log('访问了'+key);
      return val;
    }
  })
};
/**
 * function $watch 定义监听函数
 * @param key 要监听的属性
 * @param callback 回调函数
 */
Observer.prototype.$watch= function(key, callback){
  if(typeof this.watch[key] === 'undefined'){ //如果还没有定义该属性的监听函数
    this.watch[key] = [callback];  //存入$watch 的触发函数
  }
  else {
    this.watch[key].push(callback); //更新$watch 的触发函数
  }
};
/**
 * function $dispatch 触发$watch函数
 * @param key
 * @param args
 */
Observer.prototype.$dispatch = function (key, args) {
  var _messages = this.watch;
  if(!_messages[key]){ //如果$watch事件未定义
    return;
  }
  var len = _messages[key].length;
  for(var i=0; i< len; i++){  //顺序执行$watch函数
    _messages[key][i](args);
  }
};



