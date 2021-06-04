import { $autoHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("/store/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return await jwt_decode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("/store/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return await jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await $autoHost.get("store/user/auth");
  return await jwt_decode(data.token);
};
