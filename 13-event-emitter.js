// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter() // instance of the class that is the events module

// customEmitter.emit('response') // this doesnt work since you NEED a listener first before you emit/execute/create/produce the result

// on() acts as the event listener, then you execute it with emit()
// on() inputs the eventName as a string, and a callback function
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id: ${id} `);
})
customEmitter.on('response', () => {
    console.log(`some other logic here `);
})

// emit() executes the event listener with the same eventName input as str
customEmitter.emit('response', 'john', 34)