const { Schema, model } = require("mongoose")

const filterSchema = new Schema(
    {
        categoryPraduct: String,
        price: Array,
        numberOfBoltHoles: Array,
        rimWidth: Array,
        diameterOfHolesPosition: Array,
        departureET: Array,
        hubDIA: Array,
        wear: Array,
        brand: Array,
        model: Array,
        address: Array,
        height: Array,
        width: Array,
    },
    { 
        writeConcern: {
          j: true
        },
        versionKey: false 
    }
)

const FilterParams = model("filterParams", filterSchema)
module.exports = FilterParams