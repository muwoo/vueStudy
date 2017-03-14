/**
 * Created by zj on 2017/3/13.
 */
function Observer(data) {
  this.data = data;
  this.watch = {};
  this.walk(this.data)
}
Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var val = obj[key];
      if(typeof val === 'object'){
        new Observer(val);
      };
      this.setProperty(key,val);
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
      console.log('你设置了属性'+key+'为'+newVal);
      val = newVal;
      return val;
    }.bind(this)
  })
};
Observer.prototype.$dispatch = function (key,args) {
  var _meessages = this.watch;
  if(!_meessages) return ;
  var len = _meessages[key].length;
  for(var i = 0; i<len; i++){
    _meessages[key][i](args)
  }
};
Observer.prototype.$watch = function (key,callback) {
  if( typeof this.watch[key] === 'undefined'){
    this.watch[key] = [callback];
  }
  this.watch[key].push = [callback];
}