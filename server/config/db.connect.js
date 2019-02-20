const mongoose = require("mongoose");

//DB Config
const db = require('./db.config').mongoURI;

//Connect to mongoose
module.exports = mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log("Mongoose Connect") )
    .catch(err => console.log(err));