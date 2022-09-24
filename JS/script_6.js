// Задание №1

// const numbers = {
//   keyin1: 1,
//   keyin2: 2,
//   keyin3: 3,
//   keyin4: 4,
//   keyin5: 5,
//   keyin6: 6,
//   keyin7: 7,
// };
// for (let key in numbers) {
//   if (numbers[key] >= 3) {
//     console.log(numbers[key]);
//   }
// }

// Задание №2

// const today = {
//   day: 20,
//   mounth: 8,
//   year: 2022,
// };
// console.log(Object.values(today).join(" - "));


// Задание №3

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = [
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье",
// ];
// const week = {};
// for (let i = 0; i < 7; i++) {
//   week[en[i]] = ru[i];
// }
// console.log(week);

// Задание №4

// const week = {
//   1: "понедельник",
//   2: "вторник",
//   3: "среда",
//   4: "четверг",
//   5: "пятница",
//   6: "суббота",
//   7: "воскресенье",
// };
// let arr = Object.values(week);
// let question = prompt("Введите день недели").toLowerCase();
// for (let i = 0; i <= 7; i++) {
//   if (Object.keys(week).includes(question) && question == 1) {
//     alert("Это понедельник");
//   }
//   if (Object.keys(week).includes(question) && question == 2) {
//     alert("Это вторник");
//   }
//   if (Object.keys(week).includes(question) && question == 3) {
//     alert("Это среда");
//   }
//   if (Object.keys(week).includes(question) && question == 4) {
//     alert("Это четверг");
//   }
//   if (Object.keys(week).includes(question) && question == 5) {
//     alert("Это пятница");
//   }
//   if (Object.keys(week).includes(question) && question == 6) {
//     alert("Это суббота");
//   }
//   if (Object.keys(week).includes(question) && question == 7) {
//     alert("Это воскресенье");
//   }
//   if (
//     question === "понедельник" ||
//     question === "вторник" ||
//     question === "среда" ||
//     question === "четверг" ||
//     question === "пятница"
//   ) {
//     alert("Будний день");
//     break;
//   }
//   if (question === "суббота" || question === "воскресенье") {
//     alert(" Выходной день");
//     break;
//   } else {
//     alert("Вы ввели не корректные данные");
//     break;
//   }
// }

// Задание №5
// const numbers = {
//   key1: {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//   },
//   key2: {
//     keyin1: 4,
//     keyin2: 5,
//     keyin3: 6,
//   },
// };
// const x = Object.values(numbers.key1);
// const y = Object.values(numbers.key2);
// let sum1 = 0;
// let sum2 = 0;
// for (let i = 0; i < x.length; i++) {
//   sum1 += x[i];
// }
// console.log(sum1);
// for (let i = 0; i < y.length; i++) {
//   sum2 += y[i];
// }
// console.log(sum2);
// console.log(sum1 + sum2);

// Задание №6

// const year = {
//   ru: [
//     "январь",
//     "февраль",
//     "март",
//     "апрель",
//     "май",
//     "июнь",
//     "июль",
//     "август",
//     "сентябрь",
//     "октябрь",
//     "ноябрь",
//     "декабрь",
//   ],
//   en: [
//     "january",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "december",
//   ],
// };
// let language = prompt("Введите ru или en").toLowerCase();
// let month = Number(prompt("Введите номер месяца, который вы хотите вывести"));

// if (month >= 1 && month <= 12 && !Number.isNaN(month)) {
//   switch (language) {
//     case "ru":
//       alert(year.ru[month - 1]);
//       break;
//     case "en":
//       alert(year.en[month - 1]);
//       break;
//     default:
//       alert("another language");
//   }
// } else {
//   alert("another month");
// }

// Игра 3 #2

// const secret = {
//   question: "Висит груша нельзя скушать",
//   answer: "лампочка",
//   hints: ["... Ильича", "Висит на потолке"],
//   askQuestion() {
//     let userAnswer = prompt(this.question).toLowerCase();
//     for (let i = 0; i < this.hints.length; i++) {
//       if (this.answer === userAnswer) {
//         alert("Это правильный ответ");
//         return;
//       } else if (i < this.hints.length) {
//         userAnswer = prompt(this.hints[i]).toLowerCase();
//       } else {
//         alert("Ты проиграл");
//       }
//     }
//   },
// };

// secret.askQuestion();
