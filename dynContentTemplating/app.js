
//const http = require('http'); not necessary since express is handling this so far. 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');



const app = express();

//telling express where are views folder is: 
app.set('views','views');

/**
 * Pug set up section: 
 */
app.set('view engine','pug');


//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));

//Middleware for linking static content files such as the style sheets for the html views
app.use(express.static(path.join(__dirname,'public')));

//adding `/admin` allows filtering all adminRouter routes to have /admin/route
app.use('/admin',adminData.routes);
app.use(shopRouter);


//add 404 page for if no routes matched
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notFound.html'));

});


// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);