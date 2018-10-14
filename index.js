// Express Fraùewprk
const express = require('express');
const app = express();

// Default View Engine
app.set('view engine','ejs');
app.set('views', 'views');

// used to parse POST requests (Form or JSON Data)
var bodyParser = require('body-parser')

// Handle static file requests (javascript, css, images...)
app.use('/public', express.static('public'));
// create application/x-www-form-urlencoded parser (Form data)
app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser to handle JSON POST requests
app.use(bodyParser.json());

// Favicon
app.get('/favicon.ico',(req,res)=>{
  res.sendFile(__dirname + '/public/img/favicon.ico');
})

// Main Page
app.get('/',(req,res)=>{
  console.log("Served URL : ",req.path);
  console.log("Requested By : IP -",req.ip," Hostname -",req.hostname);
  console.log("Request HTTP Method : ",req.method);
  res.render('home');
})

app.listen(3010);
console.log('Ali Copy App is Listening on port 3010....');