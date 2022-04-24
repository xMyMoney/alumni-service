// 路由表
import { RouteRecordRaw } from "vue-router";
import { constRoutes } from "./const-route";

const routes: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   redirect:'/login'
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("@views/auth/Login.vue")
  },
  {
    path: "/register/:id?",
    name: "Register",
    component: () => import("@views/auth/Register.vue")
  },
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
        path: '/alumni',
        name: 'Alumni',
        component: () => import("@views/layout/Alumni.vue")
      },
      {
        path: "activity",
        name: "Activity",
        component: () => import("@views/layout/Activity.vue"),
      },
      {
        path: '/donation',
        name: 'Donation',
        component: () => import("@views/layout/Donation.vue"),
      },
    ],
  },
  {
    path: "/notice",
    name: "Notice",
    component: () => import("@views/notice/Notice.vue")
  },
  {
    path: '/myInfo',
    name: 'MyInfo',
    component: () => import("@views/info/MyInfo.vue")
  },
  {
    path: "/noticeDetail/:id?",
    name: "NoticeDetail",
    component: () => import("@views/notice/NoticeDetail.vue")
  },
  {
    path: '/news',
    name: 'News',
    component: () => import("@views/news/News.vue")
  },
  {
    path: '/newsDetail/:id?',
    name: 'NewsDetail',
    component: () => import("@views/news/NewsDetail.vue")
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
    path: '/activityDetail/:id?',
    name: 'ActivityDetail',
    component: () => import("@views/activity/ActivityDetail.vue")
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
    path: '/helpDetail',
    name: 'HelpDetail',
    component: () => import("@views/help/HelpDetail.vue")
  },
  {
    path: '/donation/apply',
    name: 'DonationApply',
    component: () => import("@views/donation/DonationApply.vue"),
  },
  {
    path: '/donation/detail/:id?',
    name: 'DonationDetail',
    component: () => import("@views/donation/DonationDetail.vue"),
  },
  {
    path: '/myDonation',
    name: 'MyDonation',
    component: () => import("@views/donation/MyDonation.vue"),
  },
  {
    path: '/backSchool/:id?',
    name: 'BackSchool',
    component: () => import("@views/service/BackSchool.vue"),
  },
  {
    path: '/degreeCertificate/:id?',
    name: 'DegreeCertificate',
    component: () => import("@views/service/DegreeCertificate.vue"),
  },
  {
    path: '/graduationCertificate/:id?',
    name: 'GraduationCertificate',
    component: () => import("@views/service/GraduationCertificate.vue"),
    meta: {

    }
  },
  {
    path: '/letter',
    name: 'Letter',
    component: () => import("@views/me/Letter.vue")
  },
  {
    path: '/applyCard',
    name: 'ApplyCard',
    component: () => import("@views/me/ApplyCard.vue")
  },
  {
    path: '/alumniCard',
    name: 'AlumniCard',
    component: () => import("@views/me/AlumniCard.vue")
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import("@views/me/Info.vue")
  },
  {
    path: '/connect',
    name: 'Connect',
    component: () => import("@views/me/Connect.vue")
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("@views/me/About.vue")
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import("@views/me/Feedback.vue")
  },

  // 静态
  ...constRoutes,
];

export default routes;
