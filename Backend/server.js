
const { connect } = require("mongoose");
const app = require("./src/App");
const connectDb = require("./db/db");


app.listen(3000,()=>{
    
    console.log("Server is live!")
})

connectDb();