const express = require('express');
const path = require ('path');
const app = express();

/*app.use('/static', express.static(__dirname + '/public')); /* ruta estática a public*/ 

const publicPath= path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html'); /*ruta de direccionamiento a home*/
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html'); /*ruta de direccionamiento a register*/
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html'); /*ruta de direccionamiento a login*/
});