const Product = require("../models/Product")
const mongoose = require("mongoose")

const searchCount = (findProps) => {
  return new Promise((resolve, reject) => {
    Product.find(findProps).countDocuments((error, count)=>{
      if (error) return console.log(error)
      
      resolve({count: count})
    })
  })
}

exports.searchProductCount = (request, response) => {
  const requestQuery = request.query.query
  const matchCheck = requestQuery.search(/[ /+-,.]/g)
  let query = ""

  if (matchCheck > -1) {
    query = requestQuery.slice(0, matchCheck)
  } else {
    
    query = requestQuery
  }

  if (query[0] === "r") {
    query.toLowerCase()
    query = query.replace("r", "R")
  }
  
  const findProps = ( +query ) ?
  {
    $or: [
      // { numberOfBoltHoles: query },
      // { diameterOfHolesPosition: query },
      // { departureET: query },
      // { hubDIA: query },
      { rimWidth: `${query}` },
      { articul: `${query}` },
      { model: `${query}` },
      { brand: `${query}` },
      { price: +query },
      { type: `${query}` },
      { width: +query },
      { diameter: `${query}` },
      { height: +query },
    ]
  }
  :
  {
    $or: [
      // { numberOfBoltHoles: query },
      // { diameterOfHolesPosition: query },
      // { departureET: query },
      // { hubDIA: query },
      { rimWidth: `${query}` },
      { articul: `${query}` },
      { model: `${query}` },
      { brand: `${query}` },
      { type: `${query}` },
      { diameter: `${query}` },
    ]
  }
  
  searchCount(findProps).then((result) => {

    response.send(result)
  })

}

const searchFind = (findProps, limit, skip) => {
  return new Promise((resolve, reject) => {
    Product.find(findProps, (error, result) => {
      if (error) return console.log(error)
      
      resolve(result)
    }).lean().skip(+skip).limit(+limit)
  })
}

exports.searchProduct = (request, response) => {
  const requestQuery = request.query.query
  const limit = request.query.limit
  const skip = request.query.skip
  const matchCheck = requestQuery.search(/[ /+-,.]/g)
  let query = ""

  if (matchCheck > -1) {
    query = requestQuery.slice(0, matchCheck)
  } else {
    
    query = requestQuery
  }

  if (query[0] === "r") {
    query.toLowerCase()
    query = query.replace("r", "R")
  }  

  const findProps = ( +query ) ?
    {
      $or: [
        { rimWidth: `${query}` },
        { articul: `${query}` },
        { model: `${query}` },
        { brand: `${query}` },
        { price: +query },
        { type: `${query}` },
        { width: +query },
        { diameter: `${query}` },
        { height: +query },
      ]
    }
    :
    {
      $or: [
        { rimWidth: `${query}` },
        { articul: `${query}` },
        { model: `${query}` },
        { brand: `${query}` },
        { type: `${query}` },
        { diameter: `${query}` },
      ]
    }
  
  searchFind(findProps, limit, skip).then((result) => {
      if (result.length) {
          
        response.send(result)
      } else {
        response.send(null)
      }
  })

}


mongoose.disconnect()
