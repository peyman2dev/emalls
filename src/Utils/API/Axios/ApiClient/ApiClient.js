import axios from "axios";
import { DATABASE_PORT, DATABASE_URL } from "../../URL/URL";

const ApiClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: DATABASE_URL + DATABASE_PORT,
});

export default ApiClient;
