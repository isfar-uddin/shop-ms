// Load CustomerModel Modal
const CustomerModel = require('../models/customer.model');

// Get all customers 
const getAllCustomer = (req, res) => {
    CustomerModel.find()
    .then(customers=> res.status(200).json(customers))
    .catch(err=> res.status(404).json(err));
}

// Create new Customer
const createCustomer = (req, res) => {
    const newCustomer = new CustomerModel({
        MembershipCardNo: req.body.membership_card_no,
        Name: req.body.name,
        Phone: req.body.phone,
        Email: req.body.email,
        NationalId: req.body.national_id,
        Occupation: req.body.occupation,
        company: req.body.company,
        Remarks: req.body.remarks,
    });
    newCustomer.save()
    .then(()=>res.status(200).json({message: "Customer create successfully"}) )
    .catch(err=> res.status(404).json(err));
}


module.exports = {
    getAllCustomer: getAllCustomer,
    createCustomer: createCustomer
}