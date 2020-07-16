const http = require('http');

//const routes = require('./routes');
const routes = require('./routes.js');

const createServer = http.createServer(routes);

createServer.listen(3000);
