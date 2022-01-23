const express = require('express');   //express is for building the REST api's 
const cors = require('cors');    //cors provide express middleware to enable cors with various options. 

const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content type -appllication/json
app.use(express.json());

//parse requests of content type application/x-www-form-urlencoded
app.use(express.urlencoded({extended:true}));

//simple route
app.get("/", (req,res) => {
    res.json({message : "Welcome to bezKoder application"});
})

//set port listen for requests.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})