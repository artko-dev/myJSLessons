function sayHello(name) {
    return `Привет ` + name;
}

sayHello('Alex');
console.log(sayHello('Alex'));

function returnNeighboringNumbers(num) {
    return num = [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);
console.log(returnNeighboringNumbers(5));

function getMathResult(num, times) {
   if (typeof (times) !== 'number' || times <= 0) {
      return num
   }
   let result = '';
   for (let i = 1; i <= times; i++) {
      if (i === times) {
         result += `${i * num}`;
      } else {
         result += `${i * num}---`
      }
   }
   return result;
}
getMathResult(5, 3);
console.log(getMathResult(5, 5));
