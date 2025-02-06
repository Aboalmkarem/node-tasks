

const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    const body = []
    console.log('request url: ' + url);
    console.log('request method: ' + method);
    if (url == '/home' && method == 'GET') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>home</h1>')
        res.end()
    } else if (url == '/users' && method == 'GET') {
        res.setHeader('Content-Type', 'text/html')
        res.write('get users')
        res.end()
    } else if (url == '/users' && method == 'POST') {
        req.on('data', (chunk) => {
            console.log('received chunk:', chunk)
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log('parsed body:', parsedBody)
        })
        res.end()
    }
})

server.listen(3000, () => {
    console.log('server is connected on port 3000')
})