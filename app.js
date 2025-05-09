//requieres
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogsRoutes = require('./routes/blogRoutes');

// express app 
const app = express();

//conection to Mongodb
const dbURUI = 'mongodb+srv://min1:min1234@nodetuts.7qup3zs.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURUI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result) =>app.listen(3000))
.catch((err) =>console.log(err));

//register view engine
app.set('view engine', 'ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


app.get('/', (req,res) =>{
   res.redirect('/blogs');
});
app.get('/about', (req,res) =>{
    res.render('about',{tittle: 'About'})
});

//blog routes
app.use('/blogs',blogsRoutes);

//error 404
app.use((req,res) =>{
    res.status(404).render('404',{tittle: '404'});
});