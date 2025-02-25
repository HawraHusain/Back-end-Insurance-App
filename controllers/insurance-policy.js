const express = require('express');
const router = express.Router();

const InsurancePolicy = require('../models/insurancePolicy');

const verifyToken = require('../middleware/verify-token');
const jwt = require('jsonwebtoken');


//get all
router.get('/', verifyToken, async (req, res) => {
  try {
    const insurancePolicies = await InsurancePolicy.find({userId:req.user._id});
    res.json(insurancePolicies);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//create
router.post('/new', verifyToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const companyId = req.body.companyId;
    const startDate = req.body.dateIssued;
    const endDate = req.body.dateExpiry;
    const policyNo = req.body.policyNo;
    const category = req.body.category;
    const subscriptionPrice = req.body.subscriptionPrice;
    const icon = req.body.icon;
      
    const user = decoded.payload;
    const newInsurancePolicy = {
      companyId: companyId,
      userId: user,
      dateIssued: startDate,
      dateExpiry: endDate,
      policyNo: policyNo,
      category: category,
      subscriptionPrice: subscriptionPrice,
      icon: icon
    }
      
    const createdInsurancePolicy = await InsurancePolicy.create(newInsurancePolicy);
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
router.put('/:insurancePolicyId/edit',  verifyToken, async (req, res) => {
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
