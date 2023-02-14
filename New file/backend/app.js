const express =  require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();
const cors = require('cors');
//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books

mongoose.connect("mongodb+srv://admin:admin123@cluster0.tg3nhyu.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("Connected To Database"))
.then(()=> {
    app.listen(5000)
}).catch((err)=>console.log(err));


// dSe5VtR35q9Jo5HV