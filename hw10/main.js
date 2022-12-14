// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)


fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let list = document.createElement('ul');
        document.body.appendChild(list);
        users.forEach(user => {
            let li = document.createElement('li');
            li.innerHTML = `${user.id}  -  ${user.name} `;
            let a = document.createElement('a');
            a.innerText = 'Details';
            a.href = 'details.html?id=' + user.id;
            document.body.append(li, a);
        })
    })