const express=require('express');
const mongoose= require('mongoose');
const authroutes=require("./routes/authroutes");
const cors=require("cors");


const app=express();
require('dotenv').config()
app.use(cors({origin:true}));
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(process.env.dburl)
  .then(result=>{
    app.listen(9000);
    console.log("connected");
}).catch(err=>{
    console.log(err);
});
app.use(authroutes);
app.use('/',(req,res)=>{
  res.status(200).json({msg:"success"})
})
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ success:false,message: message, data: data });
});
