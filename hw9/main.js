// - є масив
let simpsons = [{
    name: 'Bart',
    surname: 'Simpson',
    age: 10,
    info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
    photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
}, {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
    photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
}, {
    name: 'Marge',
    surname: 'Simpson',
    age: 38,
    info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
}, {
    name: 'Lisa',
    surname: 'Simpson',
    age: 9,
    info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
}, {
    name: 'Maggie',
    surname: 'Simpson',
    age: 1,
    info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
    photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
},];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


simpsons.forEach(value => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('member');
    div.innerHTML = `
    <div class='name'>${value.name} ${value.surname}</div>
    <div class="age">Age - ${value.age}</div>
    <div class="info">${value.info}</div>
    <img src=${value.photo} alt='member photo' />
    `
});


// Цикл в циклі
// - Є масив
let coursesArray = [{
    title: 'JavaScript Complex',
    monthDuration: 5,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
}, {
    title: 'Java Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
}, {
    title: 'Python Complex',
    monthDuration: 6,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
}, {
    title: 'QA Complex',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
}, {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
}, {
    title: 'Frontend',
    monthDuration: 4,
    hourDuration: 909,
    modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
}];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

coursesArray.forEach(value => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('course');
    div.innerHTML = (`<div class="title">${value.title}</div>
                    <div style="display: flex; justify-content: space-between">
                        <div class="monthDuration">${value.monthDuration}</div>
                        <div class="hourDuration">${value.hourDuration}</div>
                    </div>
                    <ul class="modules"></ul>
`)
    let ul = div.lastElementChild;
    value.modules.forEach(el => {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = `${el}`;
    })
});


// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.style.background = 'blue';
div.style.color = 'grey';
div.style.fontSize = '20';
let newDiv = div.cloneNode(true);
document.body.appendChild(newDiv);


// - Є масив:
let arr = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let ul = document.getElementsByClassName('menu')[0];
arr.forEach(value => {
    let li = document.createElement('li');
    document.body.appendChild(li);
    li.innerText = value;
})


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

coursesAndDurationArray.forEach(value => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.innerHTML = `
    <div class="title">${value.title} - ${value.monthDuration}</div>
    `
})


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


coursesAndDurationArray.forEach(value => {
    let div = document.createElement('div');
    document.body.appendChild(div);
    div.classList.add('item');
    div.innerHTML = `
    <h1 class='heading'>${value.title}</h1>
    <p class='description'>${value.monthDuration}</p>
    `
})


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div1 = document.createElement('div');
document.body.appendChild(div1);
div1.setAttribute('id', 'text');
div1.style.display = 'block';
div1.innerText = 'DIV'
let button = document.createElement('button');
button.innerText = 'hide div';
document.body.appendChild(button);
button.onclick = function (e) {
    div1.style.display = 'none';
}


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
document.body.appendChild(form);
form.setAttribute('name', 'f');

let ageField = document.createElement('input');
ageField.setAttribute('name', 'input');

let button1 = document.createElement('button');
button1.setAttribute('type', 'button');

form.appendChild(ageField);
form.appendChild(button1);

let clickFunc = function () {

    if (ageField.value !== '') {
        if (ageField.value <= 18) {
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.innerText = 'You are under 18';
        } else {
            let div = document.createElement('div');
            document.body.appendChild(div);
            div.innerText = 'You are over 18';
        }
    }
}

button1.addEventListener('click', clickFunc);


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)


let row = document.createElement('input');
row.setAttribute('name', 'row');

let column = document.createElement('input');
column.setAttribute('name', 'column');

let content = document.createElement('input');
content.setAttribute('name', 'content');

let submit = document.createElement('button');
submit.setAttribute('type', 'button');

document.body.append(row, column, content, submit)

submit.onclick = function (e) {
    let table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < row.value; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < column.value; j++) {
            tr.innerHTML += `<td>d</td>`;

        }
    }
    let arr = content.value.split(' ');
    for (let i = 0; i < row.value * column.value; i++) {
        let td = document.getElementsByTagName('td')[i];
        td.innerText = `${arr[i]}`;

    }


}