const Usermodel = require("../models/User_module");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
async function RegisterUser(req,res){
        const {username,password,email,role='user'} = req.body;
        const hash = await bcrypt.hash(req.body.password,10);
        //checking already existance;
         const isUserAlreadyexist = await Usermodel.findOne({
            $or:[{username},{email}]
        })
        if(isUserAlreadyexist){
            return res.status(409).json({message:"User already exist"});

        }

         const user = await  Usermodel.create({
           username,
           password:hash,
           email,
           role
        })

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        res.cookie("proj_user_token",token)
        res.status(201).json({message:"User registered successfully",user})

}

async function LoginUser(req,res){
    const {username,password,email,role} = req.body;
    const Userexist =await Usermodel.findOne({
        $or:[{username},{email}]
    })

    if(!Userexist){
        return res.status(409).json({message:"Such account not exist , Go register first"})
    }

    const passwordValid =await bcrypt.compare(password,Userexist.password);
    if(!passwordValid){return res.status(403).json({message:"Password not valid"})}
    const token = jwt.sign({id:Userexist._id},process.env.JWT_SECRET)
    res.cookie("token",token)
    res.status(201).json({message:"User loginned successfully"})

  
   
}

async function isAdmin(req,res,next) {
    const {password,username,email,role} = req.body;
    const add = Usermodel.findOne({username});
    if(add.role != 'admin'){return res.status(401).json({message:"you are not admin"})}
    res.status(200).json({message:"on admin page"})
    next();

    
}

module.exports = {RegisterUser,LoginUser,isAdmin}