const os = require('os');
const http = require('http');//launch a server, send requests
const https = require('https');//launch an SSL server
const path = require('path');
const fs = require('fs');


//Three examples listed below to show different ways to create a server/listener

//1.
// function rqListener(req,res) {

// }

// http.createServer(rqListener);
//2.
// http.createServer(function(req,res) { 

// });
//3.
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    
    if(req.url === '/'){
        res.setHeader('Content-Type',"text/html");
        res.write(fs.readFileSync('./html/index.html'));
        return res.end();
        
    } 
    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data',chunk=> {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, (err)=>{
                if(err === null) {
                    res.writeHead(302,{location:"/"})
                    return res.end();
                } else {
                    res.writeHead(500);
                    return res.end();
                }

            });
            //Response will be returned prior to the req.on('end') function, so if our response depends on the body, we need to move this code into that method
            
        });
        
        
    }
    res.end();
});

server.listen(3000);

