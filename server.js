const express = require("express");
const app = new express();
const path = require('path');
const session = require("express-session");
const bodyparser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('Login.ejs');
});
app.get('/admin',(req,res)=>{
    res.render('Admin.ejs');
});
app.get('/admin/products',(req,res)=>{
    res.render('AdminProd.ejs');
});
app.get('/admin/orders',(req,res)=>{
    res.render('Orders.ejs');
});
app.get('/admin/images',(req,res)=>{
    res.render('Images.ejs');
});



app.listen(3000);
console.log('Port Running on 3000');