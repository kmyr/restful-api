const express = require('express');
const router = express.Router();
const employee = require('../models/employees.schema')

router.get('/',async (req, res)=> {
    try {
        const employeesInfo = await employee.find()
        res.json(employeesInfo)
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:employeeId',async (req, res)=> {
    try {
        const employeeObject = await employee.findById(req.params.employeeId)
        res.json(employeeObject)
    } catch (err) {
        res.json({message: err})
    }
});

router.delete('/:employeeId',async (req, res)=> {
    try {
        const removedEmployee = await employee.remove({_id: req.params.employeeId})
        res.json(removedEmployee)
    } catch (err) {
        res.json({message: err})
    }
});

 router.patch('/:employeeId',async (req, res)=> {
    console.log(req.body);
    const updateObject = req.body
 try {
    const updatedEmployee = await employee.updateOne({_id: req.params.employeeId}, {$set: updateObject})
    res.json(updatedEmployee)
} catch (err) {
     res.json(err)
 }

 });

router.post('/' ,async (req, res) => {

    const employeeObject = new employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        fatherName: req.body.fatherName,
        gender: req.body.gender,
        idCard: req.body.idCard,
        birthPlace: req.body.birthPlace,
        issuePlace: req.body.issuePlace,
        citizenship: req.body.citizenship,
        religion: req.body.religion,
        birthDate: req.body.birthDate,
        diploma: req.body.diploma,
        studyField: req.body.studyField,
        role: req.body.role,
        department: req.body.department,
        employmentPlace: req.body.employmentPlace,
        tel: req.body.tel,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
     })
    try {
        const savedEmployee = await employeeObject.save()
        res.json(savedEmployee)
    } catch (err) {
        res.json({message: err})
    }

});

module.exports = router;
