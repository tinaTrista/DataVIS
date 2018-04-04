<template>
<div id='middle-part'>
  <div ref='drag' class='drag'>
    <div @mousedown='drag($event)' style="width:100%;height:100%;">
      <div id='bingtu' style="width:100%;height:100%;border:1px solid #999"></div>
    </div>
    <div class='leftBar'></div>
    <div class='topBar'></div>
    <div class='rightBar'></div>
    <div class='bottomBar'></div>
    <div class='leftTopBar'></div>
    <div class='leftBottomBar'></div>
    <div class='rightBottomBar'></div>
    <div class='rightTopBar'></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'middlePart',
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 移动元素位置
    drag(ev){
      var oevent = ev || window.event;
      // 获取事件对象
      var handleObject = this.$refs.drag;
      // 当前鼠标的位置 - 当前元素的位置
      // 计算当前鼠标和元素之间位置的偏移量，让移动后的元素以鼠标按下时的位置为坐标。（默认以元素左上点为坐标）
　　　 var distanceX = oevent.clientX - handleObject.offsetLeft;
　　　 var distanceY = oevent.clientY - handleObject.offsetTop;

      // 绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
　　　 document.onmousemove = function(ev){
　　　　　　var oevent = ev || window.event;
          // 计算元素的位置
　　　　　　handleObject.style.left = oevent.clientX - distanceX + 'px';
　　　　　　handleObject.style.top = oevent.clientY - distanceY + 'px';
　　　　};
       //当鼠标按键弹起时，解除元素移动，让元素停留在当前位置
　　　　document.onmouseup = function(){
　　　　　　document.onmousemove = null;
　　　　　　document.onmouseup = null;
　　　　};
    },
    init() {
      let option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {
              show: true
            },
            dataView: {
              show: true,
              readOnly: false
            },
            magicType: {
              show: true,
              type: ['pie', 'funnel'],
              option: {
                funnel: {
                  x: '25%',
                  width: '50%',
                  funnelAlign: 'left',
                  max: 1548
                }
              }
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        calculable: true,
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [{
              value: 335,
              name: '直接访问'
            },
            {
              value: 310,
              name: '邮件营销'
            },
            {
              value: 234,
              name: '联盟广告'
            },
            {
              value: 135,
              name: '视频广告'
            },
            {
              value: 1548,
              name: '搜索引擎'
            }
          ]
        }]
      };
      this.chart = $echarts.init(document.getElementById('bingtu'))
      this.chart.setOption(option)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drag {
  position:absolute;
  width: 300px;
  height: 210px;
  border-radius: 5px;
  margin: 20px;
  cursor: move;
  z-index: 2;
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
  background-color: aliceblue;
  opacity:0;
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
