/**
 * This will be a long file, as it has several different templating options in it, with all but one commented out so as to not lose the code I wrote, or 
 * the reference material/notes i've taken. 
 */
//const http = require('http'); not necessary since express is handling this so far. 
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const errorController = require('./controllers/errors');



const app = express();

//telling express where are views folder is: (option,location)
app.set('views','views'); //('views','views') is the default setting
app.set('view engine', 'ejs');


//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));

//Middleware for linking static content files such as the style sheets for the html views
app.use(express.static(path.join(__dirname,'public')));

//adding `/admin` allows filtering all adminRouter routes to have /admin/route
app.use('/admin',adminRouter);
app.use(shopRouter);


//add 404 page for if no routes matched
app.use(errorController.notFound);


// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);