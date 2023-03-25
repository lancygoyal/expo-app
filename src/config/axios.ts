import axios from "axios";
import { configure } from "axios-hooks";
import apiConstants from "../constants/apiConstants";

const client = axios.create(apiConstants.api);

configure({ axios });

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

export default client;
