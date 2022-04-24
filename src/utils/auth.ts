// import { UserAllInfo, UserConfig } from "./constant";
import { useRequestor } from "./requestor/useRequestor";

export function getToken(){
  return localStorage.getItem('token') || "";
}

export function setToken(value: string): void {
  localStorage.setItem('token', value);
}

export function removeToken(): void {
  localStorage.removeItem('token');
}

// export async function checkUser() {
//   return useRequestor.requestor<HttpResponse<UserAllInfo>>({
//     url: "account/check-user",
//     // token在请求拦截器以及加了
//   });
// }

// /**
//   @description 默认取状态1的
//  */
// export async function fetchUserConfig(userId: number) {
//   return useRequestor.requestor<HttpResponse<UserConfig[]>>({
//     url: "user-config",
//     params: { userConfigUserId: userId, active: 1 },
//     method: "GET",
//   });
// }
//
// export async function hasAuth() {
//   // 从local Storage取token
//   const token = getStorage("token");
//
//   const data = (await checkUser()).data;
//
//   return data != null;
// }
