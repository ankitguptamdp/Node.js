// const p = Promise.resolve({ id: 1});
// p.then(result => console.log(result)); 

// const p = Promise.reject(new Error('reason for rejection...'));
// p.catch(error => console.log(error)); 

const p = Promise.reject('reason for rejection...');
p.catch(error => console.log(error)); 