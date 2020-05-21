import axios from "@/js_sdk/gangdiedao-uni-axios";
const APP_BASE_URL = process.env.NODE_ENV === 'development' ? 'http://118.31.167.239:8080' : 'http://118.31.167.239:8080'


// 创建请求实例
const service = axios.create({
  baseURL: APP_BASE_URL // url = base url + request url
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
      
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
