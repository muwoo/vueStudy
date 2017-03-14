/**
 * Created by admin on 2017/3/13.
 */
function Observer(data) {
  this.data = data;
  this.walk(this.data);
}
Observer.prototype.walk = function (obj) {
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var val = obj[key];
      this.convert(key,val);
      if(typeof val === 'object'){
        return new Observer(val);
      }
    }
  }
};
Observer.prototype.convert = function (key,val) {
  Object.defineProperty(this.data,key,{
    get:function () {
      console.log('你访问了属性'+key);
      return val;
    },
    set:function (newVal) {
      console.log('你改变了属性'+key+'值为'+newVal);
      val = newVal;
      return newVal;
    }
  })
};
