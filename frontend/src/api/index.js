import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:4000" });

// bütün konaklama alanlarını getirir
export const getPlaces = (params) =>
  api.get("/api/places", { params }).then((res) => res.data);
