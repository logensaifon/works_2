const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemacontent = new Schema(
  {
    massengerName: String,
    textBody: String,
    geoData: String
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

const MassengersContact = mongoose.model("MassengersContact", schemacontent,);

module.exports = MassengersContact;