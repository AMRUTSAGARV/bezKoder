const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin : "http://localhost:8080"
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
