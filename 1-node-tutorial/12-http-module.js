const http =require('http')

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
     res.end('Hello Welcome to my home page')
    }
    if(req.url ==='/about'){
     res.end('Here is a short history about us!!!')
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We can't find the page you are looking for!!!!</p> 
    <a href ="/"> Back to Home Page</a>
    `)
})
const port =5000;

server.listen(port,()=>{
    console.log(`The server is listening at: ${port}`);
})

//OTHER METHOD OF CREATING A WEB SERVER IN NODEJS 

var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(8000); //6 - listen for any incoming requests

console.log('Node.js web server at port 8000 is running..')

