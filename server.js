const express = require("express");
const mongoose = require('mongoose')
const app = express();

const Inventory = require('./router/inventory')
const Customer = require('./router/customer')
const Order = require('./router/order')


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3002,(err)=>{
    if(!err){
        console.log("Server started at 3002")
    }
    else{
        console.log(err)
    }
});

mongoose.connect("mongodb://localhost/api_web_tech",()=>{
    console.log("connected to db")
},(err)=>{
    console.log(err)
});

app.use("/InventoryProduct", Inventory);
app.use("/UserInfo",Customer);
app.use("/orderDetail", Order);

app.get("/",(req,res)=>{
    res.status(200).send("API Web-Tech")
},(err)=>{
    console.log(err)
})