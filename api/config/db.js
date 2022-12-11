import mongoose from "mongoose";


export const ConnectDB = async () => {
  try {  
    await mongoose.connect(process.env.MONGO_LINK);
    console.log("🔥 Connected to MongoDB 🔥");
  } catch (err) {
    throw err;
  }
}
//^ It will try to connect MongoDB again to again
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});