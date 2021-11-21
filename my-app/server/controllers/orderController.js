const { NewOrder, Archive } = require("../models/Order")
const Product = require("../models/Product")
const mongoose = require("mongoose")


exports.createOrder = (request, response)=>{
    if (!request.body) return response.sendStatus(500)
    
    NewOrder.create(request.body, (error, result)=>{
        if (error) return console.log(error);

        response.send("все прошло успешно")
    })
}


exports.createArchiveOrder = (request, response)=>{
    if (!request.body) return response.sendStatus(500)

    Archive.create(request.body, (error, result)=>{
        if (error) return console.log(error);

        response.send("все прошло успешно")
    })
}


exports.callOrders = (request, response)=>{

    NewOrder.find({}, (error, result)=>{
        if (error) return console.log(error);
        
        response.send(result)
    })
}

exports.callOrdersCount = (request, response)=>{

    NewOrder.find({}).countDocuments((error, count)=>{
        if (error) return console.log(error);
        
        response.send({count: count})
    })
}

exports.callArchiveOrder = (request, response)=>{
    const limit = request.query.limit
    const skip = request.query.skip

    Archive.find({}, (error, result)=>{
        if (error) return console.log(error);

        response.send(result)
    }).lean().skip(+skip).limit(+limit)
}

exports.archiveOrderCount = (request, response)=>{

    Archive.find({}).countDocuments((error, count)=>{
        if (error) return console.log(error);
        
        response.send({count: count})
    })
}


exports.callPraductInId = (request, response) => {
    const id = request.params.id
  
    Product.findById(id, (error, result)=>{
      if (error) return console.log(error)
  
      response.send(result)
    })
}

exports.deleteOrder = (request, response) => {
    const id = request.params.id
  
    NewOrder.findByIdAndDelete(id, (error, result)=>{
      if (error) return console.log(error)
  
      response.send(result)
    })
}


mongoose.disconnect()