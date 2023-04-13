<template>
      <path :d="path" stroke="black" fill="transparent"/>
</template>

<script>
import {
  createComponent,
  reactive,
  toRefs,
  computed
} from '@vue/composition-api'
import DataPoint from './DataPoint.vue'

export default createComponent({
  props: {
    start: DataPoint,
    end: DataPoint,
    vueHotspotBackgroundImage: HTMLImageElement,
    vueHotspot: HTMLDivElement
  },
  computed: {
    intermediatePoints () {
      const length = this.endPosition.x - this.startPosition.x
      const height = this.endPosition.y - this.startPosition.y

      const deflectionSignX = this.endPosition.x > this.startPosition.x ? 1 : -1
      const deflectionSignY = this.endPosition.y > this.startPosition.y ? -1 : 1

      const points = []

      const partialLength = Math.round(length / this.getIndirectPoints())
      const partialHeight = Math.round(height / this.getIndirectPoints())

      for (let i = 1; i <= this.getIndirectPoints(); i++) {
        const deflection = (i !== 1 && i !== this.getIndirectPoints()) ? 40 : 0

        points.push({
          x: Math.round(this.startPosition.x + (partialLength * i + (deflection * deflectionSignX))),
          y: Math.round(this.startPosition.y + (partialHeight * i + (deflection * deflectionSignY)))
        })
      }

      // points.push({ x: Math.round(this.endPosition.x), y: Math.round(this.endPosition.y) })

      return points
    },
    path () {
      let path = 'M ' + Math.round(this.startPosition.x) + ' ' + Math.round(this.startPosition.y) + ' C '

      this.intermediatePoints.forEach((item, index) => {
        if (index > 0) {
          path += ', '
        }

        path += item.x + ' ' + item.y
      })

      return path
    },
    startPosition () {
      return this.getDataPointPosition(this.start)
    },
    endPosition () {
      return this.getDataPointPosition(this.end)
    }
  },
  methods: {
    getDataPointPosition (datapoint) {
      return {
        y: Number(datapoint.positionTop ? datapoint.positionTop.replace('px;', '') : 0),
        x: Number(datapoint.positionLeft ? datapoint.positionLeft.replace('px;', '') : 0)
      }
    }
  },
  setup (props, { emit }) {
    const conf = reactive({
      color: computed(() => props.config && props.config.hotspotColor),
      opacity: computed(() => props.config && props.config.opacity),
      indirectPoints: computed(() => props.config && props.config.indirectPoints ? props.config.indirectPoints : 3)
    })

    function getIndirectPoints () {
      return conf.indirectPoints
    }

    return {
      // data
      ...toRefs(conf),
      // methods
      getIndirectPoints
    }
  }
})
</script>

<style scoped>
</style>
