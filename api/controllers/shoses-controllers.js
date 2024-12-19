import featuresAPI from "../utils/featuresAPI.js";
import Shose from "../models/shoseModal.js";
import Bag from "../models/bagModal.js";

const getAllShoses = async (req, res) => {
  try {
    const features = new featuresAPI(
      Shose.find(),
      req.query,
      req.formattedQuery,
    )
      .filter()
      .limit()
      .sort();

    const shoses = await features.query;

    res.status(200).json({ shoses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShose = async (req, res) => {
  try {
    const shoe = await Shose.findById(req.params.id);

    res.status(200).json({ shoe });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getShosesFromBag = async (req, res) => {
  try {
    const shoses = await Bag.find();

    res.status(200).json({ shoses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addShoseToBag = async (req, res) => {
  try {
    const shose = await Bag.create(req.body);

    res.status(200).json(shose);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteShoseFromBag = async (req, res) => {
  try {
    await Bag.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Shose deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateShoseFromBag = async (req, res) => {
  try {
    const shose = await Bag.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    res.status(200).json({ shose });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getAllShoses,
  getShose,
  getShosesFromBag,
  addShoseToBag,
  deleteShoseFromBag,
  updateShoseFromBag,
};
