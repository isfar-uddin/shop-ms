const mongoose = require("mongoose");

//DB Config
const dbUrl = require('./db.config').mongoURI;

//Connect to mongoose
module.exports.dbConnect = async ()=> {
    let mongo = await mongoose.connect(dbUrl, {useNewUrlParser: true},(err)=>{
        if (!err) console.log("Mongoose connected");
    });
    return mongo;
};