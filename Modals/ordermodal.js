const mongoose = require("mongoose");




const orderSchema = new mongoose.Schema({
    inventoryId: String,
    customerId :String,
    itemName : String,
    Orderquantity  : Number
})



const OrderModal = mongoose.model("orderTable", orderSchema)
module.exports = OrderModal