import { createRouter, createWebHistory } from 'vue-router'

// import {VueRouter} from 'vue-router'
import UserMainPage from "@/views/user/mainPage/index.vue";

import UserFunctionPage from "@/views/user/functionPage/index.vue";
import UserRecentPage from "@/views/user/functionPage/recentPage/index.vue";
import UserBlackWhitePage from "@/views/user/functionPage/blackWhitePage/index.vue";
import UserMyAnalysisPage from "@/views/user/functionPage/myAnalysisPage/index.vue";
import UserMemberPage from "@/views/user/functionPage/memberPage/index.vue";
import UserTemplatePage from "@/views/user/functionPage/templatePage/index.vue";

import UserUploadPage from "@/views/user/functionPage/uploadPage/index.vue";
import fileComponents from "@/views/user/functionPage/uploadPage/components/uploadFile.vue";
import URLComponents from "@/views/user/functionPage/uploadPage/components/uploadURL.vue";
import SearchComponents from "@/views/user/functionPage/uploadPage/components/uploadSearch.vue";

import UserResultPage from "@/views/user/resultPage/index.vue";
import Application from "@/views/user/resultPage/components/appPermission.vue";
import Certificate from "@/views/user/resultPage/components/certificate.vue";
import Foundation from "@/views/user/resultPage/components/foundations.vue";
import ListOfFiles from "@/views/user/resultPage/components/listOfFiles.vue";
import Security from "@/views/user/resultPage/components/security.vue";
import Subassembly from "@/views/user/resultPage/components/subassembly.vue";
import ThirdParty from "@/views/user/resultPage/components/thirdParty.vue";
import Traceability from "@/views/user/resultPage/components/traceability.vue";
import Unsullied from "@/views/user/resultPage/components/unsullied.vue";

import LoginPage from "@/views/login/login.vue";

import UserFileDetail from "@/views/user/resultPage/components/filePage/index.vue";

import UserIntroducePage from "@/views/user/introducePage/index.vue";

import UserSearchPage from "@/views/user/searchPage/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'userMainPage',
      component: UserMainPage,
      redirect: "/userMainPage",
      children:[
        {path:'userMainPage',component:UserMainPage},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/userFunctionPage',
      name: 'userFunctionPage',
      component: UserFunctionPage,
      redirect: "/userRecentPage",
      children:[
        {path: '/userRecentPage',component: UserRecentPage},
        {
          path: '/userUploadPage',
          name: 'userUploadPage',
          component: UserUploadPage,
          redirect: "/userUploadPage/file",
          children:[
            {path:'file',component:fileComponents},
            {path:'URL',component:URLComponents},
            {path:'search',component:SearchComponents},
          ]
        },
        {path: '/userBlackWhitePage',component: UserBlackWhitePage},
        {
          path: '/userMyAnalysisPage',
          component: UserMyAnalysisPage,
          props: true
        },
        {path: '/userMemberPage',component: UserMemberPage},
        {path: '/userTemplatePage',component: UserTemplatePage},
      ]
    },
    {
      path: '/userResultPage',
      name: 'userResultPage',
      component: UserResultPage,
      redirect: "/userResultPage/foundation",
      children:[
        {path:'application',component:Application},
        {path:'certificate',component:Certificate},
        {path:'foundation',component:Foundation},
        {path:'listOfFiles',component:ListOfFiles},
        {path:'security',component:Security},
        {path:'subassembly',component:Subassembly},
        {path:'thirdParty',component:ThirdParty},
        {path:'traceability',component:Traceability},
        {path:'unsullied',component:Unsullied},
        {path:'dynamic/foundation',component:() => import('@/views/user/resultPage/component2/foundation.vue')},
        {path:'dynamic/TLS',component:() => import('@/views/user/resultPage/component2/TLS.vue')},
        {path:'dynamic/run',component:() => import('@/views/user/resultPage/component2/run.vue')},
        {path:'dynamic/address',component:() => import('@/views/user/resultPage/component2/address.vue')},
        {path:'dynamic/screenshot',component:() => import('@/views/user/resultPage/component2/screenshot.vue')},
      ]
    },
    {
      path: '/userFileDetail/:md5',
      name: 'userFileDetail',
      component: UserFileDetail
    },
    {
      path: '/userJavaDetail/:md5',
      name: 'userJavaDetail',
      component: () => import('@/views/user/resultPage/components/javaPage/index.vue'),
    },
    {
      path: '/userIntroducePage',
      name: 'userIntroducePage',
      component: UserIntroducePage
    },
    {
      path: `/userSearchPage/:searchValue`,
      name: 'userSearchPage',
      component: UserSearchPage
    },
    {
      path: '/adminManagePage',
      name: 'adminManagePage',
      component: () => import('@/views/manage/index.vue'),
      redirect: "/adminManagePage/userManage",
      children:[
        {path:'analysisManage',component:() => import('@/views/manage/components/analysisManage.vue')},
        {path:'userManage',component:() => import('@/views/manage/components/userManage.vue')},
        {path:'templateView',component:() => import('@/views/manage/components/template/templateView.vue')},
        {path:'blackWhite',component:() => import('@/views/manage/components/blackWhite.vue')},
      ]
    },
    // {
    //   path: '/UserUploadPage',
    //   name: 'userUploadPage',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/user/uploadPage/index.vue')//延时加载
    // }
  ]
})
// const router =  new VueRouter({
//   mode: 'hash',
//   routes: routes
// })

export default router
