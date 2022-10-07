const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./DB/connection')
const Client = require('./model/model')
const router = require('./router/router')
const path = require('path')
const PORT = process.env.PORT || 8000;

app.use('/images',express.static('images'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
});




