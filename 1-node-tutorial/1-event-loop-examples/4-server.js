const http = require('http')

 const server = http.createServer((req, res) => {
    console.log('Request event')
    res.end('Hello World!')
 })

 server.listen(3000, ()=>{
     console.log('server listening at port :3000...')
 })