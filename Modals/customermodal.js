const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    customerId :String,
    customerName : String,
    email : String
})

const CustomerModal = mongoose.model("customerTable", customerSchema);
module.exports = CustomerModal;