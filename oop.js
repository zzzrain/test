/**
  __proto__：浏览器私有属性，对象的根属性，终点为null（这个属性串起了原型链）
  constructor：构造函数(指针)，所有函数（对象）终点为Function
  prototype：原型对象，函数实例化对象所具有的属性（对象属性的实际来源，可手动添加）

  1、对象独有__proto__和constructor属性，函数独有prototype属性；
  2、对象由函数生成，函数是一种特殊的对象，也有__proto__和constructor；
  3、对象的__proto__属性的终点即为原型链的终点null；
  4、对象本身不具备constructor属性，是通过函数的prototype继承过来；
  5、对象（函数）constructor的终点为Function；
  6、生成对象时，对象的__proto__属性指向函数的prototype属性；

  参考：https://blog.csdn.net/cc18868876837/article/details/81211729
*/

console.log('------基础测试------');
console.log(typeof Object, typeof Object(), typeof Function, typeof Function());
console.log(Object.__proto__.__proto__.__proto__, Function.__proto__.__proto__.__proto__);
console.log(Object.__proto__, Function.__proto__);
console.log(Object.constructor, Function.constructor);
console.log(Object.prototype, Function.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.constructor === Function.constructor);

let obj = { name: '这是对象' };
console.log('------对象------');
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__ === Function.prototype);
console.log(obj.constructor === Object, Object.constructor === Function);
console.log(obj.prototype);

let fn = function () { return '这是函数' };
console.log('------函数------');
console.log(fn.__proto__ === Object.prototype);
console.log(fn.__proto__ === Function.prototype);
console.log(fn.constructor === Function, Function.constructor === Function);
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

function Dio () {}
let jo = new Dio('这个jo是Dio的一个实例');
Dio.prototype.say = 'ko no dio da';
console.log(Dio.prototype.say);
console.log(jo.__proto__.say);

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