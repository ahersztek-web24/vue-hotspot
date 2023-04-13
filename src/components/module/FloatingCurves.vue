<template>
  <div class="ui__vue_hotspot_curves_overlay">
    <div class="ui__vue_hotspot_curves_overlay--curves">
      <svg :height="vueHotspotBackgroundImage.clientHeight" :width="vueHotspotBackgroundImage.clientWidth">
        <BezierCurve
          v-for="(targetPoint, i) in targetDataPoints"
          :key="i"
          :start="mainDataPoint"
          :end="targetPoint"
          :vueHotspotBackgroundImage="vueHotspotBackgroundImage"
          :vueHotspot="vueHotspot"
        />
        <BezierCurve
          v-for="(targetPoint, i) in targetDataPoints"
          :key="i"
          :start="targetPoint"
          :end="mainDataPoint"
          :vueHotspotBackgroundImage="vueHotspotBackgroundImage"
          :vueHotspot="vueHotspot"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
import BezierCurve from './BezierCurve.vue'
export default createComponent({
  components: {
    BezierCurve
  },
  props: {
    vueHotspotBackgroundImage: HTMLImageElement,
    vueHotspot: HTMLDivElement,
    dataPoints: Array
  },
  computed: {
    mainDataPoint () {
      return this.dataPoints.find(item => item.isMain)
    },
    targetDataPoints () {
      return this.dataPoints.filter(item => !item.isMain)
    }
  }
  // setup (props, { emit }) {
  //
  //
  //   return {
  //
  //   }
  // }
})
</script>

<style scoped>
div.ui__vue_hotspot_curves_overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}

div.ui__vue_hotspot_curves_overlay--curves {
  position:relative;
  height: 100%;
  width: 100%;
}
</style>
