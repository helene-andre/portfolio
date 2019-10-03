<template lang="pug">
.rain-wrapper
  - for (i = 0; i < 3; i++)
    i.raindrop
    i.raindrop-2
</template>

<script>
import { TimelineMax, Linear } from 'gsap'

export default {
  mounted () {
    this.rainFall()
  },
  methods: {
    rainFall () {
      new TimelineMax({ repeat: -1, force3D: true })
        .to('.raindrop', 1, { ease: Linear.easeNone })
        .staggerTo('.raindrop', 2, { top: 200, backgroundColor: '#000' }, 1)
      new TimelineMax({ repeat: -1, force3D: true })
        .delay(1.5)
        .to('.raindrop-2', 2, { ease: Linear.easeNone })
        .staggerTo('.raindrop-2', 2, { top: 200, backgroundColor: '#000' }, 1)
    }
  }
}
</script>

<style lang="scss">
.rain-wrapper {
  position: relative;
  margin: -100px auto 0;
  width: 34px;
  height: 300px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.raindrop, .raindrop-2 {
  position: absolute;
  top: -130px;
  width: 2px;
  height: 70px;
  background: #fff;
}

$NumberOfDrops: 3;

@for $i from 0 through $NumberOfDrops {
  $left: random(100) * 1%;
  .raindrop:nth-of-type(#{$i}) {left: $left;}
}

@for $j from 0 through $NumberOfDrops {
  $left: random(100) * 1%;
  .raindrop-2:nth-of-type(#{$j}) {left: $left;}
}
</style>
