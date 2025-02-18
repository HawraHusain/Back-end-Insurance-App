const express = require('express');
const router = express.Router();

const InsurancePolicy = require('../models/incurancePolicy');

const verifyToken = require('../middleware/verify-token');

//get all
router.get('/', verifyToken, async (req, res) => {
  try {
    const insurancePolicies = await InsurancePolicy.find({userId:req.body.userId});

    res.json(insurancePolicies);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//create
router.post('/new', verifyToken, async (req, res) => {
  try {
    const createdInsurancePolicy = await InsurancePolicy.create(req.body);
    res.status(201).json(createdInsurancePolicy); // 201 Created
  } catch (err) {
    res.status(500).json({err: err.message})
  }
});
// READ 
router.get('/:insurancePolicyId', verifyToken, async (req, res) => {
  try {
    const foundInsurancePolicy = await InsurancePolicy.findById(req.params.insurancePolicyId);      
    if (!foundInsurancePolicy) {
      res.status(404);
      throw new Error('Policy not found.');
    }
    res.status(200).json(foundInsurancePolicy);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // Add else statement to handle all other errors
      res.status(500).json({ err: err.message });
    }
  }
});


//delete
router.delete('/:insurancePolicyId', verifyToken, async (req, res) => {
  try {
    const foundInsurancePolicy = await InsurancePolicy.findByIdAndDelete(req.params.insurancePolicyId);

    if (!foundInsurancePolicy) {
      res.status(404);
      throw new Error('policy not found.');
    }
    res.status(200).json(foundInsurancePolicy);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // Add else statement to handle all other errors
      res.status(500).json({ err: err.message });
    }
  }
});



// UPDATE 
router.put('/:insurancePolicyId',  verifyToken, async (req, res) => {
  try {
    const foundInsurancePolicy = await InsurancePolicy.findByIdAndUpdate(req.params.insurancePolicyId, req.body, {
      new: true,
    });
    if (!foundInsurancePolicy) {
      res.status(404);
      throw new Error('Policy not found.');
    }
    res.status(200).json(foundInsurancePolicy);
  } catch (err) {
    // Add code for errors
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});


module.exports = router;
