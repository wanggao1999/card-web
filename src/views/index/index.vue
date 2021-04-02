<template>
  <div>
    <!-- navbar -->
    <Navbar />
    <!--会员列表-->
    <div class="user_adm" :class="{'open':isShow}">
      <router-view></router-view>
    </div>
    <!-- 地图 -->
    <aMap/>
    <!--车辆-->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Card from '@/components/card/index'
import aMap from '@/components/map/index'
import Navbar from '@/components/navbar/index'
export default {
  name: 'index',
  components: { Card, aMap,Navbar},
  data() {
    return {
      show:false
    };
  },
  watch:{
    $route(val){
    this.show =  val.name==='index'?false:true
    }
  },
  computed:{
    isShow(){
      const { name } = this.$route
      return name==='index'?false:true
    }
  },
  mounted() {
    document.documentElement.onmouseup= (e)=>{
      let userDom = document.querySelector('.user_adm')
      if(userDom && !userDom.contains(e.target) ){
        this.$router.replace({name:'index'}).catch(err=>{
          console.log(err )
        })
      }
    }
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.user_adm{
  position: fixed;
  top: 0;
  bottom: 0;
  right: -404px;
  width: 404px;
  background-color: rgb(52, 57, 63);
  z-index: 99;
  transition:all ease-in-out .4s;
  &.open{
    right: 0;
    -o-transition:all 0.3s ease-out;
    -webkit-transition:all 0.3s ease-out ;
    transition: all 0.3s ease-out;
  }
}
</style>