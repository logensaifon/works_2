const Product = require("../models/Product")
const mongoose = require("mongoose")
const filertParamsController = require("./filterParamsController")


exports.praductUpdate = (request, response) => {
  if (!request.body) return response.sendStatus(404)
  const id = request.params.id

  Product.findByIdAndUpdate(id, request.body, (error, result)=>{
    if (error) return console.log(error)

    response.send(result)
  })
}

exports.praductDelete = (request, response) => {
  const id = request.params.id

  Product.findByIdAndDelete(id, (error, result)=>{
    if (error) return console.log(error)

    filertParamsController.updateDeletefilterParams(result)
    response.send(result)
  })
}


const callProductOnId = (id) => {
  return new Promise((resolve, reject)=>{

    Product.findById(id, (error, result)=>{
      if (error) return reject(error)

      resolve(result)
    })
  })
}

const updateCommentOnId = (id, updatContent) => {
  return new Promise((resolve, reject)=>{
    
    Product.findByIdAndUpdate(id, updatContent, (error, result)=>{
      if (error) return reject(error)

      resolve(result)
    })
  })
}

exports.updatePraductComments = (request, response) => {
  if (!request.body) return response.sendStatus(404)
  const id = request.params.id
  let data = {
    rating: request.body.appraisal,
    userName: request.body.name,
    userEmail: request.body.email,
    comment: request.body.comment,
    commentDate: request.body.date
  }

  callProductOnId(id).then((result)=>{
    let productComments = result.comments
    
    if (productComments.length > 0) {

      for (const key in productComments) {
  
        if (productComments[key].userEmail === data.userEmail && productComments[key].comment === data.comment) {
          
          response.send("такой отзыв уже существует")
        } else {

          productComments.push(data)
          updateCommentOnId(id, {comments: productComments}).then((result)=>{
            
            response.send("отзыв добавлен к продукту")
          }).catch((err)=>{
    
            console.log(err)
            response.sendStatus(500)
          })         
        }
      }
  
    } else {

      productComments.push(data)
      updateCommentOnId(id, {comments: productComments}).then((result)=>{
        
        response.send("отзыв добавлен к продукту")
      }).catch((err)=>{

        console.log(err)
        response.sendStatus(500)
      })
    }

  }).catch((err)=>{

    console.log(err)
    response.sendStatus(500)
  })
}


mongoose.disconnect()