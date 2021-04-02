<template>
  <div class="account_account_cz">
    <Back backnmae="充值" />
    <div class="btn_cz">确认充值</div>
    <!-- 金额选择 -->
    <div class="select_money">
      <div class="money">
        <div>100</div>
        <div>200</div>
        <div>400</div>
        <div>600</div>
        <div>1000</div>
        <div>2000</div>
      </div>
     <div>
       <input type="text" placeholder="请输入充值金额">
     </div>
    </div>
    <!-- 支付类型 -->
    <div class="pay_type">
      <p>支付类型</p>
      <div>
        <div>微信</div>
        <div><el-checkbox v-model="checkedWx"></el-checkbox></div>
      </div>
      <div>
        <div>支付宝</div>
        <div><el-checkbox v-model="checkedZFB"></el-checkbox></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      checkedWx:'',
      checkedZFB:''
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.account_account_cz{
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  .btn_cz{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 50px;
    border-radius: 30px;
    color: white;
    background-color: #00a3ff;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .select_money{
    margin-top: 50px;
    >.money{
      width: 100%;
      height:110px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      >div{
        width: 25%;
        height: 50px;
        text-align: center;
        border:1px solid #f4f4f4;
        line-height: 50px;
        margin: 5px 0;
        border-radius: 15px;
        color: white;
        cursor:pointer;
        &:hover{
          background-color: #00a3ff;
        }
      }
    }
    >div:nth-of-type(2){
      width: 100%;
      height: 45px;
      line-height: 45px;
      margin-top: 40px;
      >input{
        width: 100%;
        height: 100%;
        text-indent: 120px;
         background-color: #202429;
         border: none;
         outline: none;
         color: white;
      }
    }
  }
  .pay_type{
    margin-top: 45px;
    p{
      color: #a9abad;
    }
    >div{
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      color: #f4f4f4;
    }
  }
}
</style>