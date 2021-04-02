<template>
  <div>
    <div v-if="height!=='765px'" class="card-item">
      <!-- 头部 -->
      <div class="card_header">
        <div class="card_code">
          <img src="../../../assets/img/车标.png" alt="车标" />
          <span>Mustang 2019款</span>
        </div>
        <div>
          <span>新能源汽车 5座</span>
        </div>
      </div>
      <!-- body -->
      <div class="card_body" >
        <div class="card_info"  >
          <div class="info">
            <div>鄂 M66666</div>
            <ul>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <span class="distance">约 600KM</span>
          </div>
        </div>
        <div class="card_img">
          <img src="../../../assets/img/车.png" alt="车" />
        </div>
      </div>
      <!-- foother -->
      <footer>
        <div>
          <span>xxx 停车场</span>
        </div>
        <div>></div>
      </footer>
    </div>
    <div  class="card-item detail" v-else :style="{height:height}">
      <div class="card-header">
        <div class="card_code">
        小王停车场
        </div>
        <div>
          <i class="el-icon-close"></i>
        </div>
      </div>
      <div class="card_body">
        <div>
          <div  class="card_code">
            <img src="../../../assets/img/车标.png" alt="车标" />
            <span>Mustang 2019款</span>
          </div>
          <div class="card_zw">
            <span>新能源汽车 5座</span>
          </div>
        </div>
          <div class="card_img">
            <img src="../../../assets/img/车.png" alt="车" />
          </div>
          <div class="car_info">
            <div>浙A123456</div>
            <div><sub>约</sub> <span> 600 </span> <sub>KM</sub></div>
          </div>
          <!-- 剩余里程 -->
          <div class="card_progress">
            <el-progress :percentage="50"></el-progress>
          </div>
          <div class="card_pay">
            取车约支付12.0元停车费，实际补贴12.0元
          </div>
          <!-- 租车选择 -->
          <div class="card_list">
            <div>
              <div>日租车</div>
              <div>￥ 300/1 天</div>
            </div>
            <div>
              <div>3日租车</div>
              <div>￥ 499.00/3 天</div>
            </div>
            <div>
              <div>5日租车</div>
              <div>￥ 799.00/5 天</div>
            </div>
            <div>
              <div>小时租车</div>
              <div>￥ 99.00/1 小时</div>
            </div>
            <div>
              <div>参保《全面保障服务》用车更放心</div>
              <div>
                <el-checkbox v-model="checked"></el-checkbox>
                <el-checkbox v-model="checked"></el-checkbox>
              </div>
            </div>
          </div>
          <div class="card_btn">
            预约用车
          </div>
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
      checked:true
    };
  },
  props:{
    height:{
      type:String,
      default:'250px'
    }
  },
  mounted() {
    console.log(this.height )
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  position: absolute;
  bottom: 0;
  display: inline-block;
    width: 500px;
    border-radius: 15px;
    background-color: white;
     box-shadow: 0 0 2px 3px rgba(119, 122, 126, 0.1);
    .card_header {
      width: 100%;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #f4f4f4;
      display: flex;
      justify-content: space-between;
      > div:nth-child(1) {
        margin-left: 35px;
        font-size: 14px;
        color: #050505;
        img {
          margin-top: 20px;
          display: inline-block;
        }
        span {
          padding-left: 10px;
          vertical-align: top;
        }
      }
      > div:nth-child(2) {
        color: #cccdce;
        font-size: 14px;
        margin-right: 35px;
      }
    }

    .card_body {
      display: flex;
      height: 140px;
      border-bottom: 1px solid #f4f4f4;
      > div {
        flex: 1;
      }
      .card_info {
        .info {
          padding-top: 60px;
          padding-left: 35px;
          > div:nth-child(1) {
            margin-bottom: 5px;
          }
        }
        ul {
          display: inline-block;
        }
        ul > li {
          width: 7px;
          height: 24px;
          background-color: #e1e1e1;
          display: inline-block;
          margin: 0 1px;
          border-radius: 15px;
          &.active {
            background-color: #0d95e5;
          }
        }
        .distance {
          padding-left: 10px;
          vertical-align: middle;
        }
      }
      .card_img {
        margin-top: 30px;
      }
    }

    footer {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      height: 45px;
      line-height: 45px;
      > div:nth-child(1) {
        padding-left: 35px;
      }
      > div:nth-child(2) {
        padding-right: 25px;
        color: #e6e7e7;
      }
    }
  }
.detail{
  .card-header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
     border-bottom: 1px solid #f4f4f4;
    >div:nth-child(1){
      margin-left: 35px;
    }
    >div:nth-child(2){
      margin-right: 25px;
      color: #9c9ea1;
      i{
        font-size: 28px;
        color: #9c9ea1;
      }
    }
  }
  .card_body{
    display: block;
    >div:nth-child(1){
      width: 100%;
       display: flex;
       justify-content: space-between;
      .card_code{
      display: inline-block;
      line-height: 45px;
      padding-left: 35px;
      color: #777a7e;
      img{
        margin-top: 13px;
        display: inline-block;
      }
      span{
        vertical-align: top;
        padding-left: 15px;
      }
    }
    .card_zw{
      line-height: 45px;
      display: inline-block;
      text-align: right;
      padding-right: 35px;
      color: #d7d8d9 ;
    }
    }
    .card_img{
      display: block;
      width: 370px;
      height: 140px;
      margin: 0 auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .car_info{
      width: 100%;
      display: flex;
      justify-content: space-between;
      >div:nth-child(1){
        margin-left: 35px;
        margin-top: 15px;
      }
      >div:nth-child(2){
        margin-right: 35px;
        margin-top: 15px;
        span{
          font-weight: 700;
        }
      }
    }
    .card_progress{
      padding: 10px;
      width: 90%;
      margin: 20px auto;
      border-radius: 20px;
      box-shadow: 0 0 2px 2px rgba(119, 122, 126, 0.1);
    }
    .card_pay{
      text-align: center;
      padding: 15px 0;
      margin:0 auto;
      color: #c2c3c4;
    }
    .card_list{
      width: 90%;
      margin: 0 auto;
      >div{
        width: 100%;
        height: 45px;
        border-radius: 10px;
        margin: 15px 0;
        background-color: #f3f3f3;
        display: flex;
        justify-content: space-between;
        line-height: 45px;
        >div:nth-of-type(1){
          padding: 0 15px;
          flex: 5;
        }
        >div:nth-of-type(2){
          flex: 2;
          padding-right:10px;
          text-align: right;
        }
      }
      >div:nth-last-of-type(1){
        background-color: white;
      }
      >div:nth-of-type(1){
        border: 1px solid #5fbdf4;
      }
    }
    .card_btn{
      width: 200px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: #3a3f45;
      border-radius: 50px;
      color: white;
      position: absolute;
      left: 50%;
      bottom: 15px;
      transform: translateX(-50%);
      z-index: 299;
    }
  }
}
</style>