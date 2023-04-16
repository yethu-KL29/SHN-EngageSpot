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
    try {
        const users = await User.find();
        const usernames = users.map(user => user.username); // Extract usernames from the fetched user data
        res.status(200).json({ usernames: usernames }); // Send the usernames as a JSON response
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to fetch user data" }); // Send an error response if fetching user data fails
    }
}


module.exports = {
    userSignup,
    login,
    getUser
  };
  