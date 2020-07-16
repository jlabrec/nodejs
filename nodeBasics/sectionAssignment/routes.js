const http = require('http');
const fs = require('fs');
const { resourceUsage } = require('process');

const router = (req,res) =>{
    const method = req.method;
    const url = req.url;
    
    
    if(method === 'GET' && url === '/'){
        res.setHeader('Content-Type','text/html');
        fs.readFile('./html/index.html','utf-8', (err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
        
    } else if( method === "POST" && url ==="/create-user"){
        res.setHeader('Content-Type', 'text/html');
        const body = [];
        req.on('data',chunk=>{
            body.push(chunk);
            
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const userName = parsedBody.split('=')[1];
            fs.writeFile('test',userName,err=>{
                if(err) throw err; 
                res.statusCode=302;
                res.setHeader('Location','/');
                res.end();
            })
        })
    } else if( method === "GET" && url === "/users"){
        fs.readFile('./html/users.html',(err,data)=>{
            if(err){
                console.log(err);
                process.exit(-1);
            }
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
        
    }
};

module.exports = router; 