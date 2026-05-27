import express from "express";
import * as dotenv from "dotenv";
import {
    usersRouter,
    studentsRouter
} from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/users',usersRouter);
app.use('/students',studentsRouter);
app.get("/",(req,res)=>{
    res.send("Hello World");
}) 

app.listen(PORT,async()=>{
console.log(`Server is running on port ${PORT}`);
})

// import { sum,multiply, substract} from "./calculations.js";

// const result = sum(5, 3);
// console.log(result);

// const product = multiply(5, 3);
// console.log(product);

// const difference = substract(5, 3);
// console.log(difference);

// var name = "Student User Backend";
// console.log(name);