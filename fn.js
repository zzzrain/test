function fn1(arr) {
    let arrTemp;
    let sumTemp = [];
    let sum = 0;
    let sumArr = [];
    let max = 0;
    let idx = 0;

    arr.forEach(function (e, i) {
        arr.forEach(function (e1, j) {
            arrTemp = arr.slice(i, j + 1);
            if (arrTemp.length) {
                sumTemp.push(arrTemp);
            }
        })
    });

    sumTemp.forEach(function (e) {
        e.forEach(function (e1) {
            sum += e1;
        });
        sumArr.push(sum);
        sum = 0;
    });

    max = sumArr[0]; // 取第一个值
    sumArr.forEach(function (e, i) {
        if (e > max) {
            max = e;
            idx = i;
        }
    });

    // console.log(sumTemp[idx]);
    // console.log(sumTemp);
    // console.log(sumArr);
    return sumTemp[idx];
}

console.log(fn1 ([-2,1,-3,4,-1,2,1,-5,4]));
