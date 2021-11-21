const MassengersContact = require("../models/MassengersContact")
const mongoose = require("mongoose")

const getLinkAddressContact = (params) => {
  return new Promise((resolve, reject) => {
    MassengersContact.find(params, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

exports.getLinkAddressContactInName = (request, response) => {
  getLinkAddressContact({ massengerName: "address" })
    .then((result) => {
      response.send(result)
    })
    .catch((err) => {
      console.log(err)
      response.sendStatus(500)
    })
}

exports.createLinkAddressContact = (request, response) => {
  if (!request.body) return response.sendStatus(404)
  let massengerName = request.body.massengerName
  let textBody = request.body.textBody
  let geoData = request.body.geoData
  let dataContainer = null

  if (request.body.geoData) {
    dataContainer = {
      massengerName,
      textBody,
      geoData
    }
  } else {
    dataContainer = {
      massengerName,
      textBody
    }
  }

  const createAddres = (body) => {
    return new Promise((resolve, reject) => {
      MassengersContact.create(body, (error, result) => {
        if (error) return reject(error)
  
        resolve(result)
      })
    })
  }
  
  createAddres(dataContainer)
  .then((result) => {
    response.send(result)
  })
  .catch((err) => {
    console.log(err)
    response.sendStatus(500)
  })
}

exports.deleteLinkAddressContact = (request, response) => {
  let id = request.params.id

  MassengersContact.findByIdAndDelete(
    id ,
    (error, result) => {
      if (error) return console.log(error)

      response.send(result)
    }
  )
}


const getLinkMassengersContact = (params) => {
  return new Promise((resolve, reject) => {
    MassengersContact.findOne(params, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

exports.getLinkMassengersContactInName = (request, response) => {
  let massengerName = request.params.id

  getLinkMassengersContact({ massengerName: massengerName })
    .then((result) => {
      response.send(result)
    })
    .catch((err) => {
      console.log(err)
      response.sendStatus(500)
    })
}


const createLinkMassengersContact = (body) => {
  return new Promise((resolve, reject) => {
    MassengersContact.create(body, (error, result) => {
      if (error) return reject(error)

      resolve(result)
    })
  })
}

exports.checkLinkMassengersContact = (request, response) => {
  if (!request.body) return response.sendStatus(404)
  let massengerName = request.body.massengerName
  let textBody = request.body.textBody  

  getLinkMassengersContact({ massengerName: massengerName })
    .then((result) => {
      if (result) {

        return response.send("true")
      } else {
        console.log(typeof result, result, "++++++++++++")
        createLinkMassengersContact({ massengerName, textBody })
          .then((result) => {
            response.send(result)
          })
          .catch((err) => {
            console.log(err)
            response.sendStatus(500)
          })
      }
    })
    .catch((err) => {
      console.log(err)
      response.sendStatus(500)
    })
}

exports.deleteLinkMassengersContact = (request, response) => {
  let massengerName = request.params.id

  MassengersContact.findOneAndDelete(
    { massengerName: massengerName },
    (error, result) => {
      if (error) return console.log(error)

      response.send(result)
    }
  )
}

mongoose.disconnect()
