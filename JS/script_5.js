// Задание №1

// let length = prompt("Введите длину комнаты");
// let width = prompt("Введите ширину комнаты");
// let square = length * width;
// if (square) {
//   alert(`Ваш минимальный ремонт: ${square * 7000}`);
//   alert(`Ваш средний ремонт: ${square * 10000}`);
//   alert(`Ваш максимальный ремонт: ${square * 15000}`);
// } else {
// }

// Задание №2

// let arr = [];
// for (let i = 0; i < 4; i++) {
//   arr[i] = Math.ceil(Math.random() * 10);
// }
// console.log(arr);
// for (let i = 0; i < arr.length - 1; i++) {
//   sum1 = arr[0] * arr[1];
//   sum2 = arr[2] * arr[3];
//   sum = sum1 + sum2;
//   console.log(sum);
// }

// Задание №3

// let number = 1234;
// let s = 0;
// let arr = ("" + number).split("").map(Number);
// console.log(arr);
// function sum(arr) {
//   let s = 0;
//   for (let i = 0; i < arr.length; i++) {
//     s += arr[i];
//   }
//   return s;
// }

// const numbers = [1, 2, 3, 4];
// const sumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);
// console.log(sumOfNumbers);

// Задание №4

// let arr = [];
// for (let i = 0; i < 4; i++) {
//   arr[i] = Math.ceil(Math.random() * 10);
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   sum = arr[i] ** 2;
//   console.log(sum);
// }

// Задание №5

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let index = arr.indexOf(4);
// if (index !== -1) {
//   arr.splice(index, 2);
// }
// console.log(arr);

// Задание №6

// let str = 'hello'
// function f(str) {
//     return str.slice(0,2).toUpperCase() + str.slice(2).toLowerCase()
// }

// console.log(f('hello'));

// Задание №7

// let arr = [];
// let number = Number(prompt("Введите число от 1 до 20"));
// for (let i = 0; i < number; i++) {
//   arr.push(i + 1);
// }
// console.log(arr);
// if (number >= 1 && number <= 20) {
//   console.log(arr.filter((elem) => elem % 2 === 0));
// } else {
//   alert("Вы ввели не корректное число");
// }

// Задание №8

// let data = "abcdefghijklmnopqrstuvwxyz0123456789";
// let password = [];
// password = data.split("");
// let genPassword = [];
// for (let i = 0; i < 8; i++) {
//   let rand = Math.random() > 0.5;
//   if (rand) {
//     genPassword.push(password[Math.floor(Math.random() * password.length)]);
//   } else {
//     genPassword.push(
//       password[Math.floor(Math.random() * password.length)].toUpperCase()
//     );
//   }
// }
// console.log(genPassword.join(""));
// alert(`Пароль: ${genPassword.join("")}`);

// Задание №9

// let a = Number(prompt("Введите длину стороны a"));
// let b = Number(prompt("Введите длину стороны b"));
// let c = Number(prompt("Введите длину стороны c"));

// let s = (a + b + c) / 2;
// let triangle = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
// alert(`Площадь треугольника: ${triangle}`);

// Задание №10
// let q = prompt("Весит груща нельзя скушать");
// q = q.toLowerCase();
// if (q === "лампочка") {
//   alert("Ты угадал");
// } else {
//   alert("Жаль, есть еще две попытки");
// }
// let q2 = prompt("Весит груща нельзя скушать");
// q2 = q2.toLowerCase();
// if (q2 === "лампочка") {
//   alert("Ты угадал");
// } else {
//   alert("Жаль, есть еще одна попытка");
// }
// let q3 = prompt("Весит груща нельзя скушать");
// q3 = q3.toLowerCase();
// if (q3 === "лампочка") {
//   alert("Ты угадал");
// } else {
//   alert("Ты проиграл");
// }

let data = "abcdefghijklmnopqrstuvwxyz0123456789";
let password = [];
password = data.split("");
let genPassword = [];
for (let i = 0; i < 8; i++) {
  let rand = Math.random() > 0.5;
  if (rand) {
    genPassword.push(password[Math.floor(Math.random() * password.length)]);
  } else {
    genPassword.push(
      password[Math.floor(Math.random() * password.length)].toUpperCase()
    );
  }
}
alert(`Пароль ${genPassword.join("")}`);
