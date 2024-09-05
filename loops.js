"use strict";

const obj = {
   name: 'test',
   hight: 1280,
   width: 1280,
   colors: {
      bg: 'red',
      border: 'black',
      buttons: {
         first: 'yellow',
         second: 'grey',
      }
   },
   makeTest: function () {
      console.log('Test');
   }
};

obj.makeTest();

console.log(Object.keys(obj).length);

let counter = 0;

for (let key in obj) {
   if (typeof (obj[key]) === 'object') {
      for (let i in obj[key]) {
         console.log(`Option ${i} equal ${obj[key][i]}`);
         counter++;
      }
   } else {
      console.log(`Option ${key} equal ${obj[key]}`);
      counter++;
   }
}
console.log(counter);