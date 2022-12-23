// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            document.body.innerHTML +=   `<div class="user">
                                          <div>${user.id} - ${user.name}</div>
                                          <button onclick="posts(${user.id})">Posts</button>
                                          </div>`

        })
    })

let posts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let user = document.getElementsByClassName('user')[id-1];
            posts.forEach(post => {
                user.innerHTML += `<div class='post'>
                                   <div>${post.title}:</div>
                                   <div>${post.body}</div>
                                   <button onclick="comments(${post.id})">Comments</button>
                                   </div>`;
            })
        })
}

let comments = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => {
                let commentId =id + '';
            if (commentId.length === 1) commentId = id;
            else if(commentId.length ===2) commentId = +commentId[1];
            else if (commentId.length === 3) commentId = 10;
            let post = document.getElementsByClassName('post')[commentId-1];

            comments.forEach(comment => {
                post.innerHTML += `<div class='comment'>
                                   <div>${comment.name}:</div>
                                   <div>${comment.body}</div>
                                   </div>`;
            })
        })
}


