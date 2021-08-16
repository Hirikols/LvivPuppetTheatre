import axios from "axios";

export default axios.create({
  baseURL: `http://10.26.0.156:5000/api/`,
});
