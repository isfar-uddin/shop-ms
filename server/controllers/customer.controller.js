// Load CustomerModel Modal
const CustomerModel = require('../models/customer.model');

// Messages
const Messages = require('../constants/messages');

// Get all customers 
const getAllCustomer = (req, res) => {
    CustomerModel.find()
    .then(customers=> res.status(200).json(customers))
    .catch(err=> res.status(404).json({error: "Customers "+ Messages.message_404}));
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
    .catch(err=> res.status(404).json({error: "Customer not added "}));
}


// Customer details 
const customerDetails = (req, res)=> {
    CustomerModel.findById(req.params.id)
    .then(customer=> res.status(200).json({result:customer, message: Messages.message_200}))
    .catch(err=> res.status(404).json({error: "Customer "+ Messages.message_404}))
}


// Update customer 
const updateCustomer = (req, res)=> {
    CustomerModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(customer=> {
        if(!customer) {
            return res.status(404).json({error: "Customer "+ Messages.message_404})
        .json({
            error: "Customer "+ Messages.message_404
        })
        }
        res.status(200).json({result: "Customer update successfully" });
    })
    .catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                error: "Customer  "+ Messages.message_404
            })
        }
        return res.status(500).json({
            error: "Customer " + Messages.message_500
        });
    })
}

// Delete customer 
const deleteCustomer = (req, res)=> {
    CustomerModel.findByIdAndDelete(req.params.id)
    .then(()=> {
        res.status(200).json({result: "Customer deleted successfully"});
    })
    .catch(err=> {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                error: "Customer "+ Messages.message_404
            })
        }
        return res.status(500).json({
            error: "Customer" + Messages.message_500
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