import express from "express";
import Region from "../models/region.model.js";
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const regions = await Region.find();
    res.status(200).json(regions);
  } catch (err) {
    res.status(500).json({ error: "Failed to read regions data" });
  }
});

router.get("/:regionCode", async (req, res) => {
  try {
    const { regionCode } = req.params;
    const region = await Region.findOne({ region_code: regionCode });

    if (!region) return res.status(404).json({ error: "Region not found" });
    res.status(200).json(region);
  } catch (err) {
    res.status(500).json({ error: "Failed to read regions data" });
  }
});

export default router;
