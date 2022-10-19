const { readFile, writeFile } = require('fs') // readfile and writefile here are async fns

console.log('start');
readFile('./content/first.txt', 'utf8' , (err, result)=>{ // if you dont provide utf encoding value, this will output a Buffer
    if(err){
        console.log(err);
        return
    }
    // console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        // console.log(result);
        const second = result;
        writeFile(
            './content/result-sync.txt',
            `Here is the result: ${first}, ${second}`,
            (err, result) =>{
                if (err){
                    console.log(err);
                    return
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting next task');