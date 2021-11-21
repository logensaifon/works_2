const { Schema, model } = require("mongoose")


const contentSchemaNewOrder = new Schema(
    {
        address: String,
        city: String,
        wayOfGetting: String,
        fullName: String,
        orderProduct: Array,
        phone: Number,
        region: String,
        date: String,
    },
    {
        versionKey: false,
        writeConcern: { 
          j: true,
          w: 'majority', 
          wtimeout: 2500, 
        }
    }
)

const contentSchemaArchive = new Schema(
    {
        address: String,
        city: String,
        fullName: String,
        wayOfGetting: String,
        orderProduct: Array,
        phone: Number,
        region: String,
        solutions: String,
        date: String,
    },
    {
        versionKey: false,
        writeConcern: { 
          j: true,
          w: 'majority', 
          wtimeout: 2500, 
        }
    }
)


exports.NewOrder = model("NewOrder", contentSchemaNewOrder)
exports.Archive = model("Archive", contentSchemaArchive)

