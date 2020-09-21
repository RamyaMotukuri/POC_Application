const mongoose = require('mongoose');

const Userschema =  new mongoose.Schema({
    username: {
        type: String,
        required: true
      },
     password: {
         type: String,
         required: true
     }
},{
    timestamps: true,
});

//mongoose.module("users",Userschema);
module.exports= User = mongoose.model('users',Userschema);
//module.exports= User = mongoose.model('nodejs',Userschema);