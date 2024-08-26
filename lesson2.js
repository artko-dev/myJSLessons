function calculateVolumeAndArea(l) {
   //let square = (l * l) * 6;
   //let volume = l * l * l;
   if (typeof (l) !== 'number' || l < 0 || !Number.isInteger(l)) {
      return('При вычислении произошла ошибка');
   }
   let square = 0,
      volume = 0;
   square = (l * l) * 6;
   volume = l * l * l;
   return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function numberOfPlace(seat) {
   if (typeof (seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
      return "Ошибка. Проверьте правильность введенного номера места";
   }
   if (seat === 0 || seat > 36) {
      return "Таких мест в вагоне не существует";
   }
   return Math.ceil(seat / 4);
}

console.log(numberOfPlace(8))