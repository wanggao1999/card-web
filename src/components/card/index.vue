<template>
  <div class="cards">
     <el-carousel  indicator-position="none" ref="carousel" type="card" :autoplay="false"  height="800px">
        <el-carousel-item >
          <cardList height="765px"/>
        </el-carousel-item>
        <el-carousel-item >
          <cardList/>
        </el-carousel-item>
        <el-carousel-item >
          <cardList/>
        </el-carousel-item>
        <el-carousel-item >
          <cardList/>
        </el-carousel-item >
        <el-carousel-item >
          <cardList/>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
import cardList from './cardlist/index'
export default {
  name: "card",
  components:{
    cardList
  },
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
.cards {
  width: 100%;
  position: fixed;
  z-index: 199;
  bottom: 50px;
}
</style>