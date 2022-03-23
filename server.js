const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

const app = express();

// connect to mongodb
mongoose.connect(MONGO_URI)
.then(()=>console.log(`MongoDb Connected...`))
.catch(err =>console.log(err));

app.get('/',(req,res)=>{
    res.send(`hello world`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server Running at Port ${PORT} `));