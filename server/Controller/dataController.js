const Data = require('../model/dataModel');
const dataCreate = async (req, res) => {
    const {title,description,author } = req.body;
    let data;
    try {
        data = new Data({
         
        title,
        description,
        author,
         
        });
        await data.save();
        res.status(200).json({
        message: data,
        });
     
    } catch (error) {
        
    }
    }

const dataGet = async (req, res) => {
    let data;
    try {
        data = await Data.find();
    } catch (error) {
        console.log(error)
    }
    res.status(200).json({message:data})
}

module.exports={
    dataCreate,
    dataGet
}