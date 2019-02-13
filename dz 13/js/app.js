


// function getRequest(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();

//         xhr.addEventListener('load', () => resolve(JSON.parse(xhr.responseText)));
//         xhr.addEventListener('error', () => reject({status: xhr.status, url}));
//     });
// }

// getRequest('https://jsonplaceholder.typicode.com/users')
//     .then((users) => {
//         console.log(users);
//     })
//     .catch((err) => console.log(err));


// Promise.all([
//     getRequest('https://jsonplaceholder.typicode.com/users'),
//     getRequest('https://jsonplaceholder.typicode.com/todos'),
//     getRequest('https://jsonplaceholder.typicode.com/posts'),
// ])
// .then(([users, todos, posts]) => {
//     console.log(users, todos, posts);
// })
// .catch((err) => {
//     console.log(err);
// });

class CustomHttp {
    get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();

            xhr.addEventListener('load', () => resolve(xhr.responseText));
            xhr.addEventListener('error', () => reject({status: xhr.status, url}));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', () => resolve(xhr.responseText));
            xhr.addEventListener('error', () => reject({status: xhr.status, url}));
        });
    }
}

const http = new CustomHttp();



// function callbackOnGetUsers(users) {
//     console.log(users);
// }

http.get('https://jsonplaceholder.typicode.com/users')
    .then(response => JSON.parse(response))
    .then(console.log)
    .catch((err) => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/post', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//     .then((response) => {
//         if (response.status >= 400) {
//             console.log(response.status);
//             return Promise.reject(response.status);
//         }
        
//         console.log(response.headers.get('Content-type'));
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Error', err));



// class CustomFetch {
//     get(url) {
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then((response) => {
//                     if (response.status >= 400) {
//                         return reject(response.status);
//                     }

//                     return response.json();
//                 })
//                 .then((data) => resolve(data))
//         })
//     }

//     post(url, data = {}) {
//         return new Promise((resolve, reject) => {
//             fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//                 .then((response) => {
//                     if (response.status >= 400) {
//                         return reject(response.status);
//                     }

//                     return response.json();
//                 })
//                 .then((data) => resolve(data))
//         })
//     }
// }


// const myhttp = new CustomFetch();

// myhttp.get('https://jsonplaceholder.typicode.com/posts') 
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });


// class CustomHttp2 {
//     get(url, onSuccess, onError) {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();

//         xhr.addEventListener('load', () => onSuccess(JSON.parse(xhr.responseText)));
//         xhr.addEventListener('error', () => onError({status: xhr.status, url}));
//     }
// }

// const myhtt2 = new CustomHttp2();

// myhtt2.get('https://jsonplaceholder.typicode.com/posts', (response) => {
//     // some actions

//     myhtt2.get('https://jsonplaceholder.typicode.com/users', (response2) => {
//         console.log(response2);
//         // some actions

//         myhtt2.get('https://jsonplaceholder.typicode.com/todos', (response3) => {
//             console.log(response3);
//             // some actions
//         })
//     })
// })