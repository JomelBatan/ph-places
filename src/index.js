import express from "express";
import cors from "cors";
import "dotenv/config";
import regionRoute from "./routes/region.js";
import provinceRoute from "./routes/province.js";
import cityRoute from "./routes/city.js";
import barangayRoute from "./routes/barangay.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/regions", regionRoute);
app.use("/provinces", provinceRoute);
app.use("/cities", cityRoute);
app.use("/barangays", barangayRoute);
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});
app.use("/", (req, res) => res.send("Hello"));
app.get("/", (_, res) => {
  res.json({ message: "PH Geo API running locally ✅" });
});

connectDB();

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);
