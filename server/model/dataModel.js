const mongoose = require('mongoose');
const dataSchema = mongoose.Schema({
    
   
title:{
    type:String,
    required:true,
    trim:true,

}
,
description:{
    type:String,
    required:true,
    trim:true,

},
author:{
    type:String,
    required:true,
    trim:true,

},


    
    
})
const Data = mongoose.model('Data', dataSchema);

module.exports = Data;