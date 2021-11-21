const Comment = require("../models/Comment")
const mongoose = require("mongoose")

const contentComment = (params)=>{ 
  return new Promise((resolve, reject)=>{

    Comment.find(params, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })

  })
}

const createComment = (body)=>{
  return new Promise((resolve, reject)=>{

    Comment.create(body, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

exports.addComment = (request, response) => {
  if (!request.body) return response.sendStatus(404)

  contentComment({}).then((result)=>{
    
    if (result.length !== 0) {
      
      for (const key in result) {

        if (
          result[key].productId === request.body.productId &&
          result[key].email === request.body.email
        ) {

          return response.send("true")
        } else {
          let arr = result
          arr.push(request.body)

          createComment(arr).then((result)=>{
            response.send(result)

          }).catch((err)=>{
            console.log(err)
            response.sendStatus(500)
          })
        }
      }

    } else {
      createComment(request.body).then((result)=>{
        response.send(result)

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


exports.receiveComment = (request, response) => {
  contentComment({}).then((result)=>{
    response.send(result)

  }).catch((err)=>{
    console.log(err)
    response.sendStatus(500)
  })
}

exports.receiveCommentCount = (request, response) => {
  Comment.find({}).countDocuments((error, count)=>{
    if (error) return console.log(error)
    
    response.send({count: count})
  })
}


exports.deleteComment = (request, response) => {
  let id = request.params.id

  Comment.findByIdAndDelete(id, (error, result) => {
    if (error) return console.log(error)
        
    response.send(result)
  })
}

mongoose.disconnect()
