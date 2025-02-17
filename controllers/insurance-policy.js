const express = require('express');
const router = express.Router();

const InsurancePolicy = require('../models/incurancePolicy');

const verifyToken = require('../middleware/verify-token');

router.get('/', verifyToken, async (req, res) => {
  try {
    const insurancePolicies = await InsurancePolicy.find({}, "username");

    res.json(insurancePolicies);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.post('/new', verifyToken, async (req, res) => {
  try {
    const createdInsurancePolicy = await InsurancePolicy.create(req.body);
    res.status(201).json(createdInsurancePolicy); // 201 Created
  } catch (err) {
    res.status(500).json({err: err.message})
  }
});

// router.get('/:userId', verifyToken, async (req, res) => {
//   try {
//     if (req.user._id !== req.params.userId){
//       return res.status(403).json({ err: "Unauthorized"});
//     }

//     const user = await User.findById(req.params.userId);

//     if (!user) {
//       return res.status(404).json({ err: 'User not found.'});
//     }

//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });

module.exports = router;
