const express = require('express')
const router = express.Router()

const productos = require('./productos.js')

router.use("/",productos)

module.exports = router