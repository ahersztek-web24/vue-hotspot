<template>
      <path :d="path" :class="extraClass + ' path'" stroke="black" fill="transparent"/>
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
    vueHotspot: HTMLDivElement,
    extraClass: String
  },
  computed: {
    intermediatePoints () {
      const length = this.endPosition.x - this.startPosition.x
      const height = this.endPosition.y - this.startPosition.y

      const points = []

      const partialLength = this.roundToTwo(length / this.getIndirectPoints())
      const partialHeight = this.roundToTwo(height / this.getIndirectPoints())

      for (let i = 1; i <= this.getIndirectPoints(); i++) {
        const deflectionX = (i !== 1 && i !== this.getIndirectPoints()) ? this.countDeflection('x') : 0
        const deflectionY = (i !== 1 && i !== this.getIndirectPoints()) ? this.countDeflection('y') : 0

        points.push({
          x: this.roundToTwo(this.startPosition.x + (partialLength * i + deflectionX)),
          y: this.roundToTwo(this.startPosition.y + (partialHeight * i + deflectionY))
        })
      }

      // points.push({ x: this.roundToTwo(this.endPosition.x), y: this.roundToTwo(this.endPosition.y) })

      return points
    },
    path () {
      let path = 'M ' + this.roundToTwo(this.startPosition.x) + ' ' + this.roundToTwo(this.startPosition.y) + ' C '

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
  },
  methods: {
    getDataPointPosition (datapoint) {
      return {
        y: Number(datapoint.positionTop ? datapoint.positionTop.replace('px;', '') : 0),
        x: Number(datapoint.positionLeft ? datapoint.positionLeft.replace('px;', '') : 0)
      }
    },
    roundToTwo (number) {
      return Math.round(number * 100) / 100
    },
    countDeflection (dimension) {
      const oppositeDimension = dimension === 'x' ? 'y' : 'x'
      const oppositeLength = Math.abs(this.endPosition[oppositeDimension] - this.startPosition[oppositeDimension])
      const length = Math.abs(this.endPosition[dimension] - this.startPosition[dimension])
      const minimumDeflection = 50
      const isDimGrowing = this.endPosition[dimension] > this.startPosition[dimension]
      const sign = isDimGrowing ? 1 : -1

      if (length > oppositeLength) {
        return 0
      }

      return Math.max(oppositeLength / 1.5, minimumDeflection) * sign
    }
  }
})
</script>

<style scoped>
</style>
