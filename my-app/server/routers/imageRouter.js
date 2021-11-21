const { Router } = require("express")
const imageRouter = Router()
const imageController = require("../controllers/imageController")


imageRouter.get("/:pathFolder/:pathImg", imageController.getImage)
imageRouter.delete("/delete", imageController.deleteImage)


module.exports = imageRouter