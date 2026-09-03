import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://pingnest-uacy.onrender.com/api",
  withCredentials: true,
});