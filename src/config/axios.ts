import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

const instance = axios.create({
  baseURL: "https://fintual.cl/api",
});

export default applyCaseMiddleware(instance);
