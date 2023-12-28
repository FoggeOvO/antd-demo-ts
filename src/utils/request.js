import axios from "axios";


axios.defaults.baseURL = "http://172.20.10.2:9000";
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const token = localStorage.getItem('token')

export const get = (url,data) => {
  console.log(data)
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "get",
      params:data,
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


export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: "put",
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
