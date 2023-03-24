import axios from "axios";
import apiConstants from "./apiConstants";

const client = axios.create(apiConstants.api);

// Request interceptor
client.interceptors.request.use(
  (request) => request,
  (error) => {
    throw new Error(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(error);
  }
);

const commonService = {
  getReq(params) {
    return client.request({
      method: "get",
      url: "/",
      params,
    });
  },

  postReq(data) {
    return client.request({
      method: "post",
      url: "/",
      data,
    });
  },
};

export { commonService };
