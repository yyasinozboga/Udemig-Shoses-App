import express from "express";
import {
  addShoseToBag,
  deleteShoseFromBag,
  getAllShoses,
  getShose,
  getShosesFromBag,
  updateShoseFromBag,
} from "../controllers/shoses-controllers.js";
import { formatQuery } from "../middleware/formatQurey.js";

const router = express.Router();

router.route("/shoses").get(formatQuery, getAllShoses);

router.route("/shoses/:id").get(getShose);

router.route("/bag").get(getShosesFromBag).post(addShoseToBag);

router.route("/bag/:id").delete(deleteShoseFromBag).patch(updateShoseFromBag);

export default router;
