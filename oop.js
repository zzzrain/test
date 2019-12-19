/**
  1、对象有__proto__和constructor属性，函数有prototype属性；
  2、对象由函数生成，函数也是一种对象；
  3、生成对象时，对象的__proto__属性指向函数的prototype属性；
  4、对象的__proto__属性的终点即为原型链的终点null。

  __proto__：对象的根属性，终点为null
  constructor：指针(来源)，所有函数（对象）最终指向Function
  prototype：函数实例化对象所具有的属性

     对象是函数  √
     函数是对象  √
*/

console.log('------基础测试------');
console.log(Object.__proto__, Function.__proto__);
console.log(Object.prototype, Function.prototype);
console.log(Object.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);

let obj = { name: '这是对象' };
console.log('------对象------');
console.log(obj.constructor === Object, Object.constructor === Function);
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__ === Function.prototype);
console.log(obj.prototype);

let fn = function () { return '这是函数' };
console.log('------函数------');
console.log(fn.constructor === Function, Function.constructor === Function);
console.log(fn.__proto__ === Object.prototype);
console.log(fn.__proto__ === Function.prototype);
console.log(fn.prototype, typeof fn.prototype);
console.log((fn.prototype).__proto__ === Object.prototype);
console.log((fn.prototype).constructor === fn);

console.log('------规则------');
console.log(Object.prototype.__proto__);
console.log((Object.prototype).__proto__ === Object.prototype);
console.log(Function.prototype.__proto__);
console.log((Function.prototype).__proto__ === Object.prototype);

console.log('------obj终点推论------');
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(obj.__proto__.__proto__);

console.log('------fn终点推论------');
console.log(fn.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Function.prototype.__proto__.__proto__);
console.log(fn.__proto__.__proto__.__proto__);


function Foo () { this.name = '这是构造函数' }
let dio = new Foo();

console.log('------__proto__------');
console.log(dio.__proto__ === Foo.prototype);
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

console.log('------constructor------');
console.log(dio.constructor === Foo);
console.log(Foo.constructor === Function);

console.log('------闭环关系------');
console.log(Foo.prototype.constructor === Foo);
console.log(Object.prototype.constructor === Object);
console.log(Foo.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.constructor === Function);
console.log(Object.constructor === Function);
console.log(Function.prototype.__proto__ === Object.prototype);
