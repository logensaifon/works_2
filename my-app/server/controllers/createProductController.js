const Product = require("../models/Product")
const mongoose = require("mongoose")
const filertParamsController = require("./filterParamsController")

const createProductController = (request, response) => {
    if (!request.body) return response.sendStatus(404)
    
    Product.create(request.body, (error, result) => {
        if (error) return  console.log(error)
        
        filertParamsController.updateAddfilterParams(result)
        response.send(result)
    })
}


module.exports = createProductController
mongoose.disconnect()