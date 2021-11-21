const Product = require("../models/Product")
const mongoose = require("mongoose")

exports.ShowProduct = (request, response) => {
  const product = request.query.product
  const id = request.query.id

  Product.findOne({ linkProduct: product, _id: id }, (error, result) => {
    if (error) return console.log(error)
    
    if (result === null) {
      response.send("not found")
    } else {
      response.send(result)
    }
  })
}

exports.SimilarProduct = (request, response) => {
  const product = request.query.product
  const limit = request.query.limit
  const skip = request.query.skip

  Product.find({ linkProduct: product }, (error, result) => {
    if (error) return console.log(error)

    if (result === null) {
      response.send("not found")
    } else {
      response.send(result)
    }
  }).lean().skip(+skip).limit(+limit)
}

exports.SimilarProductCount = (request, response) => {
  const product = request.query.product

  Product.find({ linkProduct: product }).countDocuments((error, count) => {
    if (error) return console.log(error)

    response.send({data: count})
  })
}


mongoose.disconnect()