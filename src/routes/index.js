const express = require('express')
const  BookRoutes  = require('./v1/book-routes')

const router = express()
    
router.use('/books/', BookRoutes)

module.exports = router