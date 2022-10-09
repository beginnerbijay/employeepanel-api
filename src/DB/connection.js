const mongoose = require('mongoose');
require('dotenv').config({ path: 'sample.env' })
const db = mongoose.connect(process.env.MONGOURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{console.log("db connected")})

module.exports = db;