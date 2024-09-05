"use strict";

const obj = {
   tor: 2,
   g: 4,
   t: 6
};

for (let key in obj) {
   console.log(`value ${key} = ${obj[key]}`);
};


const arr = [1, 5, 6, 9];
//arr[15] = 0;
for (let value of arr) {
   console.log(`${arr.indexOf(1)} = ${value}`);
};

arr.forEach(function (item, i, arr) {
   console.log(`${i}: ${item} in array ${arr}`)
});

const str = prompt(``, ``);
const product = str.split(`,`);
console.log(product.sort());
console.log(product.join(` : `));
