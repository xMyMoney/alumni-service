// 路由表
import { RouteRecordRaw } from "vue-router";
import { constRoutes } from "./const-route";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "root",
    component: () => import("@views/Layout.vue"),
    redirect: "/home",
    children: [
        {
          path: "home",
          name: "Home",
          component: () => import("@views/layout/Home.vue"),
        },
      {
        path: "me",
        name: "Me",
        component: () => import("@views/layout/Me.vue"),
      },
      {
        path: "services",
        name: "Services",
        component: () => import("@views/layout/Services.vue"),
      },
      {
        path: "activity",
        name: "Activity",
        component: () => import("@views/layout/Services.vue"),
      }
    ],
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@views/notice/Notice.vue")
  },
  {
    path: '/news',
    name: 'News',
    component: () => import("@views/news/News.vue")
  },

  // 静态
  ...constRoutes,
];

export default routes;