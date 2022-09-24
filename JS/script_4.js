// Задание№1

// let arr = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 10) {
//     console.log(arr[i]);
//   } else {
//     break;
//   }
// }

// Задание№2

// let arr = [1, 5, 4, 10, 0, 3];
// arr = arr.indexOf(4);
// console.log(arr);

// Задание№3

// let arr = [1, 3, 5, 10, 20]
// arr = arr.join(" ");
// console.log(arr);

// Задание№4

// let arr = [];
// let arrTwo = [];
// for (let i = 0; i <= 10; i++) {
//   arr[i] = Math.round(Math.random() * 10);
// }
// console.log(arr);

// console.log(arr.filter((elem) => elem % 2 === 0));

// Задание№5

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {}
// }
// console.log(arr);

// let arr =[];
//   for(let i=0,n=1;i<4;i++,n++){
//     arr[i]=[];
//     for(let j=i;j<n;j++)
//     {
//       arr[i][j]=n;
//     }
//   }
//   console.log(arr);

// Задание№6

// let arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание№7

// let arr = [9, 8, 7, "a", 6, 5];
// arr = arr.sort();
// console.log(arr.pop());
// console.log(arr);

// Задание№8

// let arr = [9, 8, 7, 6, 5];
// console.log(arr);
// let answer = Number(prompt("введите число от 1 до 10"));
// let result = arr.includes(answer);
// if (result) {
//   alert("такое число есть");
// } else {
//   alert("данного числа нет");
// }

// Задание№9

// let arr = "abcdef";
// arr = arr.split("");
// arr.reverse();
// arr = arr.join('')
// console.log(arr);

// Задание№10

// let arr = [];
// let average = []
// let sum = 0;
// for (let i = 0, t = 10; i < 6; i++) {
//   arr.push(Math.round(Math.random() * t));
//   console.log(arr[i]);
//   sum += arr[i];
//   average = sum / 6;
// }

// console.log(average);

// Задание№11

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// arr = arr.flat();
// arr.flat();
// console.log(arr);

// Задание№12

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = Math.ceil(Math.random() * 10);
  
// }
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//   const item = arr[i];
//   let sum = item;
//   sum += arr[i + 1];
//   console.log(sum);
// }



// let arr = [];
//     for (let i = 0; i < 10; i++)
//     {
//         arr[i] = Math.ceil(Math.random() * 10);
//     }
//     console.log(arr);
//     for (let i = 0; i < arr.length - 1; i++) {
//         sum = arr[i] +arr[i + 1];
//         console.log(sum);
//     }
