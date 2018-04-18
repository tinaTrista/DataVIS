<template>
<div ref='img'>
  <img :src="src" style="width:60px;height:40px;" @mousedown="drag($event)" />
</div>
</template>

<script>
export default {
  name: 'thumbNail',
  components: {},
  props: {
    src: String
  },
  data() {
    return {}
  },
  methods: {
    drag(ev) {
      var that = this;
      var oevent = ev || window.event
      var mainObject = document.getElementById('middle-part')
      var dropX = mainObject.offsetLeft
      var dropY = mainObject.offsetTop

      // 获取事件对象
      var handleObject = this.$refs.img.cloneNode(true);
      // 当前鼠标的位置 - 当前元素的位置
      // 计算当前鼠标和元素之间位置的偏移量，让移动后的元素以鼠标按下时的位置为坐标。（默认以元素左上点为坐标）
      　　　
      var distanceX = oevent.clientX - handleObject.offsetLeft　　
      var distanceY = oevent.clientY - handleObject.offsetTop

      // 设置移动过程中的样式, 并添加到文档对象中
      handleObject.style.cursor = 'move'
      handleObject.style.background = '#ccc'
      handleObject.style.width = '200px'
      handleObject.style.height = '150px'
      handleObject.style.position = 'absolute'
      handleObject.style.left = oevent.clientX
      handleObject.style.top = oevent.clientY
      handleObject.childNodes[0].style.height = '100%'
      handleObject.childNodes[0].style.width = '100%'
      document.getElementById('app').appendChild(handleObject)


      // 绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
      　　　
      document.onmousemove = function(ev) {　　　　　
        var oevent = ev || window.event
        // 计算元素的位置    　　　　　　
        handleObject.style.left = oevent.clientX + 'px'　　　
        handleObject.style.top = oevent.clientY + 'px'
        return false
      };
      //当鼠标按键弹起时，解除元素移动，让元素停留在当前位置
      　　　　
      document.onmouseup = function(ev) {
        console.log(ev)　
        var event = ev || window.event　　　　　
        document.onmousemove = null;　　　　　　
        document.onmouseup = null;
        let length = that.$store.state.chartList.length
        // 生成图表
        let _chart = {};
        _chart.id = "chart" + length // 生成ID
        // 保存位置信息
        _chart.left = event.clientX
        _chart.top = event.clientY
        _chart.width = '250px'
        _chart.height = '200px'
        _chart.position = 'absolute'
        that.$store.commit('pushArray', _chart)
        if (handleObject) {
          document.getElementById('app').removeChild(handleObject)
        }
        this.releaseCapture && this.releaseCapture();
      };
    }
  }
}
</script>

<style scoped>
</style>
