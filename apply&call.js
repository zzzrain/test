// 都用作改变this指向
// 用作继承时，apply、call传参方式不同
// bind()放在函数后面使用，柯里化。。。

// 代理
function log () {
    console.log.apply(console, arguments);
}
log('代理console.log');

// 合并数组
let target = [1,2,3];
let source = [4,5,6];
[].push.apply(target, source);
console.log(target);

// 求数组最值
let max = Math.max.apply(null, [1,2,3,4,5]);
console.log(max);
let min = Math.min.apply(null, [1,2,3,4,5]);
console.log(min);

// 继承
function Person (name) {
    this.name = name;
}

function Student () {
    Person.apply(this, arguments)
}

let s = new Student('mxz');
console.log(s);