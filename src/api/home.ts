import { instance } from "@utils/requestor";

// 这种简易版的没有返回值类型约束，药的化我可以给你加
export async function fetchBlog(id:number) {
  return instance({
    url: "blog/"+id,
    method: "GET",
  });
}
