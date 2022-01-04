import { instance } from "@utils/request";

// 这种简易版的没有返回值类型约束，药的化我可以给你加
export async function fetchBlog() {
  return instance({
    url: "blog",
    method: "GET",
  });
}
