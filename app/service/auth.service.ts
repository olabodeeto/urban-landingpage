import { storeAuthToken } from "../shared/utils/ls";
import api from "./api";

type LoginT = {
  email: string;
  password: string;
};

export const userLogin = async (payload?: LoginT) => {
  try {
    const response: any = await api.post("/login", payload);
    console.log("login response", response);
    if (response.status) {
      storeAuthToken(response.token);
      return response;
    } else {
      return response;
    }
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};

export const getTrips = async (payload: any) => {
  try {
    const response: any = await api.get("/trip", { params: { ...payload } });
    console.log("trips response", response);
    return response;
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
