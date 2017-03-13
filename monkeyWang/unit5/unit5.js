/**
 * @author monkeywang
 * Date: 17/3/13
 */

var Observer = function(obj){
  this.data = obj;
  this.walk(this.data);

  this._reWatch = (function (self) {
    //循环监听属性
    return function (key, callback) {
      for(var onKey in self.data[key]){
        if(self.data[key].hasOwnProperty(onKey)){
          self.$watch(onKey, callback)
        }
      }
    }
  })(this);
};

//注意这里我把watch抽出来了，因为下面有个new Observer(val);这样的操作；所以每次都会新初始化this
//导致每次的watch都是一个新的空对象，所以放到公共的prototype中...
//目前没发现什么问题...
Observer.prototype.watch = {};


Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var val = obj[key];
      if(typeof val === 'object'){
        new Observer(val);
      }
      this.setProperty(key, val);
    }
  }
};

Observer.prototype.setProperty = function (key, val) {
  Object.defineProperty(this.data, key, {
    set: function (newValue) {
      this.$dispatch(key, newValue);
      console.log('你设置了'+key+'的值为'+newValue);
      if(val ===  newValue) return;
      val =  newValue;
    }.bind(this),
    get: function () {
      console.log('访问了'+key);
      return val;
    }
  })
};
Observer.prototype.$watch= function(key, callback){
  var self = this;
  if(typeof this.watch[key] === 'undefined'){
    this.watch[key] = [callback];
    //循环监听
    if(typeof this.data[key] === 'object'){
      this._reWatch(key, callback);
    }
  }
  else {
    this.watch[key].push(callback);
    //循环监听
    if(typeof this.data[key] === 'object'){
      this._reWatch(key, callback);
    }
  }
};
Observer.prototype.$dispatch = function (key, args) {
  var _messages = this.watch;
  if(!_messages[key]){
    return;
  }
  var len = _messages[key].length;
  for(var i=0; i< len; i++){
    _messages[key][i](args);
  }
};




var app2 = new Observer({
  name: {
    firstName: 'shaofeng',
    lastName: 'liang'
  },
  age: 25
});

app2.$watch('name', function (newName) {
  console.log('我的姓名发生了变化，可能是姓氏变了，也可能是名字变了。')
});

app2.data.name.firstName = 'hahaha';



