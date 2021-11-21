const Product = require("../models/Product")
const mongoose = require("mongoose")
const fs = require("fs")
const path = require("path")

exports.bestsellerCount = (request, response) => {

    Product.find({bestsellerSwitch: true}).countDocuments((error, count) => {
        if (error) return console.log(error)

        response.send({count: count})
    })
}

exports.getBestseller = (request, response) => {

    Product.find({bestsellerSwitch: true}, (error, result) => {
        if (error) return console.log(error)

        if (result === null) {
            response.send("not found")
          } else {
            response.send(result)
          }
    }).lean().limit(10)


// exports.getBestseller = (request, response) => {
    // let file = fs.readFileSync("C:/Users/Anonymous/Desktop/products.json", "utf8")

    // if (file) {

    //     response.send(file)
    // } else {
        
    //     response.send("not found")
    // }

//     let file = fs.readFileSync("C:/Users/Anonymous/Desktop/products.json", "utf8")
//        let jsonParse = JSON.parse(file)
//        let limit = jsonParse.slice(0, 10)

        
//             response.send(JSON.stringify(limit))
           
        
  

}


mongoose.disconnect()