const express = require('express')
const router = express.Router()



// Rutas utilizados para estr proyecto
router.get("/", (req, res) => {
 

  res.render("formulario.hbs")
  // res.render('productos.ejs', {
  //      productos
  // })
  // res.render("pages/productos.pug",{productos:productos})
})

module.exports = router
