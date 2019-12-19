/**
  __proto__：对象的根属性，终点为null（这个属性串起了原型链）
  constructor：指针(来源)，所有函数（对象）终点为Function
  prototype：函数实例化对象所具有的属性（对象属性的实际来源）

  1、对象独有__proto__属性，函数独有prototype属性；
  2、对象由函数生成，函数是一种特殊的对象；
  3、对象的__proto__属性的终点即为原型链的终点null；
  4、对象（函数）constructor的终点为Function；
  5、生成对象时，对象的__proto__属性指向函数的prototype属性；
  6、对象本身不具备constructor属性，是通过函数的prototype继承过来；

*/

console.log('------基础测试------');
console.log(Object.__proto__, Function.__proto__);
console.log(Object.prototype, Function.prototype);
console.log(Object.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.constructor === Function.constructor);

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
console.log((Object.prototype).__proto__ === null);
console.log(Function.prototype.__proto__);
console.log((Function.prototype).__proto__ === Function.prototype);
console.log((Function.prototype).__proto__ === Object.prototype);

console.log('------obj终点推论------');
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(obj.__proto__.__proto__);

console.log('------fn终点推论------');
console.log(fn.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(fn.__proto__.__proto__.__proto__);

function Dio (name) { this.name = name }
let jo = new Dio('这个jo是Dio的一个实例');
console.log(jo.name);

console.log('------__proto__------');
console.log(jo.__proto__ === Dio.prototype);
console.log(Dio.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

console.log('------constructor------');
console.log(jo.constructor === Dio);
console.log(Dio.constructor === Function);

console.log('------原型链关系------');
console.log(Dio.prototype.constructor === Dio);
console.log(Object.prototype.constructor === Object);
console.log(Dio.__proto__ === Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.prototype.constructor === Function);
console.log(Object.constructor === Function);
console.log(Function.prototype.__proto__ === Object.prototype);

console.log('------闭环关系------');
console.log(Function.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.constructor === Object);
console.log(Object.constructor === Function);
