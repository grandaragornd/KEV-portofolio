const express =  require('express');
const morgan = require('morgan');
const app = express()
const port = 3000;

// template engine
app.set('view engine', 'ejs')

//static files and middleware
app.use(express.static('public'));
app.use(morgan('dev'));

//Listening
app.listen(port, function(err){
    if (err) console.log(err);
    console.log(`server running in ${port}`);
 });

//rendering pages
app.get('/', (req, res) => {
    res.render('index')
    console.log('mainpage reendered')
})

app.get('/aboutme', (req, res) => {
    res.render('aboutme')
    console.log('aboutme page reendered')
})

app.get('/contact', (req, res) => {
    res.render('contactform')
    console.log('contact page reendered')
})

// error page
app.use((req, res) => {
    res.status(404).render('404')
    console.log('error')
})