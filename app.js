const Product = require('./models/Product.model');

const express = require('express');
const hbs = require('hbs');

const path = require('path');

const app = express()

//const data = require('./products');

require('./db')

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

    res.render('index')

})

app.get('/tienda', (req, res) => {


    Product
        .find()
        .sort({ price: 1 })
        .select({ title: 1, price: 1, description: 1, discountPercentage: 1, rating: 1, brand: 1, category: 1, images: 1 })
        .then(products => {
            res.render('tienda', { products })
        })
        .catch(err => console.log(err))



})

app.listen(5005, () => console.log("Server listening on port 5005"))
