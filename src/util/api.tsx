import axios from "axios";

export default axios.create({
  baseURL: `http://10.26.0.236:5000/api/`,
});
