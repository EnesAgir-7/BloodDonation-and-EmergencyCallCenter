import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express()
dotenv.config();


//! Connect Database MongoDB
const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error;
  }
}
//^ It will try to connect MongoDB again to again
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!")
})

//! MiddleWares
app.use(express.json())
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelRoute);
app.use('/rooms', roomsRoute);


app.listen(5000, () => {
  DbConnect();
  console.log("Backend server is running ")
})