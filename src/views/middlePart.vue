<template>
<div id='middle-part'>
  <template v-for='item in chartList'>
    <drag-chart :data='item'></drag-chart>
  </template>

</div>
</template>

<script>
import dragChart from '@/views/dragChart'
export default {
  name: 'middlePart',
  components: {
    'drag-chart':dragChart
  },
  computed:{
    chartList(){
      return this.$store.state.chartList
    }
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
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
</style>
