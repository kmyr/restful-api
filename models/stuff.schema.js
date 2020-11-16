const mongoose = require('mongoose');


 const StuffSchema = new mongoose.Schema({ 
        category: {
            type: String,
            required: true
        },
        stuffName: {
            type: String,
            required: true
        },    
        amount: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        stuffOwner: {
            type: String,
            required: false
        },
        notes: {
            type: String,
            required: false
        },
        lastUpdate: {
            type: Date,
            required: false
        },
        createdDate: {
            type: Date,
            default: Date.now()
        }
    })


 module.exports= mongoose.model('stuff', StuffSchema);