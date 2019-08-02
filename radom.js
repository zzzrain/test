// n个不重复范围随机数
function radomFn(n,min,max) {
    if (isNaN(n)) {
        alert('输入数字');
        return
    }
    let randomArr = [];
    for (let i=0;i<n;i++) {
        let ele = parseInt(Math.random()*(max-min) + min);
        if (checkArr(ele,randomArr)) {
            i--;
        } else {
            randomArr.push(ele);
        }
    }
    return randomArr
}
function checkArr(ele,arr) {
    if (arr.length < 1)  return false;
    for (let i=0;i<arr.length;i++) {
        if (ele === arr[i]) {
            return true
        }
    }
}
let random = document.querySelector('.random');
random.onclick = (function () {
    console.log(radomFn(3,2,32));
});
