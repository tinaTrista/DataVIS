<template>
<div ref='mainCanvas'>
  <div class='top-part'>
    <p>datavis</p>
  </div>
  <div class='mainPanel'>
    <div class="left-part">
    </div>
    <div class="right-part">
    </div>
    <div class="middle-part">
    </div>
  </div>
  <div class='bottom-part'>
  </div>

</div>
</template>

<script>
export default {
  name: 'datavis',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-part {
  height: 60px;
  width: 100%;
  background-color: aliceblue
}

.top-part p {
  font-size: 30px;
  line-height: 60px;
}

.left-part {
  position: absolute;
  left: 0px;
  width: 200px;
  height: calc(100% - 60px);
  background-color: antiquewhite
}

.middle-part {
  position: absolute;
  left: 200px;
  right: 200px;
  height: calc(100% - 100px);
  background-color: #2f2f2d;
}

.right-part {
  position: absolute;
  right: 0px;
  width: 200px;
  height: calc(100% - 60px);
  background-color: antiquewhite
}

.mainPanel {
  /*height: calc(100vh - 70px);*/
  height: calc(100% - 60px);
}

.bottom-part {
  position: fixed;
  bottom: 0;
  left: 205px;
  height: 30px;
  right: 205px;
  border: 1px solid #eee;
}
</style>
