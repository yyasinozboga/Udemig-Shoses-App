import mongoose from "mongoose";

const shoseModal = mongoose.Schema(
  {
    name: String,
    picture: [String],
    description: String,
    isNew: Boolean,
    discount: Number,
    size: String,
    color: String,
    gender: String,
    price: Number,
  },
  { timestamps: true },
);

const Shose = mongoose.model("shose", shoseModal);

export default Shose;
