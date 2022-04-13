// import { UserAllInfo, UserConfig } from "./constant";
import { useRequestor } from "./requestor/useRequestor";

export function getStorage(key: string): string {
  return localStorage.getItem(key) || "";
}

export function setStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export function removeStorage(key: string): void {
  localStorage.removeItem(key);
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
