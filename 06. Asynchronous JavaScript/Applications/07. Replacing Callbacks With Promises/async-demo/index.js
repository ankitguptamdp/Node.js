// console.log('Before'); 
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//             // Callback Hell or Christmas Tree Problem :
//             // Callback hell is a phenomenon that afflicts a JavaScript developer 
//             // when he tries to execute multiple asynchronous operations one after the other. 
//             // Some people call it to be the pyramid of doom.
//         });
//     });
// }); 
// console.log('After');


// function getUser(id, callback){
//     setTimeout(() => { 
//         console.log('Reading a user from the database...');
//         callback ({ id: id, gitHubUsername: 'ankit'});
//     }, 2000); // Wait of two seconds
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         callback (['repo1', 'repo2', 'repo3']);
//     }, 2000); // Wait of two seconds
// }

// function getCommits(repo, callback) {
//     setTimeout(() => {
//         console.log('Calling GitHub API...');
//         callback (['commit']);
//     }, 2000); // Wait of two seconds
// }

console.log('Before'); 
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
            // Callback Hell or Christmas Tree Problem : // Callback hell is a phenomenon that afflicts a JavaScript developer 
            // when he tries to execute multiple asynchronous operations one after the other. // Some people call it to be the pyramid of doom.
        });
    });
}); 
console.log('After');
function getUser(id){
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({id: id, gitHubUsername: 'ankit'});
        }, 2000); // Wait of two seconds
    }); 
}
function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API For Getting Repositories...');
            resolve (['repo1', 'repo2', 'repo3']);
        }, 2000); // Wait of two seconds
    });    
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API For Getting Commits...');
            resolve (['commit']);
        }, 2000); // Wait of two seconds
    });
}