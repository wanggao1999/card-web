<template>
  <div :style="{width:'100%',height:'100vh'}">
      <el-amap vid="amapContainer"  :center="center">
      </el-amap>
      
  </div>
</template>

<script>
import VueAMap from 'vue-amap';
import  { lazyAMapApiLoaderInstance  } from 'vue-amap'
export default {
  name: 'index',
  data() {
    return {
      map:null,
      center:[116.305285, 39.904989],
      zoom:14
    };
  },
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
        // your code ...
        this.map = new AMap.Map('amapContainer', {
          center: this.center,
          zoom:this.zoom
        });
      });

  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>