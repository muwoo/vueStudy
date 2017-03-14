/**
 * Created by admin on 2017/3/14.
 */
var Observer = function (data) {
  this.data = data;
  this.walk(this.data);
  this._reWatch = (function (self) {
    return function (key,callback) {
      for(var onkey in self.data[key]){
        if(self.data[key].hasOwnProperty(onkey)){
          self.$watch(onkey,callback)
        }
      }
    }
  })(this)
};
Observer.prototype.watch = {};
Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      this.setProperty(key,obj[key]);
      if(typeof obj[key] === 'object'){
        new Observer(obj[key]);
      }
    }
  }
};
Observer.prototype.setProperty = function (key,val) {
  Object.defineProperty(this.data,key,{
    get:function () {
      return val;
    },
    set:function (newVal) {
      this.$dispatch(key,newVal);
      console.log('你设置了'+key+'为'+newVal);
      val = newVal;
      return val;
    }.bind(this)
  })
};
Observer.prototype.$dispatch = function (key,args) {
  var _messages = this.watch;
  if(!_messages) return;
  var len = _messages[key].length;
  for(var i = 0;i < len; i++){
    _messages[key][i](args);
  }
};
Observer.prototype.$watch = function (key,callback) {
  var self = this;
  if(typeof this.watch[key] === 'undefined'){
    this.watch[key] = [callback];
    if(typeof this.data[key] === 'object'){
      this._reWatch(key,callback);
    }
  }else{
    this.watch[key].push(callback);
    this._reWatch(key,callback)
  }
};