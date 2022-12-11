import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import { ConnectDB } from "./config/db.js";

//! load env vars
dotenv.config({path:'./config/config.env'});

const app = express()

//! MiddleWares
app.use(express.json())

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelRoute);
app.use('/rooms', roomsRoute);

//^ middleWare error handler 
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

//! connect database
ConnectDB();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT} 🚀`));
