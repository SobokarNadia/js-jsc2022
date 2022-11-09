// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 25;
 (x !== 0) ? console.log('Virno') : console.log('Nevirno');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 55;
if (time >= 0 && time < 16) {
    console.log('I part of an hour')
} else if (time >= 16 && time < 31) {
    console.log('II part of an hour');
} else if (time >= 31 && time < 46) {
    console.log('III part of an hour');
} else if (time >= 46 && time < 60) {
    console.log('IV part of an hour');
} else console.log('Error');

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 22;
if (day > 0 && day <= 10) console.log('I part of the month');
else if (day > 10 && day <= 20) console.log('II part of the month');
else if (day > 20 && day <= 31) console.log('III part of the month');
else console.log('Error');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayWeek = +prompt('Number of the day:');
switch (dayWeek) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Error');
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Number 1:');
let num2 = +prompt('Number 2:');

if (num1 == num2){
    console.log('They are equal');
} else if (num1 > num2){
    console.log(num1);
}else console.log(num2);

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x1 = 0 || 'default';
console.log(x1);

