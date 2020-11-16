const express = require('express');
const router = express.Router();
const ComputerInfo = require('../models/computer-info.schema')

router.get('/',async (req, res)=> {
    try {
        const computersInfo = await ComputerInfo.find()
        res.json(computersInfo)
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:computerId',async (req, res)=> {
    try {
        const computerInfo = await ComputerInfo.findById(req.params.computerId)
        res.json(computerInfo)
    } catch (err) {
        res.json({message: err})
    }
});

router.delete('/:computerId',async (req, res)=> {
    try {
        const removedComputer = await ComputerInfo.remove({_id: req.params.computerId})
        res.json(removedComputer)
    } catch (err) {
        res.json({message: err})
    }
});

 router.patch('/:computerId',async (req, res)=> {
    console.log(req.body);
    const updateObject = req.body
 try {
    const updatedComputer = await ComputerInfo.updateOne({_id: req.params.computerId}, {$set: updateObject})
    res.json(updatedComputer)
} catch (err) {
     res.json(err)
 }

 });

router.post('/' ,async (req, res) => {

    const Computer = new ComputerInfo({
    display: req.body.display , 
    deviceType: req.body.deviceType , 
    deviceName: req.body.deviceName , 
    cpu: req.body.cpu , 
    ram: req.body.ram , 
    motherboard: req.body.motherboard , 
    deviceOwner: req.body.deviceOwner , 
    graphic: req.body.graphic , 
    storage: req.body.storage
     })
    try {
        const savedComputerInfo = await Computer.save()
        res.json(savedComputerInfo)
    } catch (err) {
        res.json({message: err})
    }

});

module.exports = router;