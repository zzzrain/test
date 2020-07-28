function clean1(arr) {
  let temp = [];
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i].a === arr[j].a) {
        j = ++i;
      }
    }
    temp.push(arr[i]);
  }
  return temp;
}

function clean2(arr) {
  let l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i].a === arr[j].a) {
        arr.splice(i, 1);
        l--;
        j--;
      }
    }
  }
  return arr;
}

function clean3(arr, ele) {
  let obj = {};
  let temp = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (!obj[arr[i][ele]]) {
      obj[arr[i][ele]] = 1;
      temp.push(arr[i]);
    }
  }
  return temp;
}

function clean4(arr) {
  return Array.from(new Set(arr));
}

function sortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] > arr[j]) {
        let temp = arr[i];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arrPlus = [{'a': 1}, {'b': 2}, {'c': 3}, {'a': 1}, {'b': 2}, {'c': 3}];
let sortPlus = arrPlus.sort(function (x, y) {
  return x.a - y.a;
});

console.log('-----arr-----', clean3(arrPlus));
console.log('-----sort-----', sortArr(arrPlus));
console.log('-----sortPlus-----', sortPlus);


let forEach = [];

arrPlus.forEach(function (i) {
  forEach.push(i);
});

let map = arrPlus.map(function (i) {
  return `<p>${i}</p>>`;
});

let filter = arrPlus.filter(function (i) {
  return i === 2;
});

let reduce = [1, 2, 3, 4];
reduce = reduce.reduce(function (x, y) {
  return x + y;
});

let arrObj = [
  {
    "name": "张洋",
    "age": "23",
    "gender": "fff"
  },
  {
    "name": "刘宇",
    "age": "23",
    "gender": "ggg"
  },
  {
    "name": "陈晨",
    "age": "56",
    "gender": "eee"
  },
  {
    "name": "张洋",
    "age": "23",
    "gender": "sss"
  }
];
let hash = {};
arrObj = arrObj.reduce(function (item, next) {
  console.log(item, '---', next);
  hash[next.name] ? '' : hash[next.name] = true && item.push(next);
  return item;
}, []);

console.log('-----forEach-----', forEach);
console.log('-----map-----', map);
console.log('-----filter-----', filter);
console.log('-----reduce-----', reduce);
console.log('-----reduce-----', arrObj);
console.log('-----reduce-----', hash);


let obj = new Map();
let newObj = obj.set('a', 1);
let newVal = obj.get('a');
console.log('-----obj-----', Array.from(newObj), newVal);
