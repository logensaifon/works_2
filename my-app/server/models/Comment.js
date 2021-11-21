const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemacontent = new Schema(
  {
    appraisal: Number,
    email: String,
    name: String,
    productId: String,
    comment: String,
    date: String,
    productLinkProduct: String
  },
  {
    versionKey: false,
    writeConcern: { 
      j: true,
      w: 'majority', 
      wtimeout: 2500, 
    }
  }
);

const Comment = mongoose.model("Comment", schemacontent,);

module.exports = Comment;
