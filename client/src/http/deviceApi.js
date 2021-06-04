import { $host, $autoHost } from "./index";

export const createType = async (type) => {
  const { data } = await $autoHost.post("store/type", type);
  return data;
};
export const fetchType = async () => {
  const { data } = await $host.get("store/type");
  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $autoHost.post("store/brand", brand);
  return data;
};
export const fetchBrand = async () => {
  const { data } = await $host.get("store/brand");
  return data;
};

export const createDevice = async (device) => {
  const { data } = await $autoHost.post("store/device", device);
  return data;
};

export const fetchDevice = async () => {
  const { data } = await $host.get("store/device");
  return data;
};

export const fetchOneDevice = async (id) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
