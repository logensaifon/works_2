const Product = require("../models/Product")
const mongoose = require("mongoose")


exports.requestArrayId = (request, response) => {
  if (!request.body) return sendStatus(404);
  const idArray = request.body

  Product.find({_id: {$in : idArray}}, (error, result) => {
    if (error) return console.log(error)

    if (result) {
      response.send(result)
    } else {
      response.send("not found")
    }
  })
}

exports.requestOneId = (request, response) => {
  const id = request.params["id"]

  Product.findById(id, (error, result) => {
    if (error) return console.log(error)

    if (result === null) {
      response.send("not found")
    } else {
      response.send(result)
    }
  })
}


mongoose.disconnect()