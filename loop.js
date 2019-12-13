let i = 0;
let j = 0;
let k = 0;
let l = 0;
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [{'a': 1}, {'b': 2}, {'c': 3}, {'d': 4}, {'e': 5}];
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

while (i < 5) {
  console.log(arr1[i]);
  i++;
}

// do {
//   console.log(arr1[j]);
//   j++;
// } while (j < 5) {
//   console.log('loop finish');
// }

for (k = 0; k < 5; k++) {
  console.log(arr1[k]);
}

arr2.forEach(function (ele, idx) {
  console.log('forEach-----', ele, idx);
});

let arr2map = arr2.map(function (ele, idx) {
  console.log('map-----', ele, idx);
  return ele;
});
console.log('map-----', arr2map, arr2 === arr2map);

let arr2filter = arr2.filter(function (ele, idx) {
  console.log('filter-----', ele, idx);
  for (let item in ele) {
    return ele[item] > 2;
  }
});
console.log('filter-----', arr2filter);

// let arr2every = arr2.every(function (ele, idx) {
//   console.log('every-----', ele, idx);
//   for (let item in ele) {
//     return ele[item] < 4;
//   }
// });
// console.log('every-----', arr2every);

// let arr2some = arr2.some(function (ele, idx) {
//   console.log('some-----', ele, idx);
//   for (let item in ele) {
//     return ele[item] > 4;
//   }
// });
// console.log('some-----', arr2some);

arr2.name = '给数组添加一个属性';
// for (let m in arr2) {
//   console.log('for in---', arr2[m]);
// }

for (let o in obj) {
  console.log('for in---', obj[o]);
}

for (let n of arr2) {
  console.log('for of---', n);
}

// for (let p of obj) {
//   // obj is not iterable，不能遍历对象
//   console.log('for of---', p);
// }
