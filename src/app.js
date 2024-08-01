var databaseURL="mongodb+srv://ziad:ZAheg1234@cluster0.wrpt3lo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const express = require("express");
const mongoose = require('mongoose');
const bodyParser=require("body-parser");
const authRouter=require("./routes/auth")
const cartRouter=require("./routes/cart")
const productRouter=require("./routes/product")
const categoryRouter=require("./routes/category")
const orderRouter=require("./routes/order")
const app = express();
const port = process.env.PORT || "3000";
const cors=require("cors")
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json({limit:'20mb'}))
app.use("/auth",authRouter)
app.use("/product",productRouter)
app.use("/category",categoryRouter)
app.use("/cart",cartRouter)
app.use("/order",orderRouter)
mongoose.connect(databaseURL)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
