import type { Router } from "vue-router";
// import { pageLoading, isProgress } from "@AppService";

// // nprogress
// import NProgress from "nprogress";
// import "nprogress/css/nprogress.css";
// import { AxiosCanceler } from "@utils/requestor/useAxiosCanceler";

/**
@description路由拦截，可以照着我这写
 */
export function setupRouterGuard(router: Router) {
  // createPageLoadingGuard(router);
  // createPageProgressGuard(router);
  // createHttpGuard(router);
}

/**
 * @description 加载的Loading状态
 */
// function createPageLoadingGuard(router: Router) {
//   router.beforeEach(async () => {
//     pageLoading.value = true;
//   });

//   router.afterEach(async () => {
//     pageLoading.value = false;
//   });
// }

/**
 * @description 顶部加载条
 */
// function createPageProgressGuard(router: Router) {
//   router.beforeEach(async () => {
//     isProgress.value ? NProgress.start() : null;
//   });
//   router.afterEach(async () => {
//     isProgress.value ? NProgress.done() : null;
//   });
// }

/**
 * @description 在切换路由时移除所有还没响应的请求
 */
// function createHttpGuard(router: Router) {
//   const axiosCanceler: AxiosCanceler = new AxiosCanceler();
//   router.beforeEach(async () => {
//     axiosCanceler.clearRequest();
//   });
// }
