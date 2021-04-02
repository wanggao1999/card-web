<template>
   <div class="back" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i><span>{{backnmae}}</span>
    </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      
    };
  },
  props:{
    backnmae:{
      type:String,
      default:''
    }
  },
  mounted() {
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.back{
    height: 74px;
    line-height: 74px;
    font-size: 20px;
    cursor: pointer;
    i{
      color:#01a0fa ;
      font-weight: 900;
    }
    span{
      color: white;
      padding-left: 35px;
      font-size: 16px;
      vertical-align: top;
    }
  }
</style>