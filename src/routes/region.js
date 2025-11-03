import express from "express";
import { getData } from "../utils/fetcher.js";

const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const data = await getData("regions.json");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to read regions data" });
  }
});

router.get("/:regionCode", async (req, res) => {
  try {
    const data = await getData("regions.json");
    const region = data.find((r) => r.region_code === req.params.regionCode);
    if (!region) return res.status(404).json({ error: "Region not found" });
    res.json(region);
  } catch (err) {
    res.status(500).json({ error: "Failed to read regions data" });
  }
});

export default router;
