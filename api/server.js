import mongoose from "mongoose";
import app from "./app.js";

mongoose
  .connect("mongodb://localhost:27017/shosesdb")
  .then(() => {
    console.log("🥎 Connected to database!");
  })
  .catch(() => console.log("💥 Error connecting to database!"));

const port = 3000;

app.listen(port, () => {
  console.log("🥎 Listening on " + port);
});
