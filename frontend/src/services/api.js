import axios from "axios";

const api = axios.create({
  baseURL: "https://job-board-ai-production-65bc.up.railway.app/api"
});

export default api;