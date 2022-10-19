const http = require('http')
// request is what client requests from the server, response is what the server gives the client according to the request made
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('welcome to our homepage')
    }
    if (req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to find the page you are looking for</p>
    `)
    // // this ends the request
    // res.end()
})

server.listen(5000)