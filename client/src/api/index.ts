import axios from "axios";
import {
  initialValues,
  ParamsType,
  ShoeDetailType,
  ShoeFromBagType,
  ShoseType,
} from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getAllShoses = (params: ParamsType): Promise<ShoseType[]> =>
  api.get("/shoses", { params }).then((res) => res.data.shoses);

const getShoseById = (id: string): Promise<ShoeDetailType> =>
  api.get(`/shoses/${id}`).then((res) => res.data.shoe);

const getShosesFromBag = (): Promise<ShoeFromBagType[]> =>
  api.get("/bag").then((res) => res.data.shoses);

const addShoeToBag = (
  body: initialValues | ShoeFromBagType,
): Promise<ShoeFromBagType> => api.post("/bag", body).then((res) => res.data);

const updateShoeFromBag = (body: ShoeFromBagType) =>
  api.patch(`/bag/${body._id}`, body).then((res) => res.data.shose);

const deleteShoeFromBag = (id: string) => api.delete(`/bag/${id}`);

export {
  getAllShoses,
  getShoseById,
  getShosesFromBag,
  addShoeToBag,
  updateShoeFromBag,
  deleteShoeFromBag,
};

export default api;
