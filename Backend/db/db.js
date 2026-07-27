// connecting to db
const mongoose = require("mongoose");

async function connectDb(){
   try{
     await  mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Db");
   }catch(error){
    console.log("Error oocured ! Can't connect to DB");
   }
}

module.exports = connectDb;
