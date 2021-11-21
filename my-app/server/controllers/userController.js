const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const config = require("config")

const tokenKey = config.get("tokenKey")


exports.checkUserController = function (request, response) {
  if (!request.body) return sendStatus(404)
  // const hashedPassword = bcrypt.hashSync(request.body.password, 12)
  // const hashedEmail = bcrypt.hashSync(request.body.email, 12)
  
  User.findOne({email: request.body.email}, (error, result) => {
    if (error) return response.sendStatus(500)
    
    if (result) {
      const comparePassword = bcrypt.compareSync(request.body.password, result.password)

      if (comparePassword) {

        const token = jwt.sign(
          {email: request.body.email, password: result.password},
          tokenKey,
          {expiresIn: "1h"}
        )

        response.send({token: token})
        
      } else {

        return response.sendStatus(404)
      }

    } else {

      return response.sendStatus(404)
    }
  })
}

exports.verification = (request, response) => {
  if (!request.body) return sendStatus(404)

  const token = JSON.parse(request.body.lpsData)
  
  if (token.token) {

    jwt.verify(token.token, tokenKey, function(err, decoded) {
      
      User.findOne({email: decoded.email}, (error, result) => {
        if (error) return response.sendStatus(500)
        
        if (decoded.password  === result.password) {
  
          response.sendStatus(200)
        }  
      })
    })
  } else {

    response.sendStatus(404)
  }
}


mongoose.disconnect()