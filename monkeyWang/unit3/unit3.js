/**
 * @author monkeywang
 * Date: 17/3/9
 */
var Observer = function (data) {
  this.data = data;
  this.walk(data);
};

Observer.prototype.walk = function (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      this.setProperty(this.data, key);
    }

  }
};
Observer.prototype.setProperty = function (obj, key) {
  Object.defineProperty(obj, key, {
    set: function (newValue) {
      console.log('你设置了' + key + ',新的值是' + newValue);
    },
    get: function () {
      console.log('你访问了' + key);
    }
    }
  );
};

var app1 = new Observer({
  name: 'youngwind',
  age: 25
});

var app2 = new Observer({
  university: 'bupt',
  major: 'computer'
});

app1.data.name; // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university; // 你访问了 university
app2.data.major = 'science';  // 你设置了 major，新的值为 science