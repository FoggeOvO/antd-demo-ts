// request.js

import axios from "axios";

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "post",
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
