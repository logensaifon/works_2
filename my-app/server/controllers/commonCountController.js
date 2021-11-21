const Product = require("../models/Product")
const mongoose = require("mongoose")

const checkUrlName = (urlName) => {
  switch (urlName) {
    case "/wintertires":
      return "Зимние шины бу"

    case "/lighttrucktires":
      
      return "Легкогрузовые шины бу"

    case "/trucktires":
      return "Грузовые шины бу"

    case "/discsandwheels":
      return "Диски и колеса бу"

    case "/summertires":
      return "Летние шины бу"

    case "/motorcycletires":
      return "Мотошины бу"
  }
}

const commonCountController = (request, response) => {
  let categoryPraduct = checkUrlName(request.query.catalog)

  Product.find({categoryPraduct}).countDocuments((error, count)=>{
    if (error) return console.log(error)

    response.send({count: count})
  })
}


module.exports = commonCountController
mongoose.disconnect()