const { readFileSync, writeFileSync } = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// create/overwrite a new txt file that merges content from first.txt and second.txt
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' } // 'a' is for append, this adds a newline vs overwriting
)
console.log('done with this task');
console.log('starting the next one');