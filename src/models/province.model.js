import mongoose from "mongoose";

const ProvinceSchema = new mongoose.Schema({
  province_code: { type: String, required: true },
  province_name: { type: String, required: true },
  psgc_code: { type: String, required: true },
  region_code: { type: String, required: true },
});

const Province = mongoose.model("Province", ProvinceSchema);

export default Province;
