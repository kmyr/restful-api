const express = require('express');
const router = express.Router();
const ComputerInfo = require('../models/computer-info.schema')
debugger;

//routes
router.get('/',async (req, res)=> {
    try {
        const computersInfo = await ComputerInfo.find()
        res.json(computersInfo)
    } catch (err) {
        res.json({message: err})
    }
});

//get specific post
router.get('/:computerId',async (req, res)=> {
    try {
        const computerInfo = await ComputerInfo.findById(req.params.computerId)
        res.json(computerInfo)
    } catch (err) {
        res.json({message: err})
    }
});

//delete specific post
router.delete('/:computerId',async (req, res)=> {
    try {
        const removedComputer = await ComputerInfo.remove({_id: req.params.computerId})
        res.json(removedComputer)
    } catch (err) {
        res.json({message: err})
    }
});

//update specific post
router.patch('/:computerId/:targetValue',async (req, res)=> {
    try {
        const updatedComputer = await ComputerInfo.updateOne({_id: req.params.computerId}, {$set: {title: req.params.targetValue}})
        res.json(updatedComputer)
    } catch (err) {
        res.json({message: err})
    }
});

router.post('/post' ,async (req, res) => {

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