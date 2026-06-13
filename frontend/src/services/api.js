import axios from "axios";

const api = axios.create({
  baseURL: "https://your-railway-domain.up.railway.app/api"
});

export default api;