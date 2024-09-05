'use strict'
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Имя слишком короткое, должно быть более 4 символов");
      return;
    }
    this._name = value;
  }
};

user.name = prompt(`Name?`);
alert(user.name); // Pete

user.name = ""; 

const text = "Java is awesome. Java is fun.";

let pattern = ".";
let newText = text.split(pattern, 2);
console.log(newText); // [ 'Java is awesome', ' Java is fun', '' ]


const obj = {
   a: 5,
   b: 1
}

const copy = obj;

copy.a = 10;

console.log(obj);
console.log(copy);


const q = {
   one: 1,
   two: 2,
   three: {
      ff: 22,
      dd: {
         aa: 45,
         bb: 41
      },
      rr: [1, 4, 6] 
   }
};

const a = { ...q };
a[`one`] = 2;
a[`three`][`rr`][1, 2] = 0;
console.log(a);
console.log(q);