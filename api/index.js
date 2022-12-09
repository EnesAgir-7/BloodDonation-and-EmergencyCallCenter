import {express} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express()


//! Connect Database
const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
}


//! It will try to connect MongoDB again to again
mongoose.connect.on("disconnected",()=>{
  console.log("MongoDB disconnected!")
})
mongoose.connect.on("connected",()=>{
  console.log("MongoDb connected!")
})


app.listen(5000, () => {
  DbConnect();
  console.log("Backend server is running ")
})