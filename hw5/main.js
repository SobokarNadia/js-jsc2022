// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function prS(a, b) {
    return a * b;
};
console.log(prS(2, 2))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function koloS(r) {
    return 2 * Math.PI * r ** 2;
}

console.log(koloS(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cyclindrS = (h, r) => 2 * Math.PI * h * r;
console.log(cyclindrS(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrEl = (arr) => {
    for (const el of arr) {
        console.log(el);
    }
}
arrEl([2, 5, 8]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createP = (txt) => document.write(`<p>${txt}</p>`);
createP('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl = (li) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${li}</>`);
    }
    document.write('</ul>')
}
createUl('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUl1 = (li, amount) => {
    document.write('<ul>');
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write('</ul>')
}
createUl1('hello1', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createUl2 = (arr) => {
    document.write('<ul>');
    for (const el of arr) {
        document.write(`<li>${el}</li>`)
    }
    document.write('</ul>')
}
createUl2([2, 'str', false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'katya', age: 20},
    {id: 2, name: 'katya2', age: 20},
    {id: 3, name: 'katya3', age: 20},];

let createDiv = (arr) => {
    for (const el of arr) {
        document.write(`
        <div>${el.id}</div>
        <div>${el.name}</div>
        <div>${el.age}</div>
        `)
    }
};
createDiv(users);


// - створити функцію яка повертає найменьше число з масиву

function minNum(arr) {
    let num = arr[0];
    for (const el of arr) {
        if (el < num) {
            num = el;
        }
    }
    return num;
}

console.log(minNum([50, 20, 1, 6, 40]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumNum = (arr) => {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    return sum;
};
console.log(sumNum([1, 2, 10]));


// =================
// additional
// =================

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function min(num1, num2, num3) {
    let num = num1;
    if (num2 < num) {
        num = num2;
    }
    if (num3 < num) {
        num = num3;
    }
    return num;
}

console.log(min(8, 6, 1));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function max(num1, num2, num3) {
    let num = num1;
    if (num2 > num) {
        num = num2;
    }
    if (num3 > num) {
        num = num3;
    }
    return num;
}

console.log(max(1, 6, 8));

// - створити функцію яка повертає найбільше число з масиву

function maxNum(arr) {
    let num = 0;
    for (const el of arr) {
        if (el > num) {
            num = el;
        }
    }
    return num;
}

console.log(maxNum([30, 20, 1, 60, 40]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let avrg = (arr) => {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }
    return sum / arr.length;
};
console.log(avrg([30, 20, 1, 60, 40]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function f() {
    let num = arguments[0];
    for (const el of arguments) {
        if (el < num) {
            num = el;
        }
    }
    return num;
}

console.log(f(25, 30, 5, 84, 11111, 1, 6458));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomArr = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
console.log(randomArr());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomArrLimit = (limit) => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
}
console.log(randomArrLimit(5));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArr = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = arr[i];
    }
    return newArr;
}
console.log(reverseArr([1, 2, 3]));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function func() {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length > 1) {
        let sum = 0;
        for (const argument of arguments) {
            sum += argument;
        }
        console.log(sum);
    } else console.log('error');
}

func(3, 5, '4');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let sumArr = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i === j) {
                newArr[i] = arr1[i] + arr2[j];
            }

        }
    }
    return newArr;
}
console.log(sumArr([1, 2, 3, 4], [2, 3, 4, 5,]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let keyArr = (arr) => {
    let keys = [];
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            keys[keys.length] = key;
        }
    }
    return keys;
}
console.log(keyArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let propArr = (arr) => {
    let props = [];
    for (let i = 0; i < arr.length; i++) {
        for (let prop in arr[i]) {
            props[props.length] = arr[i][`${prop}`];
        }
    }
    return props;
}
console.log(propArr([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// - Дано натуральное число n. Выведите все числа от 1 до n.

function nCount(n) {
    for (let i = 1; i < n + 1; i++) {
        console.log(i);

    }
};
nCount(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

let twoNum = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);

        }
    } else
        console.log('they are equal = ', a);
}
twoNum(5, 5);

// -функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let changeI = (arr, i) => {
    if (arr[i + 1] !== null) {
        let num = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = num;
    }
    return arr;
}
console.log(changeI([9, 8, 0, 4], 0));
console.log(changeI([9, 8, 0, 4], 1));
console.log(changeI([9, 8, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let nullEl = (arr) => {
    let newArr = [];
    if (arr.length > 2 && arr.length < 100) {
        let count = 0;
        for (let i = 0, j = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                count++;
            } else {
                newArr[j] = arr[i];
                j++;
            }

        }
        if (count > 0){
            for (let i = 0; i < count; i++) {
                newArr[newArr.length] = 0;

            }
        }
    }
    return newArr;
}
console.log(nullEl([1, 0, 6, 0, 3]));
console.log(nullEl([0,1,2,3,4]));
console.log(nullEl([0,0,1,0]));




