const express = require('express');

// express app 
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for request 
app.listen(3000);

app.get('/', (req,res) =>{
    const blogs = [
        {tittle: 'Min el amor de mi vida', snippet: 'Como me mega encanta mi novia min toda hermosa y preciosa'},
        {tittle: 'Porque amo a min', snippet: 'Min es la mujer mas increble que existe en todo el mundo, nadamas es la top 1'},
        {tittle: 'Min casate conmigo', snippet: 'Min ya te di el anillo ni modo que no nos casemos mañana'}
    ];
    res.render('index',{tittle: 'Home',blogs});
});
app.get('/about', (req,res) =>{
    res.render('about',{tittle: 'About'})
});
app.get('/blogs/create',(req,res) =>{
    res.render('create',{tittle: 'Create a new Blog'});
});
//error 404
app.use((req,res) =>{
    res.status(404).render('404',{tittle: '404'});
});