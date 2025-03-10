const mongoose = require('mongoose');

const InsurancePolicySchema = new mongoose.Schema({
    category: { enum: ['health', 'life', 'car', 'travel', 'home'], type: String, required: true },
    policyNo: { type: Number, immutable: true },
    icon: { type: String }, 
    dateIssued: { type: Date, required: true },
    dateExpiry: { type: Date, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  
    subscriptionPrice: { type: Number, required: true },
}, { timestamps: true });

const InsurancePolicy = mongoose.model('insurancePolicy', InsurancePolicySchema);

module.exports = InsurancePolicy;
