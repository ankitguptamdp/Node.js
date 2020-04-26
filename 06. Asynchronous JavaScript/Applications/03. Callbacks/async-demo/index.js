console.log('Before'); 
const user = getUser(1, (user) => {
    console.log('User', user);

    // Get the repositories
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);
    });
}); 
console.log('After');

function getUser(id, callback){
    setTimeout(() => { 
        console.log('Reading a user from the database...');
        callback ({ id: id, gitHubUsername: 'ankit'});
    }, 2000); // Wait of two seconds
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Calling GitHub API...');
        callback (['repo1', 'repo2', 'repo3']);
    }, 2000); // Wait of two seconds
}