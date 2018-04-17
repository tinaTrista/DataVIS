<template>
<div id="left-part">
  <el-menu>
    <li v-for='item in menu'>
      <el-submenu :index='item.index'>
        <template slot="title">
         <i :class="item.class"></i>
         <span slot="title">{{item.title}}</span>
       </template>
        <el-menu-item-group v-if='item.sub.length > 0'>
          <el-menu-item v-for="c in item.sub" :index="c.index">
            <thumb-nail :src='c.src'></thumb-nail>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </li>
  </el-menu>
</div>
</template>

<script>
import {
  menu
} from "@/config"
import thumbNail from "@/views/thumbNail"
export default {
  name: 'leftPart',
  components:{
    'thumb-nail':thumbNail
  },
  data() {
    return {
      menu: menu
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#left-part {
  position: absolute;
  left: 0px;
  max-width: 200px;
  height: calc(100% - 60px);
  /*background-color: antiquewhite*/
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
