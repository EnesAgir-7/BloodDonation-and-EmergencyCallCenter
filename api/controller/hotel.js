import Hotel from "../models/Hotel.js";

export const createHotel = async(req, res,next) => {
  const NewHotel = new Hotel(req.body);
  try {
    const savedHotel = await NewHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
}

export const updateHotel = async(req, res,next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      //^ new : true -> update yaptiktan sonra yapilani dondurmek icindir 
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
}

export const deleteHotel = async(req, res,next) => {
  try {
    await Hotel.findByIdAndRemove(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (err) {
    next(err);
  }
}

export const getHotel = async(req, res,next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
}

export const getHotels = async(req, res,next) => {
  // const failed = true;
  // if (failed) return next(createError());
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels)
  } catch (err) {
    next(err);
  }
}