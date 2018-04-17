<template>
<div ref='mainCanvas'>
  <top-part></top-part>
  <div class='mainPanel'>
    <left-part></left-part>
    <right-part></right-part>
    <middle-part></middle-part>
  </div>
  <div class='bottom-part'>
  </div>

</div>
</template>

<script>
import middlePart from './middlePart'
import topPart from './topPart'
import bottomPart from './bottomPart'
import leftPart from './leftPart'
import rightPart from './rightPart'

export default {
  name: 'datavis',
  components: {
    "middle-part" :middlePart,
    "top-part":topPart,
    "left-part":leftPart,
    "right-part":rightPart,
    "bottom-part": bottomPart
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPanel {
  height: calc(100% - 60px);
}
</style>
