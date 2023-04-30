import axios from "axios";

export const RequestApi = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
