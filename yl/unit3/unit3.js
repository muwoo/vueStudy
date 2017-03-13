
function Observer(data){
    this.data=data;
    this.walk(data)
}
Observer.prototype.walk=function (obj) {
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            var val = obj[key];
            this.convert(val,key)
        }
    }
};
Observer.prototype.convert=function(val,key){
    Object.defineProperty(this.data,key,{
        get:function(){
            console.log('你访问了'+key);
            return val;
        },
        set:function(newVal){
            console.log('你设置了'+key+'新的值为'+newVal)
            val = newVal;
        }
    })
}

var app1 = new Observer({
    name: 'youngwind',
    age: 25
});

var app2 = new Observer({
    university: 'bupt',
    major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science