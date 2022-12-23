// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let usersArr = [];
for (let i = 0; i < 10; i++) {
    let user = new User(i + 1, `User ${i + 1}`, `User Surname ${i + 1}`, `email@${i + 1}`, i + 300);
    usersArr.push(user);
}
console.log(usersArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let evenUserArr = usersArr.filter(value => value.id % 2 === 0);
console.log(evenUserArr);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUser = usersArr.sort((el1, el2) => el1.id - el2.id);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, orderArr) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = orderArr;
    }
}

let clientArr = [];
for (let i = 0; i < 10; i++) {
    let client = new Client(i + 1, `Client ${i + 1}`, `Client S ${i + 1}`, `email@${i + 1}`, i + 300, ['item1', 'item2']);
    clientArr.push(client);
}
console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArr.sort((el1, el2) => el1.order.length - el2.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function () {
        console.log({
            model: this.model,
            maker: this.maker,
            year: this.year,
            maxSpeed: this.maxSpeed,
            engineCapacity: this.engineCapacity
        })
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;

    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car1 = new Car('f', 'f', 20, 20, 20);
car1.addDriver({name: 'd'});
console.log(car1);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {

    constructor(model, maker, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.maker = maker;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log({
            model: this.model,
            maker: this.maker,
            year: this.year,
            maxSpeed: this.maxSpeed,
            engineCapacity: this.engineCapacity
        })
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;

    }

    addDriver(driver) {
        this.driver = driver;
    }
}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let cinderellaArr = [];

for (let i = 0; i < 9; i++) {
    let cinderella = new Cinderella(`Cind ${i + 1}`, 20, 39);
    cinderellaArr.push(cinderella);
}
cinderellaArr.push(new Cinderella(`Cind 10`, 20, 38));

class Prince {
    constructor(name, age, needSize) {
        this.name = name;
        this.age = age;
        this.needSize = needSize;
    }
}

let prince = new Prince('pr', 20, 38);

let oneCinderella;
for (const cind of cinderellaArr) {
    if (cind.size === 38) {
        oneCinderella = cind;
    }
}
console.log(oneCinderella)

let oneCinderella1 = cinderellaArr.find(el => el.size === 38);
console.log(oneCinderella1);


