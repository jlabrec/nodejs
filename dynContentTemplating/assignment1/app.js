const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');

const app = express();

app.set('views','views'); //('views','views') is the default setting

/**
 * EJS set up 
 */

 app.set('view engine', 'ejs');


//Parse the body of the request and call next routing function, will parse form type data. 
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));


app.use('/users',userRouter.router);
app.use(homeRouter);

app.use('/',(req,res,next)=>{
    res.status(404).render('404.ejs',{pageTitle: 'Error 404'});
});


app.listen(3000);