const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://127.0.0.1:27017/curdapp',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{console.log("db connected")})

module.exports = db;