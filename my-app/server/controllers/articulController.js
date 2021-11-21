const Product = require("../models/Product")
const mongoose = require("mongoose")

exports.allProduct = (request, response) => {
    
    Product.find({}, (error, result)=>{
        if (error) return console.log(error)

        response.send(result)
    })
}

exports.articulCheck = (request, response) => {
    const id = request.params.id
    
    Product.findOne({articul: id}, (error, result)=>{
        if (error) return console.log(error)

        if (result) {

            response.send(true)
        } else {

            response.send(false)
        }
    })
}



mongoose.disconnect()