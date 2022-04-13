import type { AxiosRequestConfig } from "axios";

import type { AxiosTransform } from "./useAxiosTransform";

import type {
  ErrorMessageMode,
  HTTPResponseType,
  FileType,
} from "./useAxiosTypes";
export interface RequestOptions {
  //接口地址
  apiUrl?: string;
  // 是否添加俩前缀
  isJoinPrefix?: boolean;
  // 是否格式化日期
  isFormaDate?: boolean;
  // 错误消息提示类型
  errorMessageMode?: ErrorMessageMode;
  // 是否将参数拼接到url
  isJoinParamsToUrl?: boolean;
  // 是否处理请求结果
  isTransformRequestResult?: boolean;
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  prefixUrl?: string;
  transform?: AxiosTransform;
  requestOptions?: RequestOptions;
}

export interface HttpResponseResult<T = any> {
  // 响应消息
  msg: string;
  // 响应状态码
  code: number;
  // 响应类型
  type: HTTPResponseType;
  //   响应结果
  result: T;
}

export interface UploadFileParams {
  /**
   * @description 额外的参数
   */
  data?: { [key: string]: any };

  /**
   * @description 文件
   */
  file: FileType;

  /**
   * @todo 暂时不知道干啥用
   * @description 文件参数的接口字段名
   */
  name?: string;

  /**
   * @description 文件名
   */
  filename?: string;

  [key: string]: any;
}
