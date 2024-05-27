import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:5197/api/"
})

export default axiosClient;
