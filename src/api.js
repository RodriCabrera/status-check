import axios from "axios";

export const checkEndpoint = (endpoint) => {
  return axios.get(`https://api.factoryfour.com/${endpoint}/health/status`);
};
