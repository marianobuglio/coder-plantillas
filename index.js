const express = require('express')
const router = require('./router/router.js')
const handlebars = require("express-handlebars")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


//ejs
// app.set('views', './view-ejs');
// app.set('view engine', 'ejs');

// handlebars
// app.engine('hbs', handlebars.engine(
//      { 
//         extname: '.hbs', 
//         layoutsDir: __dirname + '/views-handlebars/layouts/',
//         defaultLayout: __dirname + '/views-handlebars/layouts/index.hbs', 
//         partialsDir: __dirname + '/views-handlebars/partials/'
//       } 
// ));
// app.set('view engine', 'handlebars');
// app.set('views', './views-handlebars');


// Pug
app.set('views', './views');
app.set('view engine', 'pug');

app.use('' , router)

const conn = app.listen(8080,()=>{
    console.log(`Servidor corriendo en el puerto ${conn.address().port}`)
})

app.on("error",(error)=>{
    console.log(`Error ${error}`)
})