// 1. Создайте переменную `a`. Запишите в нее значение `10`, выведите его на экран с помощью метода `alert()`. Затем запишите в нее значение `20`, выведите его на экран.
// let a = 10;
// alert(a);
// a = 20;
// alert(a);
// 2. Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран.
// const createIphone = 2008;
// alert(createIphone);
// 3. Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран.
// const nameCreater = "BrendanEich";
// alert(nameCreater);
// 4. Создайте две переменные `10` и `2`**.** С помощью метода `alert()` выведите на экран их сумму, разность, произведение и частное (результат деления).
// let a = 10;
// let b = 2;
// alert(a + b);
// alert(a - b);
// alert(a * b);
// alert(a / b);
// 5. С помощью метода `prompt()` создать переменные `a` и `b`, присвоить этим переменным произвольные значения. Результатом работы программы должно быть сложение двух этих значений.
// let a = Number(prompt("Введите первое число"));
// let b = Number(prompt("Введите второе число"));

// alert(a + b);
// **Не забудьте про использование преобразования типов*

// 6. Возведите `2` в `5`-ю степень. Результат запишите в переменную `result` и выведите на экран с помощью метода `alert()`.
// let result = 2 ** 5;
// alert(result);

// 7. Даны переменные: `a = 9` и ****`b = 2`. Найдите **остаток от деления** `a` на `b` ****и выведите результат на экран с помощью метода `alert()`.
// const a = 9;
// const b = 2;
// let result = `${a % b}`;
// alert(result);
// 8. Исправьте код с помощью преобразования типов, чтобы на экран выводилось число `5`, а не строка `'23'`:

// let a = "2";
// let b = "3";
// a = Number(a);
// b = Number(b);
// alert(a + b);

// 1. Создайте две переменные со значениями `1` и `2`, сложите значения этих переменных как строки и выведите результат на экран с помощью метода `alert()`.
// let a = "1";
// let b = "2";
// alert(a + b);
// 2. Создайте две переменные со значениями `'5'` и `'6'`, найдите сумму пикселей из этих значений и выведите ее на экран с помощью метода `alert()` . Ответ должен быть в таком формате: `11px`.
// let a = 5;
// let b = 6;
// alert(`${a + b}` + "px");

// 3. Создайте переменную `age`, присвойте значение с помощью метода `prompt()` “Сколько вам лет?”.
// let age = Number(prompt("Сколько вам лет?"));
// alert(`Через один год вам будет ${age + 1}`);
// Реализуйте такой функционал: пользователь вводит данные, сколько ему лет, и следующей командой вывести на экран, сколько ему будет через 1 год.

// **Не забудьте про использование ****инкремента / декремента*

// 4. Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):

//     ```jsx
//     let num = 1;
//     num = num + 5;
//     num = num - 3;
//     num = num * 7;
//     num = num / 3;
//     num = num + 1;
//     num = num - 1;
//     alert(num);
//     ```
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);
// 5. С помощью метода `prompt()` спросите у пользователя его имя и сохраните в переменную. С помощью метода `alert()` выведите на экран шаблонную строку: `Привет, ИМЯ!`

//     **Подсказка: вставить `!` можно через кавычки*

// let userName = (prompt("Как Вас зовут?");
// alert(`Привет ${userName}!`);

// <aside>
// ⭐ **14. Задача повышенной сложности**

// *Не переживайте, если вы не справитесь с ней после этого урока.*

// *Спойлер: после второго точно справитесь* 😉

// **Задача:**
// Попросите пользователя ввести размер зарплаты.

// Вычислите и выведите на экран:

// - Премию в размере 20%.
// - Подоходный налог 13% на суммарный доход (зп + премия).
// - Доход за вычетом налогов.
// - Бюджет на день.
// </aside>
