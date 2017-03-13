/**
 * Created by zj on 2017/3/10.
 */
//创建一个构造函数
var Observer = function (data) {
  if(!(this instanceof Observer)) return new Observer();
  this.data = data;
  this.change(data);
};
Observer.prototype.change = function (obj) {
  var tempVal;
  //遍历obj的所有属性，包括继续属性
  for(var key in obj){
    //判断这个属性是不是obj的自身属性
    if(obj.hasOwnProperty(key)){
      tempVal = obj[key];
      this.in(key,tempVal);
      //判断属性本身是否是一个对象，若是说明没有遍历到最底层
      if(typeof key === 'object'){
         new this.constructor(tempVal);
      //  new Observer(tempVal);
      }
    }
  }
};
Observer.prototype.in = function (key,val) {
  //直接在对象上定义或修改一个属性
  Object.defineProperty(this.data,key,{
    //是否为可枚举的属性，默认为false
    //不可枚举属性for-in遍历不到
    enumerable:true,
    //属性描述符是否能被改变，默认false
    configurable:true,
    get:function () {
      console.log('你访问了'+key+'属性');
    },
    set:function (newVal) {
      console.log('你设置了'+key+'的属性为:'+newVal);
      if(val == newVal) return;
      val = newVal;
    }
  })
};

var i = new Observer({
  name:'zj',
  phone:110
});
//var i = Object.setProperty({},Observer.prototype);
//F.call(i)
i.data.name //你访问了name属性
i.data.name = 'silence' //你设置了name的属性为:silence

