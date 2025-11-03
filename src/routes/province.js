import express from "express";
import Province from "../models/province.model.js";
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const provinces = await Province.find();
    res.status(200).json(provinces);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

router.get("/region/:regionCode", async (req, res) => {
  try {
    const { regionCode } = req.params;
    const filteredProvinces = await Province.find({ region_code: regionCode });

    res.status(200).json(filteredProvinces);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

router.get("/:provinceCode", async (req, res) => {
  try {
    const { provinceCode } = req.params;
    const province = await Province.find({ province_code: provinceCode });
    if (!province) return res.status(404).json({ error: "Province not found" });
    res.status(200).json(province);
  } catch (err) {
    res.status(500).json({ error: "Failed to read provinces data" });
  }
});

export default router;
