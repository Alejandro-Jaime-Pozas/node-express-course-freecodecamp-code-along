// STREAMS used to read or write data sequentially
// just like events, many node modules implement STREAMS like EVENTS
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000, encoding: 'utf-8' })

// stream reads/writes data in chunks, 
// default chunks 64kb
// last buffer includes the remainder after file split into all chunks
// highWaterMark changes the default chunk size

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => {console.log(err)})