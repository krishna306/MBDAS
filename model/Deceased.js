const mongoose = require("mongoose");
const connection = require("../connection");
const Applicant = require("./Applicant");
const deceasedSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  aadhar: {
    type: String,
    unique: [true, "Person ID of deceased should be unique."],
    required: [true, "Person ID of deceased is required."],
  },
  dateOfDeath: {
    type: Date,
    required: [true, "Date of death (of deceased) is required."],
  },
  name: {
    type: Date,
    required: [true, "Name of deceased is required."],
  },
  gender: {
    type: String,
    required: [true, "Gender of deceased is required."],
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  spouseName: {
    type: String,
  },
  age: {
    type: Number,
    required: [true, "Age of deceased is required."],
  },
  place: {
    type: String,
    required: [true, "Place of death (of deceased) is required."],
  },
  placeDetails: {
    type: String,
    required: [true, "Details of the place of deceased is required."],
  },
  informantsName: {
    type: String,
  },
  townOrVillage: {
    type: Boolean,
    required: [true, "Town or village confirmation of deceased is required."],
  },
  townOrVillageName: {
    type: String,
    required: [true, "Town or village name of deceased is required."],
  },
  district: {
    type: String,
    required: [true, "District name of deceased is required."],
  },
  address: {
    type: String,
    required: [true, "Address of deceased is required."],
  },
  religion: {
    type: String,
    required: [true, "Religion of deceased is required."],
  },
  occupation: {
    type: String,
    required: [true, "Occupation of deceased is required."],
  },
  typeOfMedicalAttention: {
    type: String,
    required: [
      true,
      "Type of medical attention received by deceased is required.",
    ],
  },
  medicallyCertified: {
    type: Boolean,
    required: [true, "Medical Certification of deceased is required."],
  },
  diseaseName: {
    type: String,
    required: [true, "Disease for death of deceased is required."],
  },
  yearsOfSmoking: {
    type: Number,
  },
  yearsOfChewingTobacco: {
    type: Number,
  },
  yearsOfEatingArecanut: {
    type: Number,
  },
  yearsOfDrinking: {
    type: Number,
  },
  pregnancyDeath: {
    type: Boolean,
  },
  deathCertificate: {
    type: String,
    unique: [true, "Death Certificate of deceased should be unique."],
    required: [true, "Death Certificate of deceased is required."],
  },
  gaonburahCertificate: {
    type: String,

    unique: [true, "Gaonburah Certificate of deceased should be unique."],
    required: [true, "Gaonburah Certificate of deceased is required."],
    dropDups: true,
  },
  otherDocument: {
    type: String,
    unique: [true, "Any other document of deceased should be unique."],
  },
});

const Deceased = mongoose.model("Deceased", deceasedSchema);
module.exports = Deceased;
