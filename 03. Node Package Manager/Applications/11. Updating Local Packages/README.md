// mkdir npm-demo ; cd npm-demo ;sudo npm init --yes ; sudo npm i mongoose underscore ; sudo npm i -g npm-check-updates
// Caret(^) : "^4.13.6" it means the version could be any thing like 4.x for dependencies in package.json
// Semantic Versioning : SemVer
// Major.Minor.Patch : 4.13.7
// Tilde(^) : "~4.13.6" it means the version could be any thing like 4.13.x for dependencies in package.json
// Major : the application will not run if not same major version
// After major versioning it will look like 5.0.0
// Minor : new functionality added in the previous version 
// After minor versioning it will look like 4.14.0
// Patch : bug fixes
// With 'npm update' command only minor and patch release is updating not the major one.
// sudo npm i -g npm-check-updates : for installing ncu

// mkdir npm-demo : cd npm-demo ;sudo npm init --yes ; sudo npm i mongoose underscore : to make directory and install packages
// sudo npm outdated : it will list all current(2.4.2), wanted(2.9.10) and latest(4.13.6) version of the package
// sudo npm update : it will update to the wanted version
// sudo npm i -g npm-check-updates : installing npm-check-updates globally
// sudo ncu -u : updating package.json to the latest version
// sudo npm i : for installing the dependencies according to the version listed in the package.json