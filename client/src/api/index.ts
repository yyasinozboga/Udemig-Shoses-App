import axios from "axios";
import {
  initialValue,
  ParamsType,
  ShoeDetailType,
  ShoseFromBagType,
  ShoseType,
} from "../types";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

const getAllShoses = (params: ParamsType): Promise<ShoseType[]> =>
  api.get("/shoses", { params }).then((res) => res.data.shoses);

const getShoseById = (id: string): Promise<ShoeDetailType> =>
  api.get(`/shoses/${id}`).then((res) => res.data.shoe);

const getShosesFromBag = (): Promise<ShoseFromBagType[]> =>
  api.get("/bag").then((res) => res.data.shoses);

const addShoeToBag = (body: initialValue) => api.post("/bag", body);

export { getAllShoses, getShoseById, getShosesFromBag, addShoeToBag };

export default api;
