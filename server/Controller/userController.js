const User = require('../model/userModel');
const userSignup = async (req, res) => {
  const {username,email,password } = req.body;
  let user;
  try {
    user = new User({
     
      username,
      email,
      password,
     
    });
    await user.save();
    res.status(200).json({
      message: user,
    });
   
  } catch (error) {
    
  }
}
const login=async(req,res,next)=>{
    const{username,password}=req.body;
    let existingUser;
    try {
         existingUser=await User.findOne({username})
    } catch (error) {
       
        console.log(error)
    }
    if(!existingUser){
    return res.status(404).json({message:"user not found"})
    }
    if(password===existingUser.password){
        return res.status(200).json({message:"successfully loggedin",user:existingUser} )
    }
    return res.status(404).json({message:"passwors is incorrect"})
  }

const getUser = async (req, res) => {
    let user;
    try {
        user = await User.find();
    } catch (error) {
        console.log(error)
    }
    res.status(200).json({message:user})
}
  
  

module.exports = {
    userSignup,
    login,
    getUser
  };
  