const express = require("express");
const CustomerModal =require('../Modals/customermodal')

const router = express.Router()

router.post("/customer", (req,res)=>{
    CustomerModal.find({email : req.body.email}).then((data)=>{
        if(data.length){
            res.send("user already exist")
        }else{
            CustomerModal.create({
                customerId : req.body.customerId,
               customerName : req.body.customerName,
               email : req.body.email,
           }).then(()=>{
               res.status(200).send("User Created")
           }).catch((err)=>{
               res.status(400).send(err)
           })
        }
    })
    
})

router.get("/viewUser",(req,res)=>{
    CustomerModal.find().then((data)=>{
        res.status(200).send({data: data})
    })
})


module.exports =router