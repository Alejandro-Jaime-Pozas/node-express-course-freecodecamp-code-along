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

// npm install nodemon -D or --save-dev (installs nodemon as a devDependency in package.json for use only in development phase, not deployment)

// add to "scripts" key in package.json a "start" key with value "nodemon app.js" to be able to type and run the app with npm start

// for some dependencies like gatsby, you need to 1st delete node_modules folder, then delete package-lock.json, then delete dependency from package.json file...then do npm install to get all dependencies from scratch except deleted one

// callbacks run the next way: all block code is run, the callback is saved, and only when all the block code executes does the callback execute after...

const _ = require('lodash') // common convention to call variable _

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log("hello world");