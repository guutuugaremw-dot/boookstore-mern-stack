import express from "express";

import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
   console.log(req);
   return res.status(200).json({ message: "Hello from the backend!" });
});

 
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });