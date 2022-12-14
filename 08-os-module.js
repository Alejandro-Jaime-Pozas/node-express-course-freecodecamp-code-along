const os = require('os') // this is a built-in module, no ./<filename> needed
// const { os } = require('os')

// info about current user
const user = os.userInfo()
console.log(user);

// method that returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);