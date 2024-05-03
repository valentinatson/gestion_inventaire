const express = require("express")
const cors = require("cors")
const userRt= require("./Routes/userRoute")
const articleRt= require("./Routes/articleRoute")
const sellRt= require("./Routes/sellRoute")
const supplyRt= require("./Routes/supplyRoute")
const categorySelectRt= require("./Routes/categorySelectRoute")
const articleSelectRt= require("./Routes/articleSelectRoute")
 
const app= express()

app.use(cors())
app.use(express.json())

app.use("/user", userRt)
app.use("/article", articleRt)
app.use("/sell", sellRt)
app.use("/supply", supplyRt)
app.use("/category", categorySelectRt)
app.use("/article", articleSelectRt)


app.listen(5000, ()=>{
    console.log("Welcome");
})