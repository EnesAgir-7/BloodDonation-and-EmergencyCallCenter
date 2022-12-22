import express from "express"
import Hotel from "../models/Hotel.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//~ Create
router.post("/",verifyAdmin, createHotel);

//~ Update
router.put("/:id",verifyAdmin, updateHotel)

//~ Delete
router.delete("/:id", deleteHotel)

//~ Get
router.get("/:id", getHotel)

//~ Get All
router.get("/", getHotels)

export default router