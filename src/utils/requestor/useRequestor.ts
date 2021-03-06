import { ContentType, RequestInterfaceAddress } from "./useAxiosEnums";
import { AxiosTransform } from "./useAxiosTransform";
import { getToken } from "../auth";
import { CustomAxios } from "./useAxios";
import {useRouter} from "vue-router";
import {Toast} from "vant";
const router = useRouter()
const transform: AxiosTransform = {
  // 请求成功后数据处理
  requestSuccessHandler(response, options) {
    const { isTransformRequestResult } = options;

    const { data } = response;
    const { code, msg } = data;
    if (code === 403) {
      Toast.fail(msg)
      setTimeout( ()=>{
         // router.push('/login')
        location.href='/login'
      },500)
    }
    if (code == 500) {
      // 出错操作
      Toast.fail('系统忙')
    }

    // 不进行任何处理 -
    if (!isTransformRequestResult) return data;
  },

  //   请求拦截器
  //   设置token
  requestInerceptor(config) {
    const AccessToken = getToken();
    if (!AccessToken) {
      // 没有token的处理
    } else {
      config.headers!.Authorization = AccessToken;
    }
    return config;
  },

  //   响应错误拦截器
  responseInterceptorErrorHandler(error: Error) {
    return Promise.reject(error);
  },
};

function createAxios(baseURL: RequestInterfaceAddress) {
  return new CustomAxios({
    timeout: 10 * 1000,
    headers: { "Content-Type": ContentType.JSON },
    baseURL,
    transform,
    requestOptions: {
      isFormaDate: true,
      isJoinPrefix: false,
      errorMessageMode: "message",
      isJoinParamsToUrl: false,
      isTransformRequestResult: false,
    },
  });
}

export const useRequestor = createAxios(RequestInterfaceAddress.ALUMNI);
