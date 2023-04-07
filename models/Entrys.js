//import mongoose library
const mongoose = require ("mongoose");
const {v4: uuidv4} = require("uuid");

//Create a blogSchema
const entrySchema = new mongoose.Schema({
  company: String,
  author: String, //username of contractor user
  contactFirstName: String,
  contactLastName: String,
  userEmail: String,
  companyEmail: String,
  companyAddress: {
    streetNum: Number,
    streetName: String,
    city: String,
    state: String,
    zipCode: Number
  },
  companyWebSite: String,
  licenseInfo: {
    licenseState: String,
    licenseNum: String,
    licenseClass: String
  },
  workTypes: [
    "String",
    "String",
    "String"
  ],
  active: Boolean,
  freeEstimates: Boolean,
  id: {type: String, default: ()=>uuidv4()},
  createdAt: {type: Date, default: Date.now},
  createdBy: String,
  updatedAt: {type: Date, default: Date.now},
  updatedBy: String
});



//Register the model and make it available to other files
module.exports = Entrys = mongoose.model("Entrys", entrySchema);