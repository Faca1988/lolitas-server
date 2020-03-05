const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers/helpers');
// const port = 4200;
const port = process.env.PORT || 4200; // configura variable de entorno que me da heroku

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// app.get('/', (req, res) => {
//     // res.send('Hola Mundo');
//     let output = {
//         name: 'Facundo',
//         lastname: 'Campos',
//         url: req.url
//     };

//     res.send(output);
// });

app.get('/', (req, res) => {
    res.render('home.hbs', {
        company: 'Lolitas Indumentaria',
        address: 'independecia 3800',
        city: 'Mar del Plata'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/contact_us', (req, res) => {
    res.render('contact_us.hbs');
});

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));