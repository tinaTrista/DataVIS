<template>
  <div ref='drag' id='drag'
     :style="{
     'left':data.left,
     'top':data.top,
     'width':data.width,
     'height':data.height}" >
    <div @mousedown='drag($event)' style="width:100%;height:100%;">
      <chart :data='data'></chart>
    </div>
    <div class='leftBar' @mousedown="resize($event,'left')"></div>
    <div class='topBar' @mousedown="resize($event,'top')"></div>
    <div class='rightBar' @mousedown="resize($event,'right')"></div>
    <div class='bottomBar' @mousedown="resize($event,'bottom')"></div>
    <div class='leftTopBar' @mousedown="resize($event,'LT')"></div>
    <div class='leftBottomBar' @mousedown="resize($event,'LB')"></div>
    <div class='rightBottomBar' @mousedown="resize($event,'RB')"></div>
    <div class='rightTopBar' @mousedown="resize($event,'RT')"></div>
  </div>
</template>

<script>
import chart from '@/views/chart'
export default {
  name: 'dragChart',
  props: {
    data: Object
  },
  components:{
    "chart":chart
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    resize(ev, type) {
      var that = this;
      var e = ev || window.event
      var x = e.clientX;
      var y = e.clientY;
      var oBox = this.$refs.drag;
      var oBoxL = oBox.offsetLeft;
      var oBoxT = oBox.offsetTop;
      var oBoxW = oBox.offsetWidth;
      var oBoxH = oBox.offsetHeight;
      document.onmousemove = function(e) {
        e = e || event;
        var xx = e.clientX;
        var yy = e.clientY;
        if (type == 'left') {
          oBox.style.width = oBoxW + x - xx + 'px'
          oBox.style.left = xx - x + oBoxL + 'px';
        } else if (type == 'right') {
          oBox.style.width = oBoxW + xx - x + 'px'
        }
        if (type == 'top') {
          oBox.style.height = oBoxH + y - yy + 'px';
          oBox.style.top = yy - y + oBoxT + 'px';
        } else if (type == 'bottom') {
          oBox.style.height = oBoxH + yy - y + 'px';
        }
        if (type == 'LT') {
          oBox.style.width = oBoxW + x - xx + 'px'
          oBox.style.left = xx - x + oBoxL + 'px';
          oBox.style.height = oBoxH + y - yy + 'px';
          oBox.style.top = yy - y + oBoxT + 'px';
        }
        if (type == 'RT') {
          oBox.style.width = oBoxW + xx - x + 'px'
          oBox.style.height = oBoxH + y - yy + 'px'
          oBox.style.top = yy - y + oBoxT + 'px';
        }
        if (type == 'RB') {
          oBox.style.width = oBoxW + xx - x + 'px'
          oBox.style.height = oBoxH + yy - y + 'px';
        }
        if (type == 'LB') {
          oBox.style.width = oBoxW + x - xx + 'px'
          oBox.style.left = xx - x + oBoxL + 'px';
          oBox.style.height = oBoxH + yy - y + 'px';
        }
        return false;
      }
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
        that.chart.resize();
      }
      if (e.preventDefault) {
        e.preventDefault();
      }
    },


    // 移动元素位置
    drag(ev) {
      var oevent = ev || window.event
      // 获取事件对象
      var handleObject = this.$refs.drag
      // 当前鼠标的位置 - 当前元素的位置
      // 计算当前鼠标和元素之间位置的偏移量，让移动后的元素以鼠标按下时的位置为坐标。（默认以元素左上点为坐标）
      　　　
      var distanceX = oevent.clientX - handleObject.offsetLeft　　
      var distanceY = oevent.clientY - handleObject.offsetTop

      // 绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
      　　　
      document.onmousemove = function(ev) {　　　　　　
        var oevent = ev || window.event
        // 计算元素的位置
        　　　　　　
        handleObject.style.left = oevent.clientX - distanceX + 'px'　　　　　
        handleObject.style.top = oevent.clientY - distanceY + 'px'　　　
      };
      //当鼠标按键弹起时，解除元素移动，让元素停留在当前位置
      　　　　
      document.onmouseup = function() {　　　　　　
        document.onmousemove = null;　　　　　　
        document.onmouseup = null;　　　　
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#middle-part {
  position: absolute;
  left: 200px;
  right: 200px;
  height: calc(100% - 100px);
  background-color: #2f2f2d;
}
#drag {
  position: absolute;
  cursor: move;
  width:300px;
  height:200px;
}
#drag:hover {
  border:1px solid #999;
}

.leftBar,
.rightBar,
.topBar,
.bottomBar,
.leftTopBar,
.leftBottomBar,
.rightTopBar,
.rightBottomBar {
  position: absolute;
  /*background-color: aliceblue;*/
}

.leftBar,
.rightBar {
  top: 10%;
  width: 10px;
  height: 80%;
  cursor: ew-resize;
}

.topBar,
.bottomBar {
  width: 80%;
  left: 10%;
  height: 10px;
  cursor: ns-resize;
}

.leftTopBar,
.rightTopBar,
.leftBottomBar,
.rightBottomBar {
  width: 10px;
  height: 10px;
}

.leftBottomBar {
  bottom: 0px;
  left: 0px;
  cursor: nesw-resize;
}

.rightBottomBar {
  right: 0px;
  bottom: 0px;
  cursor: nwse-resize;
}

.leftTopBar {
  top: 0px;
  left: 0px;
  cursor: nwse-resize;
}

.rightTopBar {
  top: 0px;
  right: 0px;
  cursor: nesw-resize;
}

.topBar {
  top: 0px;
}

.bottomBar {
  bottom: 0px;
}

.rightBar {
  right: 0px;
}

.leftBar {
  left: 0px;
}
</style>
