const express = require('express')
const router = express.Router()

// Bill Model

const Bill = require('../../models/Bill')

// @route   GET api/bills
// @desc    Get all bills
// @access  Public
router.get('/', (req, res) => {
  Bill.find()
    .sort({ date: 1 })
    .then(bills => res.json(bills))
})

// @route   DELETE api/bills/:id
// @desc    Deletes a bill
// @access  Public
router.delete('/:id', (req, res) => {
  Bill.findById(req.params.id)
    .then(bill => bill.remove().then(() => res.json({ success: true })))
})

// @route   POST api/bills
// @desc    Posts a bill
// @access  Public
router.post('/', (req, res) => {
  const newBill = new Bill({
    name: req.body.name,
    cost: req.body.cost
  })
  
  newBill.save().then(bill => res.json(bill))
})

// @route   EDIT api/bills ????
// @desc    Edits a bill
// @access  Public
router.post('/:id', (req, res) => {
  Bill.findById(req.params.id)
    .then(bill => bill.update({
      name: req.body.name,
      cost: req.body.cost
    }).then(() => console.log('bill entered')))
})

module.exports = router