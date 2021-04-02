<template>
    <!-- 用户操作 -->
      <div class="card_warp"> 
          <router-link to="/abc" tag="div" class="wenhao">
            <span class="iconfont icon-wenhao"></span>
          </router-link>
          <router-link to="/bdc" tag="div">
            <span class="iconfont icon-search"></span>
          </router-link>

          <router-link  to="/cards" tag="div" class="SelectVehicle">
            选择车辆
          </router-link>

          <router-link to="/abv" tag="div"> 
            <span class="iconfont  icon-mubiao"></span>
          </router-link>
          <router-link to="/user" tag="div">
            <span class="iconfont icon-Serviceusers"></span>
          </router-link>
        </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.card_warp{
  width: 650px;
  height: 50px;
  display: flex;
  position: fixed;
  left: 50%;
  bottom: 50px;
  z-index: 88;
  line-height: 50px;
  transform: translateX(-50%);
  .SelectVehicle{
    width: 200px;
    height: 50px;
    text-align: center;
    font-size: 17px;
    border-radius: 30px;
    background-color: rgb(58, 64, 69);
    color: white;
    margin: 0 30px;
    
  }
  .iconfont{
    padding: 20px;
    border-radius:50% ;
    color: white;
    font-size: 15px;
    background-color: rgb(52, 57, 63);
    margin: 0 20px ;
  }
  .router-link-active{
   span{
   color: #009af1 !important;
  }
}
}
</style>