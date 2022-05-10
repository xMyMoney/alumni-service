import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {head} from "lodash";
import {getToken} from "@utils/auth";



// 简易版，没有返回值类型约束
const instance = axios.create({
    // 基本路径
    baseURL: "http://localhost:8080",

    // 超过多少毫秒，请求失败
    timeout: 5000,

    //   ...其他要配自己找api
});


// 通用的请求函数


// 请求拦截
instance.interceptors.request.use(
    (config) => {
        // 如果有些接口需要认证才访问，就在这统一设
        config.headers.Authorization = getToken()
        return config;
    },
    (err: any) => {}
);

// 响应拦截
instance.interceptors.response.use(
    (res) => {
        //   这里弄返回值拦截，不做的化会出现 response.data.data....
        // return res.data
        return res.data;
    },
    (err: any) => {}
);

export { instance };
