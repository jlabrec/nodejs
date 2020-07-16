//built in modules
const os = require('os');
const http = require('http');//launch a server, send requests
const https = require('https');//launch an SSL server
const path = require('path');
const fs = require('fs');

//Local custom modules 
const routes = require('./routes');


//Three examples listed below to show different ways to create a server/listener

//1.
// function rqListener(req,res) {

// }

// http.createServer(rqListener);
//2.
// http.createServer(function(req,res) { 

// });
//3. The below would be allowed if routes.js just exported the single method, but since we are exporting an object, #4 is required
//const server = http.createServer(routes)
const server = http.createServer(routes.handler);
//console.log(routes.someText);
server.listen(3000);

