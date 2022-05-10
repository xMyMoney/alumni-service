import type { Router } from "vue-router";
import {getToken} from "@utils/auth";
import {Toast} from "vant";
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
    createPermissionGuard(router)
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


/**
 * @description 在切换路由时判断权限
 */
function createPermissionGuard(router: Router) {
    router.beforeEach((to, from, next) => {
        if(Object.is(to.name,'Login')) {
            next();
            return
        }

        if (getToken()) {
            next()
        }else {
           if(to.meta.noAuth) {
               next()
           }else {
               Toast.fail('未登录')
               setTimeout(() => {
                   router.push({name: 'Login'})
               }, 500)
           }
        }
    })
}
