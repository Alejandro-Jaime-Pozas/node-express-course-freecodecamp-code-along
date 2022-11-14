const http = require('http')


const server = http.createServer((req, res) => {
  if (res.url === '/'){
    res.end('Home Page')
  }
  if (req.url === '/about'){
    // blocking code is a problem
    for (let i = 0; i < 1000; i++){
      for (let j = 0; j < 1000; j++){
        console.log(`${i} - ${j}`);
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server Listening on port 5000...');
})

// HERE THE FOR LOOP IS BLOCKING USERS FROM ACCESSING THE SERVER FOR OTHER REQUESTS...BAD CODE