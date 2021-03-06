// 对象深拷贝
let obj = {
    a:1,
    b:2,
    c:3,
};
let lbj = {};
for (let key in obj) {
    lbj[key] = obj[key]
}
console.log(lbj, lbj === obj);

// es6深拷贝
const defaultOpt = {
    title: {
        text: 'hello world',
        subtext: 'It\'s my world.'
    }
};
const opt = Object.assign({}, defaultOpt, {
    title: {
        text: 'hello world',
        subtext: 'Yes, your world.'
    }
});
console.log(opt, opt === defaultOpt);