require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors")
const chatRoutes=require("./routes/chat.js")

app.use(bodyParser.json())
app.use(cors())

//MY ROUTES
app.use("/api",chatRoutes)
//DB CONNECTION
mongoose.connect(process.env.DATABASE,
    {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
        console.log("DB CONNECTED")
    })

//PORT
const port=process.env.PORT || 8000;

//PORT
app.listen(port,()=>{
    console.log(`App is running on ${port}`)
})