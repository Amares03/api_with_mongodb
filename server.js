const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

//Routs
const postsRouts = require('./routes/api/posts');

const app = express();

//Body Parser Middleware
app.use(express.json());

// connect to mongodb
mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
.then(()=>console.log(`MongoDb Connected...`))
.catch(err =>console.log(err));

// use routs
app.use('/api/posts',postsRouts);

app.get('/',(req,res)=>{
    res.send(`hello world`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server Running at Port ${PORT} `));