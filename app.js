const express =  require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()
//const User = require('./models/user.js')
const port = 3000;

// template engine
app.set('view engine', 'ejs')

//database to MONGODB
const dbURI = 'mongodb+srv://saintkevinst:5122012@cluster0.mbhd5.mongodb.net/kev-page?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port, () => {
        console.log(`App listening on ${port}`)
    }))
    .catch((err) => console.log(err))

//static files and middleware
app.use(express.static('public'));
app.use(morgan('dev'));

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