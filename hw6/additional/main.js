
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let strArr = [];
    for (let i = 0; i < str.length; i += n) {
        let el = str.substring(i, i + n)
        strArr.push(el)
    }
    return strArr;
}
console.log(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let strr = 'Каждый охотник желает знать';
let delete_characters = (str, length) => str.substring(0, length);

console.log(delete_characters(strr, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
let str8 = "HTML JavaScript PHP";

let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');

document.writeln(insert_dash(str8)); // 'HTML-JAVASCRIPT-PHP'


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let firstUpper = (str) => str[0].toUpperCase().concat(str.substring(1, str.length));

console.log(firstUpper('наслаждение'));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

 let symbols = ['!', '/', ',', '.', '?', '"',  '~', '`', '<', '>', ']','[','!','@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', ];
 let containSymbol = (str) => {
     let newStr = '';
     let symb = '';
     for (const l of str){
         for (const el of symbols) {
         if(l === el) {
             symb = el;
         }
     }}
         newStr = str.replaceAll(symb, ' ')

     return newStr;
 }

 console.log(containSymbol('Ron---Whisley'));
 console.log(containSymbol('Hermione__Granger'));
 console.log(containSymbol('Harry..Potter'));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNums = (arrLength) => {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
console.log(randomNums(5));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortArr = randomNums(5).sort((a, b) => a - b);
console.log(sortArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let filterArr = randomNums(5).filter(el => el % 2 === 0);
console.log(filterArr);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.

let symb = "о", strrr = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let count = 0;
    for (const l of str) {
        if (l === stringsearch){
            count ++;
        }
    }
    return count;
}
console.log(count(strrr, symb));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


let firstUpperEvery = (str) => {
    let pr = [-1];
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            pr.push(i);
        }
    }
    for (let j = 0; j < pr.length; j++) {
        if (j === pr.length - 1){
            newStr += str[pr[j]+1].toUpperCase().concat(str.substring(pr[j]+2, str.length));
        }else {
            newStr += str[pr[j] + 1].toUpperCase().concat(str.substring(pr[j] + 2, pr[j + 1] + 1));
        }
    }
    return newStr;
};
console.log(firstUpperEvery('aстрономия это наука о небесных объектах'));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let emailValidator = (str) => {
    let rav = str.indexOf('@');
    let dot = str.indexOf('.');
    if (str.substring(rav + 1, dot).length <= 2) {
        console.log('Error');
    } else if (!str.includes('@')) {
        console.log('Error');
    } else if (str[0] === '.' || str[rav - 1] === '.') {
        console.log('Error');
    } else console.log('Ok');
}
emailValidator('someeMAIL@i.ua');
emailValidator('someeMAIL&gmail.com')
emailValidator('some.email@gmail.com')
emailValidator('.someemail@gmail.com')

//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив
let  coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules


let sortArr1 = coursesArray.sort((el1, el2) => el2.modules.length - el1.modules.length);
console.log(sortArr1);




// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let sstr = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString1 = (str, n) => {
    let newStr = '';
    for (let i = 0; i < n; i++) {
        let j = str.substring(newStr.length).indexOf(' ');
        newStr += str.substring(newStr.length, newStr.length + 1 + j);
    }
    return newStr;
}
console.log(cutString1(sstr, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let library = [
    {author: ['Bill Gates'], title: 'The Road Ahead', pages: 1254, genre: ['blabla', 'blabla', 'blabla']},
    {author: ['Steve Jobs', 'blabla'], title: 'Walter Isaacson', pages: 4264, genre: ['blabla']},
    {
        author: ['Suzanne Collins', 'blabla'],
        title: 'Mockingjay: The Final Book of The Hunger Games',
        pages: 3245,
        genre: ['blabla', 'blabla']
    }
];

// -знайти наібльшу книжку.
console.log(library.sort((a, b) => {
    if (a.pages > b.pages) return -1;
    if (a.pages < b.pages) return 1;
})[0]);


// - знайти книжку/ки з найбільшою кількістю жанрів

console.log(library.sort((a, b) => {
    if (a.genre.length > b.genre.length) return -1;
    if (a.genre.length < b.genre.length) return 1;
})[0]);

// - знайти книжку/ки з найдовшою назвою

console.log(library.sort((a, b) => {
    if (a.title.length > b.title.length) return -1;
    if (a.title.length < b.title.length) return 1;
})[0]);

// - знайти книжку/ки які писали 2 автори

let twoAuthor = library.filter(el => el.author.length === 2);
console.log(twoAuthor);

// - знайти книжку/ки які писав 1 автор

let oneAuthor = library.filter(el => el.author.length === 1);
console.log(oneAuthor);

// - вісортувати книжки по кількості сторінок по зростанню

let sortBooks = library.sort((el1, el2) => el1.pages - el2.pages);
console.log(sortBooks);



