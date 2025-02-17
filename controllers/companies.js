const express = require('express');
const router = express.Router();

const Company = require('../models/companyProviders.js');

const verifyToken = require('../middleware/verify-token');

//get all
router.get('/', verifyToken, async (req, res) => {
  try {
    const company = await Company.find({}, "username");

    res.json(company);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

//create
router.post('/new', verifyToken, async (req, res) => {
  try {
    const createdCompany = await Company.create(req.body);
    res.status(201).json(createdCompany); // 201 Created
  } catch (err) {
    res.status(500).json({err: err.message})
  }
});


// READ 
router.get('/:companyId', verifyToken, async (req, res) => {
    try {
      const foundCompany = await Company.findById(req.params.companyId);      
      if (!foundCompany) {
        res.status(404);
        throw new Error('foundCompany not found.');
      }
      res.status(200).json(foundCompany);
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
router.delete('/:companyId', verifyToken, async (req, res) => {
    try {
      const foundCompany = await Company.findByIdAndDelete(req.params.companyId);

      if (!foundCompany) {
        res.status(404);
        throw new Error('company not found.');
      }
      res.status(200).json(foundCompany);
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
router.put('/:companyId', async (req, res) => {
    try {
      const foundCompany = await Company.findByIdAndUpdate(req.params.companyId, req.body, {
        new: true,
      });
      if (!foundCompany) {
        res.status(404);
        throw new Error('Company not found.');
      }
      res.status(200).json(foundCompany);
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