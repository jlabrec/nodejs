const express = require('express');


const router = express.Router();

const users = [];

router.get('/',(req,res,next)=>{
    res.render('users',{
        pageTitle: 'Users',
        path: '/users',
        users: users
    })
});

router.post('/',(req,res,next)=>{
    //console.log(req.body);
    users.push(req.body);
    //console.log(users);
    res.redirect('/users')
});


exports.router = router; 
exports.users = users; 