import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index/index";
import user from '@/components/user/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: index,
    children:[
      {path:'/user',name:"user",component:user},
      {path:'/CardAbout',name:"CardAbout",component:()=>import ('@/components/userAdmin/CardAbout/index')}, 
      {path:'/carderAuth',name:"carderAuth",component:()=>import ('@/components/userAdmin/carderAuth/index')}, 
      {path:'/cardOrder',name:"cardOrder",component:()=>import ('@/components/userAdmin/cardOrder/index')}, 
      {path:'/cardSetting',name:"cardSetting",component:()=>import ('@/components/userAdmin/cardSetting/index')}, 
      {path:'/myaccount',name:"myaccount",component:()=>import ('@/components/userAdmin/myaccount/index')}, 
      {path:'/Recharge',name:"Recharge",component:()=>import ('@/components/userAdmin/myaccount/account_cz/index')}, 
    ]
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
