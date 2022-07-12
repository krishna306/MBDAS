const mongoose = require("mongoose");
const connection = require("../connection");
const Applicant = require("./Applicant");
const deceasedSchema = new mongoose.Schema({
  aadhar: {
    type: String,
    unique: [true, "Person ID of deceased should be unique."],
    // required: [true, "Person ID of deceased is required."],
  },
  date: {
    type: Date,
    // required: [true, "Date of death (of deceased) is required."],
  },
  deadname: {
    type: String,
    // required: [true, "Name of deceased is required."],
  },
  gender: {
    type: String,
    // required: [true, "Gender of deceased is required."],
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  spouse: {
    type: String,
  },
  age: {
    type: Number,
    // required: [true, "Age of deceased is required."],
  },
  placeOfDeath: {
    type: String,
    // required: [true, "Place of death (of deceased) is required."],
  },
  placedetails: {
    type: String,
    // required: [true, "Details of the place of deceased is required."],
  },
  informantName: {
    type: String,
  },
  informantRelation:{
    type: String
  },
  townOrVillage: {
    type: String,
    // required: [true, "Town or village confirmation of deceased is required."],
  },
  torvName: {
    type: String,
    // required: [true, "Town or village name of deceased is required."],
  },
  deceasedstate: {
    type: String,
    // required: [true, "State name of deceased is required."],
  },
  district: {
    type: String,
    // required: [true, "District name of deceased is required."],
  },
  addressAtDead:{
    type: String
  },
  addressPermanent: {
    type: String,
    // required: [true, "Address of deceased is required."],
  },
  religion: {
    type: String,
    // required: [true, "Religion of deceased is required."],
  },
  occupation: {
    type: String,
    // required: [true, "Occupation of deceased is required."],
  },
  typeOfMedicalAttention: {
    type: String,

  },
  medicallyCertified: {
    type: Boolean,
    default:false
    //required: [true, "Medical Certification of deceased is required."],
  },
  disease: {
    type: String,
    // required: [true, "Disease for death of deceased is required."],
  },
  smoker: {
    type: Number,
  },
  tobacco: {
    type: Number,
  },
  panmasala: {
    type: Number,
  },
  drinker: {
    type: Number,
  },
  pregnancydeath: {
    type: String,
  },
  deathCertificate: {
    type: String,
    //unique: [true, "Death Certificate of deceased should be unique."],
    // required: [true, "Death Certificate of deceased is required."],
  },
  goanburahCertificate: {
    type: String,

    // unique: [true, "Gaonburah Certificate of deceased should be unique."],
    // dropDups: true,
  },
  otherDocuments: {
    type: String,
    // unique: [true, "Any other document of deceased should be unique."],
  },
  signatureDate:{
    type:String
  },
  signature:{
   type: String
  }
});

const Deceased = mongoose.model("Deceased", deceasedSchema);
module.exports = Deceased;
