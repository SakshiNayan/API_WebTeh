const express = require ("express")
const InventoryModal = require('../Modals/inventorymodal')
 const router = express.Router()

router.post("/item", (req,res)=>{
    InventoryModal.find({inventoryId : req.body.inventoryId }).then((data)=>{
        if(data.length){
            const Curr_quantity = (data[0].quantity) + (req.body.quantity)
            InventoryModal.updateOne({inventoryId :req.body.inventoryId},{$set:{quantity:Curr_quantity}}).then(()=>{
                res.status(200).send("Successfully Inventory Added")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        }
        else{
            InventoryModal.create({
                inventoryId : req.body.inventoryId,
                inventoryType : req.body.inventoryType,
                itemName : req.body.itemName,
                quantity : req.body.quantity
            }).then((data)=>{
                res.status(200).send("Item Selected")
            }).catch((err)=>{
                res.status(400).send(err)
            })
        }
    })
   
})
module.exports =router