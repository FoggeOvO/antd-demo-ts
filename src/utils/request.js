import axios from "axios";


axios.defaults.baseURL = "http://172.20.10.6:9000";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const token = localStorage.getItem('token')

export const get = (url) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      headers: {
        token, // 添加 Authorization 头部
      },

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
      headers: {
        token, // 添加 Authorization 头部
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
