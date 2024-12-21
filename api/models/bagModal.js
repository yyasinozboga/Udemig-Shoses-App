import mongoose from "mongoose";

const BagModal = mongoose.Schema(
  {
    name: String,
    picture: [String],
    discount: Number,
    size: String,
    price: Number,
    amount: Number,
    color: String,
  },
  { timestamps: true },
);

const Bag = mongoose.model("bag", BagModal);

export default Bag;
