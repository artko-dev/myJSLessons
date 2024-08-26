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
   }
}

//console.log(obj);


for (let key in obj) {
   if (typeof (obj[key]) === 'object') {
      for (let i in obj[key]) {
         console.log(`Option ${i} equal ${obj[key][i]}`);
      }
   } else {
      console.log(`Option $[key] equal ${obj[key]}`);
   }
}