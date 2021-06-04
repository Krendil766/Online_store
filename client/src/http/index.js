import axios from "axios";

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const $autoHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const autoIntercepter = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$autoHost.interceptors.request.use(autoIntercepter);

export { $host, $autoHost };
