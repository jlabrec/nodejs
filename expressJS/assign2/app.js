const express = require('express');
const path = require('path');


const userRouter = require('./routes/users');
const homeRouter = require('./routes/home');


const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(userRouter);

app.use(homeRouter);

app.listen(3000);