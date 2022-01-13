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
        component: () => import("@views/layout/Activity.vue"),
      },
      {
        path: "help",
        name: "Help",
        component: () => import("@views/layout/Help.vue")
      }
    ],
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@views/notice/Notice.vue")
  },
  {
    path: "/noticeDetail",
    name: "NoticeDetail",
    component: () => import("@views/notice/NoticeDetail.vue")
  },
  {
    path: '/news',
    name: 'News',
    component: () => import("@views/news/News.vue")
  },
  {
    path: '/createActivity',
    name: 'CreateActivity',
    component: () => import("@views/activity/CreateActivity.vue")
  },
  {
    path: '/myActivity',
    name: 'MyActivity',
    component: () => import("@views/activity/MyActivity.vue")
  },
  {
    path: '/createHelp',
    name: 'CreateHelp',
    component: () => import("@views/help/CreateHelp.vue")
  },
  {
    path: '/myHelp',
    name: '/MyHelp',
    component: () => import("@views/help/MyHelp.vue")
  },
  {
    path: '/alumni',
    name: '/Alumni',
    component: () => import("@views/alumni/Alumni.vue")
  },
  {
    path: '/donation',
    name: '/Donation',
    component: () => import("@views/donation/Donation.vue"),
  },
  {
    path: '/donation/detail',
    name: '/DonationDetail',
    component: () => import("@views/donation/DonationDetail.vue"),
  },
  {
    path: '/myDonation',
    name: '/MyDonation',
    component: () => import("@views/donation/MyDonation.vue"),
  },

  // 静态
  ...constRoutes,
];

export default routes;
