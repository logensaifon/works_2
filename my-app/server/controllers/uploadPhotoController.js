const multer = require("multer")

const storage = multer.diskStorage({
    destination:(request, file, cd)=>{
        cd(null, "uploads")
    },
    filename:(request, file, cd)=>{
        cd(null, file.originalname)
    }
})

const filefilter = (request, file, cd)=>{

        if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
            cd(null, true)
        } else {
            cd(null, false)
        }
}


const multerconect = multer({storage: storage, fileFilter: filefilter}).single("logo")


const uploadPhotoController = [multerconect, function(request, response, next) {
    
    let filedata = request.file;
    if(!filedata) {
        response.send("Ошибка при загрузке файла")
    } else {
        response.send(filedata);
    }
}]


module.exports = uploadPhotoController