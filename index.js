const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser")
const userRoutes = require("./routes/userRoutes");
const deceasedRoutes = require("./routes/deceasedRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
require("./connection");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json({extended:true}));
app.use("/users",userRoutes);
app.use("/deceased",deceasedRoutes);
app.use("/applicant",applicantRoutes);
const port =  process.env.PORT || 8000;

app.listen(port,function(){
    var Server = "Server running on "+port;
    console.log(Server);
});
