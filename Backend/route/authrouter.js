const express = require("express");
const route = express.Router();
const authControl = require("../controllers/authController");

route.post("/register",authControl.RegisterUser);
route.post("/login",authControl.LoginUser);
route.post("/admin",authControl.isAdmin);
module.exports = route;
