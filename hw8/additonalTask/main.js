// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function Class(id, name, username, email,  suite, city, zipcode, geo, lat, lng, phone, website, companyName, catchPhrase, bs) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {
        suite,
        city,
        zipcode,
        geo,
        lat,
        lng,
    }
    this.phone = phone;
    this.website = website;
    this.company = {
        name: companyName ,
        catchPhrase,
        bs
    }
}

console.log(new Class(1, 'a', 's', 'd', 'd', 'f', 3,  4, 4, 4, 'ff', 'ff', 'fff', 'g'));


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {

    constructor(titleOfTag, action) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];
    }
    addAttrs(title, action){
        for (let i = 0; i <= arguments.length/2; i+=2) {
            this.attrs.push({
                titleOfAttr: arguments[i],
                actionOfAttr: arguments[i+1]
            })

        }
    }
}

let a = new Tag('a', 'предназначен для создания ссылок');
a.addAttrs('accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.');

let div = new Tag('div', 'предназначен для выделения фрагмента документа с целью изменения вида содержимого');
div.addAttrs('align', 'Задает выравнивание содержимого тега', 'title', 'Добавляет всплывающую подсказку к содержимому.')

let h1 = new Tag('h1', 'представляет собой наиболее важный заголовок первого уровня');
h1.addAttrs('align', 'Определяет выравнивание заголовка.');

console.log(a, div, h1);