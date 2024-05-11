import dotenv from 'dotenv'
import connectDB from "./DataBase/db.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8080,()=>{
        console.log(`Server is Listening on PORT ${process.env.PORT}`)
    } )
})
.catch((error)=>{
    console.log("MongoDB Connection Failed......",error)
})