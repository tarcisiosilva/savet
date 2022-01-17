const express = require('express');
const app = express();
const path = require('path');
//const router = express.Router();

app.engine('pug', require('pug').__express);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set(express.static,path.join(__dirname, 'public'));


app.get('/',(req,res)=> {
    res.render('acesso/login');
});

//app.use('/',router);
app.listen(process.env.port || 3000);