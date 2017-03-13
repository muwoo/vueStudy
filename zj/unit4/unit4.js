/**
 * Created by zj on 2017/3/13.
 */
function Observer(data) {
  this.data = data;
  this.walk(data);
  this.watch = {};
};
Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var val = obj[key];
      this.convert(key,val);
      if(typeof val === 'object'){
        return new Observer(val)
      }
    }
  }
};
Observer.prototype.convert = function (key,val) {
  Object.defineProperty(this.data,key,{
    get:function () {
      return val;
    },
    set:function (newVal) {
      this.$dispatch(key,newVal);
      console.log('你设置了'+key+'为'+newVal);
    }.bind(this)
  })
};
Observer.prototype.$watch = function (key,callback) {


};
Observer.prototype.$dispatch = function (key,args) {
  var _message = this.watch;
  if(!_message[key]) return;
  var len = _message[key].length;
  for(var i = 0;i<len;i++){
    _message[key][i](args);
  }

};