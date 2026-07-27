//Backend 
// creating server
require("dotenv").config();
const express = require("express");
const authroute = require("../route/authrouter");
const { isAdmin } = require("../controllers/authController");
const app = express();
app.use(express.json());
app.use("/api/auth",authroute);
app.use(isAdmin);


module.exports =app;










