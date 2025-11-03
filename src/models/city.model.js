import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
  psgc_code: { type: String, required: true },
  city_name: { type: String, required: true },
  city_code: { type: String, required: true },
  province_code: { type: String, required: true },
  region_desc: { type: String, required: true },
});

const City = mongoose.model("City", CitySchema);

export default City;
