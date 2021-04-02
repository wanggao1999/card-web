<template>
  <div class="userInfo">
    <div class="user-header">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <div class="user_detail">
          <p>1234567890@qq.com</p>
          <div>文明驾驶 <span>0</span></div>
        </div>
    </div>
    <div class="user_list">
          <router-link tag="div" to="/myaccount">
            <div>
              <span class="iconfont icon-qian"></span> <span>我的账户</span>
            </div>
            <div>
               <i class="el-icon-arrow-right"></i>
             </div>
          </router-link>
          <router-link tag="div" to="/cardOrder">
             <div>
               <span class="iconfont icon-fangxiangpan" ></span> <span>租车订单</span>
             </div>
             <div>
               <i class="el-icon-arrow-right"></i>
             </div>
          </router-link>
          <router-link tag="div" to="/carderAuth">
             <div>
               <span class="iconfont icon-shimingrenzheng"></span> <span>实名认证</span>
             </div>
             <div>
               <i class="el-icon-arrow-right"></i>
             </div>
          </router-link>
          <router-link tag="div" to="/cardSetting">
             <div><span class="iconfont icon-anquanshezhi"></span> <span>安全设置</span></div>
             <div>
               <i class="el-icon-arrow-right"></i>
             </div>
          </router-link>
          <router-link tag="div" to="/CardAbout">
             <div>
               <span class="iconfont icon-bangzhuzhongxin"></span> <span>帮助中心</span>
             </div>
             <div>
               <i class="el-icon-arrow-right"></i>
             </div>
          </router-link>
        </div>
        
      <!-- 登出 -->
      <div class="logout">
        登出
      </div>
  </div>
</template>

<script>
export default {
  name: 'user',
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
.userInfo{
  width: 80%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  .user-header{
    padding-top: 85px;
    width: 100%;
    display: flex;
    height: 65px;
    .el-avatar{
      height: 65px;
      display: block;
     width: 65px;
      margin-right: 25px;
    }
    .user_detail{
      display: flex;
      flex-direction: column;
      text-decoration: 10px;
      p{
        height: 40px;
        line-height: 40px ;
        color: #696a6d;
      }
      div{
        background-color: #0c90df;
        height: 40px;
        line-height: 25px ;
        border-radius: 25px;
        text-align: center;
        color: white;
        span{
          font-weight: 800;
        }
      }
    }
  }
  .user_list{
    margin-top: 70px;
    >div{
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom:2px solid #363b41 ;
      cursor: pointer;
      >div:nth-of-type(1){
        >.iconfont{
        color: #137cb9;
        padding-right: 25px;
        font-size: 27px;
      }
      >span:nth-child(2){
        color: #53575c;
        vertical-align: top;
        font-size: 15px;
      }
      }
       >div:nth-of-type(2){
         i{
           color:#53575c;
         }
       }
    }
  }
  // 登出
  .logout{
    position: absolute;
    width: 120px;
    height: 50px;
    line-height: 50px;
    background-color: #2d3339;
    color:white;
    text-align: center;
    border-radius: 100px;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    &:hover{
      background-color: #0c90df;
      cursor: pointer;
    }
  }
}
</style>