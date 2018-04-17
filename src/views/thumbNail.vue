<template>
  <div ref='img'>
    <img :src="src" style="width:60px;height:40px;" @mousedown="drag($event)"/>
  </div>
</template>

<script>
export default {
  name: 'thumbNail',
  components:{
  },
  props: {
    src:String
  },
  data() {
    return {
    }
  },
  methods: {
    drag(ev) {
      var that = this;
      var oevent = ev || window.event
      // 获取事件对象
      var handleObject = this.$refs.img.cloneNode(true);
      // 当前鼠标的位置 - 当前元素的位置
      // 计算当前鼠标和元素之间位置的偏移量，让移动后的元素以鼠标按下时的位置为坐标。（默认以元素左上点为坐标）
      　　　
      var distanceX = oevent.clientX - handleObject.offsetLeft　　
      var distanceY = oevent.clientY - handleObject.offsetTop

      // 绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
      　　　
      document.onmousemove = function(ev) {　　　　　　
        var oevent = ev || window.event
        // 计算元素的位置
        console.log(event.clientX, oevent.clientY)     　　　　　　
        handleObject.style.left = oevent.clientX +'px'　　　
        handleObject.style.top = oevent.clientY+'px'
        return false // ?
      };
      //当鼠标按键弹起时，解除元素移动，让元素停留在当前位置
      　　　　
      document.onmouseup = function() {　　　　　　
        document.onmousemove = null;　　　　　　
        document.onmouseup = null;
        let length = that.$store.state.chartList.length
        let chart = {};
        // 生成ID
        chart.id = "chart"+length
        // 保存位置信息
        chart.left = handleObject.style.left
        chart.top = handleObject.style.top
        chart.width = '300px'
        chart.height= '210px'
        that.$store.commit('pushArray',chart)
        console.log(that.$store.state.chartList)
        this.releaseCapture && this.releaseCapture();
      };
    }
  }
}
</script>

<style scoped>
</style>
