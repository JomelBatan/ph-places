import mongoose from "mongoose";

const RegionSchema = new mongoose.Schema({
  psgc_code: { type: String, required: true },
  region_name: { type: String, required: true },
  region_code: { type: String, required: true },
});

const Region = mongoose.model("Region", RegionSchema);

export default Region;
