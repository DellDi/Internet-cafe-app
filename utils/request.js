import axios from "axios";


// 创建请求实例
const service = axios.create({
  baseURL: process.env.APP_TEST_URL // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
});

// request interceptor
service.interceptors.request.use(
  config => {
  
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {

    if (
      response.status &&
      response.status === 200 &&
      response.data.code === 0
    ) {
      return response.data;
    } else {
      const res = response.data;
      if (res.code === 10008 || res.code === 10004) {
       
      } else if (res.code === 10017) {
        
      } else if (res.code === 10011) {
       
      } else if (res.code === 10012) {
     
      } else if (res.code === 50012 || res.code === 50014) {
        
      } else {
      
        // return Promise.reject(new Error(res.msg || "服务器异常"));
      }
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
