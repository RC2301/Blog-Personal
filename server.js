const express = require('express');
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
// Establecer el motor para las vistas.
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/home', function(req, res) {
    res.render('home', {
        titulo: "Home",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/portafolio', function(req, res) {
    res.render('portafolio', {
        titulo: "Portafolio",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/contactame', function(req, res) {
    res.render('contactame', {
        titulo: "Contactame",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/skills', function(req, res) {
    res.render('skills', {
        titulo: "Skills",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/certificaciones', function(req, res) {
    res.render('certificaciones', {
        titulo: "Certificaciones",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/estudios', function(req, res) {
    res.render('estudios', {
        titulo: "Estudios",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/', function(req, res) {
    res.render('index', {
        titulo: "Index",
        nombre: "RichARd cAmaCHo"
    });

});
app.get('/about', function(req, res) {
    res.render('about', {
        titulo: "About"
    });
});

// app.get('/data', (req, res) => {
//     res.send('data');
// });

app.listen(port, () => {
    console.log('Servidor iniciado, Escuchando el Puerto 3000');
})