const mongoose = require("mongoose")
const Schema = mongoose.Schema


const productSchema = new Schema({
  categoryPraduct: String,
  linkProduct: String,
  selectLink: Object,
  brand: String,
  model: String,
  wear: String,
  discount: Number,
  price: Number,
  width: Number,
  height: Number,
  diameter: String,
  type: String,
  thorns: String,
  season: String,
  stock: Number,
  address: String,
  photoUpload: Object,
  descriptions: String,
  bestsellerSwitch: Boolean,
  articul: String,
  numberOfBoltHoles: String,
  discType: String,
  rimWidth: String,
  diameterOfHolesPosition: String,
  departureET: String,
  hubDIA: String,
  comments: [
      // {
      //   rating: Number,
      //   userName: String,
      //   userEmail: String,
      //   comment: String,
      //   commentDate: String
      // }
  ]
},
{ 
  writeConcern: {
    j: true
  },
  versionKey: false 
}
)

const Product = mongoose.model("product", productSchema)

module.exports = Product
