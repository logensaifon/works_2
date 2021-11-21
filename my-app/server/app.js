const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const path = require("path")
const app = express()
const port = config.get("port")
const port_https = config.get("port-https")
const adminRouter = require("./routers/adminRouter")
const homeRouter = require("./routers/homeRouter")
const imageRouter = require("./routers/imageRouter")
const https = require("https")
// const fs = require("fs")

const mongoConectUrl = config.get("mongoConectUrl")

app.use(express.json({ limit: "10mb", extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true }))

const credentials = {
  // absent
  // cert: fs.readFileSync('./ .pem'),
  // key: fs.readFileSync('./ .pem'),
}

app.use("/", homeRouter)
app.use("/Admin", adminRouter)
app.use("/image", imageRouter)



if (process.env.NODE_ENV === "production" && !process.env.SERVER) {

  app.use("/", express.static(path.join(path.parse(__dirname, ).dir, "client", "build")))

  app.get("*", (request, response)=>{
    response.sendFile(path.join(path.parse(__dirname, ).dir, "client", "build", "index.html"))
  })

} 

if (process.env.NODE_ENV === "production" && process.env.SERVER) {

  app.enable('trust proxy')
  app.use(function(request, response, next) {

    if (!request.secure) {
      return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
  })
}


mongoose.connect(
  mongoConectUrl,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  },
  function (error) {
    if (error) return console.log(error)

    if (process.env.PORT) {

      https.createServer(credentials, app).listen(port_https, () => {
        console.log(`the server started on the port ${port_https}`)
      })
      
    } else {

      app.listen(port, () => {
        console.log(`the server started on the port ${port}`)
      })
    }
 }
)
  

module.exports = app