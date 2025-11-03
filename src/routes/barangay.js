import express from "express";
import Barangay from "../models/barangay.model.js";
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const barangay = await Barangay.find();
    res.status(200).json(barangay);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

router.get("/city/:cityCode", async (req, res) => {
  try {
    const { cityCode } = req.params;
    const filteredBarangay = await Barangay.find({ city_code: cityCode });
    res.status(200).json(filteredBarangay);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

router.get("/:barangayCode", async (req, res) => {
  try {
    const { barangayCode } = req.params;
    const barangay = await Barangay.findOne({ brgy_code: barangayCode });
    if (!barangay) return res.status(404).json({ error: "Barangay not found" });
    res.json(barangay);
  } catch (err) {
    res.status(500).json({ error: "Failed to read barangays data" });
  }
});

export default router;
