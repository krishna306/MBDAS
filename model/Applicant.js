const mongoose = require("mongoose");
const connection = require("../connection"); 
const applicantSchema = new mongoose.Schema({
    email: {    
        type: String,
        unique: [true, "Email ID of applicant should be unique."],
       // required: [true, "Email ID of applicant is required."],
      
    },
    name: {    
        type: String,
        //required: [true, "Name of applicant is required."]
    },
    gender: {
        type: String,
        //required: [true, "Gender of applicant is required."]
    },
    mobile: {
        type: String,
        //required: [true, "Mobile number of applicant is required."]
    },
    pan: {
        type: String,
        unique: [true, "Pan number of applicant should be unique."],
        
    },
    aadhar: {
        type: String,
        unique: [true, "Aadhar number of applicant should be unique."],
     
    },
    state: {
        type: String,
        required: [true, "State name of applicant is required."]
    },
    district: {
        type: String,
        required: [true, "District name of applicant is required."]
    },
    subdivision: {
        type: String,
        required: [true, "Sub Division name of applicant is required."]
    },
    circleoffice: {
        type: String,
        required: [true, "Circle name of applicant is required."]
    },
    sig: {
        type:String,
    }
});

const Applicant = mongoose.model("Applicant",applicantSchema);
module.exports = Applicant;