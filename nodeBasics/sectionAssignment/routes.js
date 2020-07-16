const http = require('http');
const fs = require('fs');

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

    } else if( method === "GET" && url === "/users"){
        res.setHeader('Content-Type', 'text/html');
        const body = [];
        req.on('data',chunk=>{
            
        });
    }
};

module.exports = router; 