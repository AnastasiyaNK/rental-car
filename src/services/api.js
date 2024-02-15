import axios from "axios";

export const carInstance = axios.create({
  baseURL: "https://mockapi.io/projects/6538c7dca543859d1bb1e825",
});

export const requestCars = async () => {
  const { data } = await carInstance.get("/cars");
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
