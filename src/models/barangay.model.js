import mongoose from "mongoose";

const BarangaySchema = new mongoose.Schema({
  brgy_code: { type: String, required: true },
  brgy_name: { type: String, required: true },
  city_code: { type: String, required: true },
  province_code: { type: String, required: true },
  region_code: { type: String, required: true },
});

const Barangay = mongoose.model("Barangay", BarangaySchema);

export default Barangay;
