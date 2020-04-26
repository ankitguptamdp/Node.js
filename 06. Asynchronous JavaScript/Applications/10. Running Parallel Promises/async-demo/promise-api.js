// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 1...');
//         resolve(1);
//     }, 2000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 2...');
//         resolve(2);
//     }, 2000);
// });

// Promise.all([p1, p2])
//     .then(result => console.log(result));

// const p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log('Async operation 1...');
//         reject(new Error('because something failed.'));
//     }, 2000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('Async operation 2...');
//         resolve(2);
//     }, 2000);
// });

// Promise.all([p1, p2])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error', err.message));

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 1...');
        resolve(1);
    }, 2000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation 2...');
        resolve(2);
    }, 2000);
});

Promise.race([p1, p2])
    .then(result => console.log(result))
    .catch(err => console.log('Error', err.message));

// The Promise.race() method returns a promise that fulfills
// or rejects as soon as one of the promises in an iterable fulfills 
// or rejects, with the value or reason from that promise.