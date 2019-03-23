let customerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

// Create a new customer
router.post('/customer',(req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is missing');
    }

    let customer = new customerModel(req.body);
    customer.save()
     .then(doc => {
         if(!doc || doc.length === 0){
             return res.status(500).send(doc)
         }
         res.status(201).send(doc)

     })
     .catch(err => {
         res.status(500).res.json(doc)
     })
});

router.get('/customer',(req,res) => {
    if(!req.query.email){
       res.status(400).send('missing URL parameter: email');
    }
    customerModel.findOne({
        email: req.query.email
    })
     .then(doc => {
         res.json(doc)
     })
     .catch(err => {
         res.status(500).json(doc)
     })
});

router.put('/customer',(req,res) => {
    if(!req.query.email){
        res.status(400).send('missing URL parameter: email')
    }

    customerModel.findOneAndUpdate({
        email: req.query.email
    },req.body,{new:true})
     .then(doc => {
         res.json(doc)
     })
     .catch(err => {
         res.status(500).json(err)
     })
});

// Delete
router.delete('/customer',(req,res) => {
    if(!req.query.email){
        res.status(400).send('missing URL parameter: email')
    }
    customerModel.findOneAndDelete({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(doc)
    })
})

module.exports = router