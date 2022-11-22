// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str = 'hello world';
let str1 = 'lorem ipsum';
let str2 = 'javascript is cool';

console.log(str.length);
console.log(str1.length);
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase = str.toUpperCase();
let toUpperCase1 = str1.toUpperCase();
let toUpperCase2 = str2.toUpperCase();

console.log(toUpperCase, toUpperCase1, toUpperCase2)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase = toUpperCase.toLowerCase();
let toLowerCase1 = toUpperCase1.toLowerCase();
let toLowerCase2 = toUpperCase2.toLowerCase();

console.log(toLowerCase, toLowerCase1, toLowerCase2)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirty = ' dirty string   ';
let clean = dirty.trim();

console.log(clean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let r = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(' ');
console.log(stringToArray(r));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArr = arr.map(el => el.toString());
console.log(newArr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]


let sortNums = (arr, directions) => {
    if (directions === 'ascending') {
        return arr.sort((el1, el2) => el1 - el2);
    } else if (directions === 'descending') {
        return arr.sort((el1, el2) => el2 - el1);
    }else
        return 'error';
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let monthSort = (arr) => {
    return arr.sort((el1, el2) => el2.monthDuration - el1.monthDuration)
        .filter(el => el.monthDuration > 5);
};
console.log(monthSort(coursesAndDurationArray));

// описати колоду карт
let deck = [
    {cardSuit: 'Spade', value: 6, color: 'Black'},
    {cardSuit: 'Clubs', value: 6, color: 'Black'},
    {cardSuit: 'Hearts', value: 6, color: 'Red'},
    {cardSuit: 'Diamonds', value: 6, color: 'Red'},
    {cardSuit: 'Spade', value: 7, color: 'Black'},
    {cardSuit: 'Clubs', value: 7, color: 'Black'},
    {cardSuit: 'Hearts', value: 7, color: 'Red'},
    {cardSuit: 'Diamonds', value: 7, color: 'Red'},
    {cardSuit: 'Spade', value: 8, color: 'Black'},
    {cardSuit: 'Clubs', value: 8, color: 'Black'},
    {cardSuit: 'Hearts', value: 8, color: 'Red'},
    {cardSuit: 'Diamonds', value: 8, color: 'Red'},
    {cardSuit: 'Spade', value: 9, color: 'Black'},
    {cardSuit: 'Clubs', value: 9, color: 'Black'},
    {cardSuit: 'Hearts', value: 9, color: 'Red'},
    {cardSuit: 'Diamonds', value: 9, color: 'Red'},
    {cardSuit: 'Spade', value: 10, color: 'Black'},
    {cardSuit: 'Clubs', value: 10, color: 'Black'},
    {cardSuit: 'Hearts', value: 10, color: 'Red'},
    {cardSuit: 'Diamonds', value: 10, color: 'Red'},
    {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
    {cardSuit: 'a', value: 'Jack', color: 'Red'},
    {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
    {cardSuit: 'Spade', value: 'King', color: 'Black'},
    {cardSuit: 'Clubs', value: 'King', color: 'Black'},
    {cardSuit: 'Hearts', value: 'King', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
    {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
    {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
    {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
    {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
];
// - знайти піковий туз

let clubAce = deck.filter(el => el.cardSuit === 'Spade' && el.value === 'Ace');
console.log(clubAce);

// - всі шістки

let cardsSix = deck.filter(el => el.value === 6);
console.log(cardsSix);

// - всі червоні карти

let allRed = deck.filter(el => el.color === 'Red');
console.log(allRed);

// - всі буби

let allDiamonds = deck.filter(el => el.cardSuit === 'Diamonds');
console.log(allDiamonds);

// - всі трефи від 9 та більше

let clubs = deck.filter(el => el.cardSuit === 'Clubs' && (el.value >= 9 || typeof el.value === 'string'));
console.log(clubs);

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
let cardsSuits = deck.reduce((obj, el) => {
    if (el.cardSuit === 'Clubs') {
         obj.clubs.push(el);
    }else if(el.cardSuit === 'Spade') {
         obj.spades.push(el);
    }else if(el.cardSuit === 'Diamonds'){
         obj.diamonds.push(el);
    }else if (el.cardSuit === 'Hearts'){
         obj.hearts.push(el);
    }
    return obj;
    },{
        spades: [],
            diamonds: [],
            hearts: [],
            clubs: []
    });
console.log(cardsSuits);

// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// })
