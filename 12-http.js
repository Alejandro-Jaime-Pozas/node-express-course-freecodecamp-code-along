const http = require('http')
// request is what client requests from the server, response is what the server gives the client according to the request made
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('welcome to our homepage')
    } // end adds to the end of the response object
    if (req.url === '/about'){
        res.end('here is our short history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we cant seem to find the page you are looking for</p>
    <a href='/'>back home</a>
    `)
    // // this ends the request
    // res.end()
})

server.listen(5000)