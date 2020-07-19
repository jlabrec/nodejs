/**
 * This will be a long file, as it has several different templating options in it, with all but one commented out so as to not lose the code I wrote, or 
 * the reference material/notes i've taken. 
 */
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
//app.set('view engine','pug');


/**
 * handlebars set up section
 */

//  const expressHbs = require('express-handlebars');
//  //the name we use for the engine(handlebars vs hbs) would change our file extension on our views files
//  app.engine('hbs',expressHbs({layoutsDir: 'views/layouts', defaultLayout: 'main-layout.hbs'}));//default is 'views/layouts'
//  app.set('view engine','hbs');

/**
 * EJS set up 
 */

 app.set('view engine', 'ejs');











//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));

//Middleware for linking static content files such as the style sheets for the html views
app.use(express.static(path.join(__dirname,'public')));

//adding `/admin` allows filtering all adminRouter routes to have /admin/route
app.use('/admin',adminData.routes);
app.use(shopRouter);


//add 404 page for if no routes matched
app.use((req,res,next)=>{
    res.status(404).render('404',{docTitle: "Error 404"})

});


// app.listen(3000) replaces this
// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);