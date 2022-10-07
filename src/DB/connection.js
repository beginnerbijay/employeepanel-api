const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/curdapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{console.log("db connected")})

module.exports = db;