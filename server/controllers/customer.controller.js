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


// Customer details 
const customerDetails = (req, res)=> {
    CustomerModel.findById(req.params.id)
    .then(customer=> res.status(200).json(customer))
    .catch(err=> res.status(404).json(err))
}


// Update customer 
const updateCustomer = (req, res)=> {
    CustomerModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(customer=> {
        if(!customer) {
            return res.status(404)
        .json({
            message: "Customer not found with id"+ req.params.id
        })
        }
        res.status(200).json({message: "Customer update successfully" });
    })
    .catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Customer not found with id "+ req.params.id
            })
        }
        return res.status(500).json({
            message: "Error updating Customer with id " + req.params.id
        });
    })
}

// Delete customer 
const deleteCustomer = (req, res)=> {
    CustomerModel.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(200).json({message: "Customer deleted successfully" });
    })
    .catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Customer not found with id "+ req.params.id
            })
        }
        return res.status(500).json({
            message: "Error Delate Customer with id " + req.params.id
        });
    })
}


module.exports = {
    getAllCustomer: getAllCustomer,
    createCustomer: createCustomer,
    customerDetails: customerDetails,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}