const mongoose = require('mongoose');

 const EmployeeSchema = new mongoose.Schema({ 
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },    
        fatherName: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        idCard: {
            type: String,
            required: true
        },
        birthPlace: {
            type: String,
            required: true
        },
        issuePlace: {
            type: String,
            required: true
        },
        citizenship: {
            type: String,
            required: true
        },
        religion: {
            type: String,
            required: true
        },
        birthDate: {
            type: String,
            required: true
        },
        diploma: {
            type: String,
            required: true
        },
        studyField: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        department: {
            type: Array,
            required: false
        },
        employmentPlace: {
            type: String,
            required: true
        },
        tel: {
            type: String,
            required: false
        },
        phoneNumber: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        workerComputer: {
            type: String,
            required: false,
            default: ''
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

 module.exports= mongoose.model('employee', EmployeeSchema);