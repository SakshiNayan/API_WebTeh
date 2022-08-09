const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
     inventoryId: String,
    inventoryType : String,
    itemName : String,
    quantity : Number
})
 
const InventoryModal = mongoose.model("inventaryTable", inventorySchema);
module.exports = InventoryModal;