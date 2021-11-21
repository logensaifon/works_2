const fs = require("fs")
const mongoose = require("mongoose")


exports.getImage = (request, response) => {
    const pathFolder = request.params["pathFolder"]
    const pathImg = request.params["pathImg"]
    
    fs.readFile(`./${pathFolder}/${pathImg}`, (error, result)=>{
        if (error) {

            fs.readFile( "./image/pngwing.com.png", (error, data)=>{

                response.send(data)
            })
            return console.log("error note image")
        }

        response.set({"Content-Type": "image/jpeg, image/jpeg, image/png"})
        response.send(result)
    })
}


exports.deleteImage = (request, response) => {
    const pathFolder = request.body.folder
    const pathImg = request.body.file
    
    
    fs.unlink(`./${pathFolder}/${pathImg}`, (error, result)=>{
        if (error) return console.log(error);

        response.send(result)
    })
}


mongoose.disconnect()