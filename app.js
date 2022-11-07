// npm - global command that comes with node
// npm --version to check latest version

// local dependency - use it only in this particular project
// npm i <packageName> - installs desired package

// global dependency - use it in any project
// npm i -g <packageName>

// npm init -y // install all default packages
// npm init // walks you through steps to install

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)

// nodemon checks the files in code, and restarts the npm project automatically

// npm install nodemon -D (installs nodemon as a devDependency in package.json for use only in production)

// add to "scripts" key in package.json a "start" key with value "nodemon app.js" to be able to type and run the app with npm start

const _ = require('lodash') // common convention to call variable _

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log("hello people");