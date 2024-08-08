import axios from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "../shared/utils/ls";

const baseurl = "/api";

const api = axios.create({
  baseURL: baseurl,
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
