const express = require("express")
const InventoryModal  = require('../Modals/inventorymodal')
const OrderModal =require('../Modals/ordermodal')
const router = express.Router();

router.post("/order", (req,res)=>{
    InventoryModal.find({inventoryId : req.body.inventoryId}).then((data)=>{
        if(data.length){
            const available = data[0].quantity
            if(available > req.body.Orderquantity){
                OrderModal.create({
                    inventoryId : req.body.inventoryId,
                    customerId: req.body.customerId,
                    itemName : req.body.itemName,
                    Orderquantity : req.body.Orderquantity

                }).then(()=>{
                    const setquantity = available - req.body.Orderquantity
                    InventoryModal.updateOne({inventoryId : req.body.inventoryId}, {$set : {quantity : setquantity}}).then(()=>{
                        res.status(200).send("successfully order placed")
                    }).catch((err)=>{
                        res.status(400).send(err)
                    })
                })
            }
            else{
                res.status(400).send(" Not Available enough Quantity")
            }
        }
    })
  
    
})
module.exports =router