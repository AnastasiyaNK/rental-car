import axios from "axios";

export const carInstance = axios.create({
  baseURL: "https://6538c7dca543859d1bb1e824.mockapi.io",
});

export const requestCars = async (page = 1, limit = 12) => {
  const { data } = await carInstance.get(`/cars?page=${page}&limit=${limit}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
export const requestAddCars = async () => {
  const { data } = await carInstance.post("/cars");
  return data;
};

export const requestCarById = async (carId) => {
  const { data } = await carInstance.get(`/cars/${carId}`);
  return data;
};
export const requestDeleteCar = async (carId) => {
  const { data } = await carInstance.delete(`/cars/${carId}`);
  return data;
};
