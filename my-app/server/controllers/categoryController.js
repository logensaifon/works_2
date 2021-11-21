const Product = require("../models/Product")
const mongoose = require("mongoose")


const requestPraduct = (objectShearch, limit, skip) => {

    return new Promise((resolve, reject)=>{

      Product.find(objectShearch, (error, result) => {
        if (error) return reject(error)

        resolve(result)
        
      }).lean().skip(+skip).limit(+limit)
    })
}

const checkUrlName = (urlName) => {
  switch (urlName) {
    case "WinterTires":
      return "Зимние шины бу"

    case "LightTruckTires":
      
      return "Легкогрузовые шины бу"

    case "TruckTires":
      return "Грузовые шины бу"

    case "DiscsAndWheels":
      return "Диски и колеса бу"

    case "AlloyWheels":
      return "Литые"

    case "Stamped":
      return "Штампованные"

    case "SummerTires":
      return "Летние шины бу"

    case "MotorcycleTires":
      return "Мотошины бу"

    default:
        return urlpathname
  }
}

exports.productCategoryCount = (request, response) => {
  const urlpathname = request.query.productcategory.split("/")
  const requestParams = request.body

  requestParams.categoryPraduct = checkUrlName(urlpathname[1])
  if (urlpathname[2] && urlpathname[2] === "Stamped" || urlpathname[2] === "AlloyWheels"){
    requestParams.discType = checkUrlName(urlpathname[2])
  } else if (urlpathname[2]) {
    requestParams.diameter = urlpathname[2]
  }

  const count = (objectShearch) => {
    return new Promise((resolve, reject)=>{
  
      Product.find(objectShearch).countDocuments((error, count)=>{
        if (error) return reject(error)

        resolve(count)
      })
    })
  }
  
  count(requestParams).then((count)=>{
    response.send({data: count})
    
  }).catch((err)=>{response.sendStatus(500)})
}


exports.getProductOnCategory = (request, response) => {
  const urlpathname = request.query.productcategory.split("/")
  const limit = request.query.limit
  const skip = request.query.skip
  const requestParams = request.body

  requestParams.categoryPraduct = checkUrlName(urlpathname[1])
  if (urlpathname[2] && urlpathname[2] === "Stamped" || urlpathname[2] === "AlloyWheels"){
    requestParams.discType = checkUrlName(urlpathname[2])
  } else if (urlpathname[2]) {
    requestParams.diameter = urlpathname[2]
  }
 
  requestPraduct(requestParams, limit, skip).then((result)=>{
      response.send(result)
  }).catch((err)=>{response.sendStatus(500)})

}

mongoose.disconnect()