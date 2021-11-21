const { Router } = require("express")
const uploadPhotoController = require("../controllers/uploadPhotoController")
const createProductController = require("../controllers/createProductController")
const commonCountController = require("../controllers/commonCountController")
const localstorageproductController = require("../controllers/localstorageproductController")
const productContoller = require("../controllers/productContoller")
const orderController = require("../controllers/orderController")
const massengersContactsController = require("../controllers/massengersContactsController")
const articulController = require("../controllers/articulController");
const adminRouter = Router()

adminRouter.post("/createproduct/upload.do", uploadPhotoController)
adminRouter.post("/updateproduct/:id/upload.do", uploadPhotoController)
adminRouter.post("/createproduct/addProduct", createProductController)
adminRouter.get("/commoncount", commonCountController)
adminRouter.get("/updateproduct/:id", localstorageproductController.requestOneId)
adminRouter.put("/updateproduct/:id", productContoller.praductUpdate)
adminRouter.get("/orderscount", orderController.callOrdersCount)
adminRouter.get("/orders", orderController.callOrders)
adminRouter.get("/orders/:id", orderController.callPraductInId)
adminRouter.delete("/orders/:id", orderController.deleteOrder)
adminRouter.post("/archive", orderController.createArchiveOrder)
adminRouter.get("/archive", orderController.callArchiveOrder)
adminRouter.get("/archivecount", orderController.archiveOrderCount)
adminRouter.get("/address-contacts", massengersContactsController.getLinkAddressContactInName)
adminRouter.post("/address-contacts", massengersContactsController.createLinkAddressContact)
adminRouter.delete("/address-contacts/:id", massengersContactsController.deleteLinkAddressContact)
adminRouter.get("/massengers-contacts/:id", massengersContactsController.getLinkMassengersContactInName)
adminRouter.post("/massengers-contacts", massengersContactsController.checkLinkMassengersContact)
adminRouter.delete("/massengers-contacts/:id", massengersContactsController.deleteLinkMassengersContact)
adminRouter.get("/articul", articulController.allProduct)
adminRouter.get("/articulcheck/:id", articulController.articulCheck)

module.exports = adminRouter



