import axios from "axios";
import { DATABASE_PORT, DATABASE_URL } from "../../URL/URL";

const ajax = axios.create({
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: DATABASE_URL,
});

// axios.interceptors.response.use(response => {
//   return response
// }, err => console.log(err) )

export default ajax;
