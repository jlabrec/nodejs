const fs = require('fs');

const requestHandler=(req,res)=>{
    
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
                //res.writeHead(302,{location:"/"});
                //return res.end();
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
    
            });
            
            //Response will be returned prior to the req.on('end') function, so if our response depends on the body, we need to move this code into that method
            
        });
        
        
    }
};

module.exports = {
    handler: requestHandler,
    someText: 'this is just to showcase exporting multiple things in one export'
};

//can also do this way, doesnt change how it works in app.js(you can also just do exports.handler and omit the `module` keyword)
// module.exports.handler = requestHandler;
// modeule.exports.someText = 'same thing as above';
