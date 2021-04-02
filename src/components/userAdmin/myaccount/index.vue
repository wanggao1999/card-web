<template>
  <div class="account">
   <Back backnmae="基本信息"/>
    <div class="account_info">
      <!-- 会员卡片 -->
      <div class="account_img">
        <img src="../../../assets/img/会员中心 - 帐户信息.png" alt="账户信息">
          <div class="account_hy">
            <i class="el-icon-trophy"></i>
            <span> <b>LV.2 </b> 会员</span>
          </div>
          <p>个性先锋</p>
      <p>会员有效期至 2020/07/10</p>
      <i class="iconfont icon-wenhao"></i>
      </div>
      <!-- 余额 -->
      <div class="account_balance">
        <p><span>当前余额</span> <i class="iconfont icon-wenhao"></i></p>
        <div>
          <div><sub>￥ </sub><span>2000.00</span></div>
          <div @click="$router.push({name:'Recharge'})">去充值</div>
        </div>
      </div>
      <!-- 里程 -->
      <div class="account_milage">
        <p>我的里程</p>
        <p>30000 <span>公里</span></p>
      </div>
      <!-- 违章信息 -->
      <div class="account_Violation">
        <p>违章信息</p>
        <div>
          <div>代处理违章</div>
          <div>10 <i class="el-icon-arrow-right"></i></div>
        </div>
        <div>
          <div>违章预存金</div>
          <div>￥ 200 <i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <!-- 发票 -->
      <div class="account_invoice ">
         <p>发票</p>
        <div>
          <div>可开发票总额</div>
          <div>￥ 200 <i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
    </div>
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
  .account{
    width: 90%;
    margin: 0 auto;
    height: 100%;
    position: relative;
  .account_info{
    .account_img{
      width: 370px;
      height: 210px;
      margin: 0 auto;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius:15px;
      }
      >p:nth-of-type(1){
      color: #d3c246;
      font-size: 35px;
      position: absolute;
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      left: 20px;
      top: 100px;
    }
    >p:nth-of-type(2){
      position: absolute;
      color: white;
      left: 25px;
      bottom:20px;
      font-size: 13px;
    }
    >.icon-wenhao{
      position: absolute;
      right: 10px;
      top: 20px;
      color: white;
      border: 1px solid white;
      padding: 3px;
      border-radius: 50%;
    }
    }
    // 会员卡
    .account_hy{
      width: 120px;
      height: 40px;
      border:1px solid #f7e742 ;
      border-radius: 100px;
      line-height: 40px;
      position: absolute;
      left: 20px;
      top: 20px;
      i{
        padding: 13px;
        background-color: #f7e742;
        border-radius: 50%;
        color: white;
        font-size: 15px;
      }
      span{
        padding-left: 5px;
        font-size: 15px;
        color:white;
      }
    }
    // 当期余额
    .account_balance{
      margin-top: 45px;
      height: 40px;
      line-height: 40px;
      >p{
        color:#a9abad;
        height: 50px;
        line-height: 50px;
        >span{
          padding-right: 15px;
        }
        >i{
          font-size: 5px;
          border: 1px solid #a9abad;
          padding: 1px;
          border-radius: 50%;
        }
      }
      >div:nth-of-type(1){
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid rgba(60, 60, 70, 1) ;
         padding-bottom: 15px;
      >div{
         >sub{
          color: white;
          font-weight: 700;
        }
        >span{
          color: white;
          font-weight: 700;
          font-size: 20px;
          vertical-align: middle;
        }
      }
      >div:nth-of-type(2){
        width: 115px;
        text-align: center;
        border: 1px solid #1180bf;
        color: #1180bf;
        border-radius: 100px;
        cursor: pointer;
      }
      }
    }
    // 里程
    .account_milage{
      margin-top: 100px;
      >p{
        line-height: 45px;
        height: 45px;
        color:#a9abad;
      }
      >p:nth-of-type(2){
        font-size: 18px;
        color: white;
        font-weight: 700;
       border-bottom: 2px solid rgba(60, 60, 70, 1) ;
      }
    }
    // 违章信息
    .account_Violation{
      margin-top: 45px;
     border-bottom: 2px solid rgba(60, 60, 70, 1) ;
      >p{
        color:#a9abad;
        margin-bottom: 40px;
      }
      >div{
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        >div{
          color:white;
          >i{
            color: #a9abad;
            padding-left: 10px;
          }
        }
      }
    }
    // 发票
    .account_invoice{
       margin-top: 45px;
     border-bottom: 2px solid rgba(60, 60, 70, 1) ;
       >p{
        color:#a9abad;
        margin-bottom: 40px;
      }
      >div{
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: space-between;
        >div{
          color:white;
          >i{
            color: #a9abad;
            padding-left: 10px;
          }
        }
      }
    }
  }
  }
</style>