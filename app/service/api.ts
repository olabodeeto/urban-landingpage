import axios from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "../shared/utils/ls";

const api = axios.create({
  baseURL: "https://ui62646llb.execute-api.us-east-1.amazonaws.com/prod",
});

api.interceptors.request.use(
  (request) => {
    //@ts-ignore
    request.headers = {
      "Content-Type": "application/json",
      Authorization: getStoredAuthToken()
        ? `Bearer ${getStoredAuthToken()}`
        : "",
    };
    request.data = request.data;
    return request;
  },
  (error) => {
    console.log("App can't make a request");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("response received");
    if (response?.data?.token) {
      // console.log(getStoredAuthToken());
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error?.response?.data?.authStatus === 403) {
      removeStoredAuthToken();
      window.location.assign("/login");
    }
    return error?.response.data;
    // return Promise.reject(error);
  }
);

export default api;
