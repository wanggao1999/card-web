<template>
  <div class="anquan_setting">
    <Back backnmae="安全设置"/>
    <div class="setting_list">
      <div>
        <div>修改登录密码</div>
        <div><i class="el-icon-arrow-right"></i></div>
      </div>
      <div>
        <div>设置资金密码</div>
        <div><i class="el-icon-arrow-right"></i></div>
      </div>
      <div>
        <div>绑定手机号</div>
        <div><i class="el-icon-arrow-right"></i></div>
      </div>
      <div>
        <div>绑定银行号</div>
        <div><i class="el-icon-arrow-right"></i></div>
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
.anquan_setting{
  width: 90%;
  margin: 0 auto;
}
.setting_list{
  margin-top: 80px;
  >div{
    display: flex;
    justify-content: space-between;
    height: 55px;
    line-height: 55px;
    border-bottom: 2px solid rgba(60, 60, 70, 1) ;
    cursor: pointer;
    >div:nth-of-type(1){
      color:#a9abad;
      padding-left: 10px;
    }
    >div:nth-of-type(2){
      i{
        color: #f4f4f4;
        
      }
    }
  }
}
</style>