import VueAMap from 'vue-amap';
import Vue from 'vue'
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '7024fec5e9097f58d62db6511364777b',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  v: '1.4.4'
});