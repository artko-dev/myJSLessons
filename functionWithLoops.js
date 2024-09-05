function firstTask() {
    // Пишем решение вот тут
for (let i = 5; i <= 10; i++) {
    console.log(i);
    }
}

console.log(firstTask());

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i => 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}
console.log(secondTask());

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i = 1; i <= 10; i++) {
       if (i % 2) {
          continue;
       }
       console.log(i);
    }
}
console.log(thirdTask());

 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 }

 function fourthTask() {
    // Пишем решение вот тут
    let i = 2;
    while (i < 16) {
         i++;
         if (i % 2 === 0) {
            continue;
         } else {
            console.log(i);
         }
        
    }
}

console.log(fourthTask());

function fifthTask() {
    const arr = [];
    let num = 10
    let length = 5
    for (i = length; i <= num; i++) {
        arr[i - length] = i;
        }
    console.log(arr);
}
console.log(fifthTask());