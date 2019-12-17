/**
  1、对象有__proto__属性，函数有prototype属性；
  2、对象由函数生成；Object.constructor === Function // true
  3、生成对象时，对象的__proto__属性指向函数的prototype属性。
  4、对象的__proto__属性的终点即为原型链的终点null
     对象是函数  √
     函数是对象  √
*/

console.log(Object.__proto__, Function.__proto__);
console.log(Object.prototype, Function.prototype);
console.log(Object.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
console.log(Function.__proto__ === Object.prototype);
console.log(Function.__proto__ === Function.prototype);

let obj = { name: '这是对象' };
console.log(obj.constructor === Object);
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__ === Function.prototype);
console.log(obj.prototype);

let fn = function () { return '这是函数' };
console.log(fn.constructor === Function);
console.log(fn.__proto__ === Object.prototype);
console.log(fn.__proto__ === Function.prototype);
console.log(fn.prototype, typeof fn.prototype);
console.log((fn.prototype).__proto__ === Object.prototype);
console.log((fn.prototype).constructor === fn);

console.log(Object.prototype.__proto__);
console.log((Object.prototype).__proto__ === Object.prototype);
console.log(Function.prototype.__proto__);
console.log((Function.prototype).__proto__ === Object.prototype);

console.log((fn.__proto__).__proto__ === Object.prototype);
console.log((fn.__proto__).__proto__.__proto__);
console.log(Object.prototype.__proto__);
console.log(obj.__proto__ === Object.prototype);
console.log(obj.__proto__.__proto__);
