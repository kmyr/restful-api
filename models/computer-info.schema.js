const mongoose = require('mongoose');


 const ComputerInfoSchema = new mongoose.Schema({ 
    display: {
        type: String,
        required: true
    }, 
    deviceType: {
        type: String,
        required: true
    }, 
    deviceName: {
        type: String,
        required: true
    }, 
    cpu: {
        type: String,
        required: true
    }, 
    ram: {
        type: String,
        required: true
    }, 
    motherboard: {
        type: String,
        required: true
    }, 
    deviceOwner: {
        type: String,
        required: false
    }, 
    graphic: {
        type: String,
        required: true
    }, 
    storage: {
        type: String,
        required: true
    },
    deviceUsername:  {
        type: String,
        required: false
    },
    devicePassword:  {
        type: String,
        required: false
    }
    })


 module.exports= mongoose.model('computers', ComputerInfoSchema);