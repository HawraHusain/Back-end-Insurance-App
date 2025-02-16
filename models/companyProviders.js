const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
