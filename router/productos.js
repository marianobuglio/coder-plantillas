const express = require('express')
const router = express.Router()
let productos = [{
  title: "Producto 1",
  price: 10,
  id: 0,
  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/1024px-Circle-icons-computer.svg.png?20160314153535"
}]


// Rutas utilizados para estr proyecto
router.get("/productos", (req, res) => {
  // res.render("productos.hbs",{productos:productos})
  // res.render('productos.ejs', {
  //      productos
  // })
  res.render("pages/productos.pug",{productos:productos})
})

router.get("/", (req, res) => {
  //res.render("formulario.hbs")
  res.render("index.pug")
  //res.render("index.ejs")
})
router.post("/productos", (req, res) => {
  let newProducto = req.body
  newProducto.id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 0
  productos.push(newProducto)
  //pug
  res.render("index.pug")

  //hbs
  // res.render("formulario.hbs")

  // ejs
  //   res.render("index.ejs", {
  //     productos
  //   })
})

//Rutas no utilizadas
router.get("/:id", (req, res) => {
    const id = req.params.id
    if (productos.length <= 0) {
      return res.send({
        error: "No hay productos"
      })
    }
    const existe = productos.map(p => p.id).indexOf(parseInt(id))
    if (existe == -1) {
      return res.send("No existe producto con ese id")
    }
  
    res.send(productos[existe])
  
  })
router.put("/:id", (req, res) => {
    const id = req.params.id
    const producto = req.body
    if (productos.length <= 0) {
      return res.send({
        error: "No hay productos"
      })
    }
    const existe = productos.map(p => p.id).indexOf(parseInt(id))
    if (existe == -1) {
      return res.send({
        error: "producto no encontrado"
      })
    }
    Object.assign(productos[existe], producto);
    res.send("Producto actualizado correctamente")
  
  })
router.delete("/:id", (req, res) => {
  const id = req.params.id
  if (productos.length <= 0) {
    return res.send({
      error: "No hay productos"
    })
  }
  const existe = productos.map(p => p.id).indexOf(parseInt(id))
  if (existe == -1) {
    return res.send("No existe producto con ese id")
  }
  productos.splice(existe, 1)
  res.send("Producto eliminado correctamente")

})



module.exports = router
