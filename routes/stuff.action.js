const express = require('express');
const router = express.Router();
const Stuff = require('../models/stuff.schema')

router.get('/',async (req, res)=> {
    try {
        const stuff = await Stuff.find()
        res.json(stuff)
    } catch (err) {
        res.json({message: err})
    }
});

router.get('/:stuffId',async (req, res)=> {
    try {
        const stuff = await Stuff.findById(req.params.stuffId)
        res.json(stuff)
    } catch (err) {
        res.json({message: err})
    }
});

router.delete('/:stuffId',async (req, res)=> {
    try {
        const removedStuff = await Stuff.remove({_id: req.params.stuffId})
        res.json(removedStuff)
    } catch (err) {
        res.json({message: err})
    }
});

 router.patch('/:stuffId',async (req, res)=> {
    const updateObject = req.body
 try {
    const updatedStuff = await Stuff.updateOne({_id: req.params.stuffId}, {$set: updateObject})
    res.json(updatedStuff)
} catch (err) {
     res.json(err)
 }

 });

router.post('/' ,async (req, res) => {

    const StuffObject = new Stuff({
        category: req.body.category,
        stuffName: req.body.stuffName,
        amount: req.body.amount,
        status: req.body.status,
        stuffOwner: req.body.stuffOwner,
        notes: req.body.notes
     })
    try {
        const savedStuff = await StuffObject.save()
        res.json(savedStuff)
    } catch (err) {
        res.json({message: err})
    }

});

module.exports = router;