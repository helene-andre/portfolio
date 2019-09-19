<template lang="pug">
section#home(:class="{ 'no-scroll': !scroll }")
  .home
    .home__text
      .home__text--job SOFTWARE DEVELOPER
      .home__text--location @Praktika, Melbourne
    .home__background(v-if="!scroll")
    - var $text = "HELENE ANDRE"
    .home__name-animation(v-if="!scroll")
      - for (i = 0; i < 300; i++)
        .text #{$text}
    .home__name(:class="{ 'show': animationEnded }") HELENE ANDRE
    input.home__skip-button(:class="{ 'hide': animationEnded }" type="button" value="Skip" @click="skipAnimation()")

  .rain-wrapper
    - for (i = 0; i < 5; i++)
      i.rain
      i.rain2

  .home__description
    div.home__description-wrapper
      div.home__description--text I help companies &amp; individuals to build
      div friendly user interfaces and seamless experiences.
</template>

<script>
import { TimelineLite, TimelineMax, TweenLite, Power1, Linear } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

export default {
  mounted () {
    this.darkenBackground()
    this.preventScroll()
    this.animateMainFocus()
  },
  data: () => ({
    scroll: false,
    animationEnded: false,
    delayAnimation: 9000,
    skip: false
  }),
  created () {
    document.addEventListener('keyup', e => {
      // Onenter or escape keyup, skip animation. (13 = enter, 27 = escape)
      if (e.keyCode === 13 || e.keyCode === 27) this.skipAnimation()
    })
  },
  beforeDestroy () {
    document.removeEventListener('keyup', e => {})
  },
  methods: {
    darkenBackground () {
      let tweenBackground = new TimelineLite()
      tweenBackground.add(TweenLite.to('.home__background', 2, { ease: Power1.easeInOut, y: '-100%' }), 6)
    },
    rainFall () {
      let timeLine = new TimelineMax({ repeat: -1, force3D: true })
        .to('.rain', 1, { ease: Linear.easeNone })
        .staggerTo('.rain', 2, { top: 200, backgroundColor: '#000' }, 1)

      let timeLine2 = new TimelineMax({ repeat: -1, force3D: true })
        .delay(1.5)
        .to('.rain2', 2, { ease: Linear.easeNone })
        .staggerTo('.rain2', 2, { top: 200, backgroundColor: '#000' }, 1)
    },
    preventScroll () {
      window.scrollTo(0, 0)
      setTimeout(() => {
        this.rainFall()
      }, this.delayAnimation)
      setTimeout(() => {
        window.scrollTo(0, 0)
        this.scroll = true
        this.animationEnded = true
      }, this.delayAnimation)
    },
    animateMainFocus () {
      let timeline3 = new TimelineMax()

      timeline3.to('.home__description-wrapper', 2, { opacity: 1 })
        .fromTo('.home__description--text', 2, { marginLeft: -800, opacity: 0 }, { marginLeft: 0, opacity: 1 }, 2)
        .fromTo('.home__description-wrapper', 2, { width: 0 }, { width: 512 }, 2)

      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.home__description', duration: 800, triggerHook: 1 })
        .setTween(timeline3)
        .addTo(controller)
    },
    skipAnimation() {
      this.delayAnimation = 0
      this.preventScroll()
    }
  }
}
</script>

<style lang="scss">
#home {height: 210vh;}

.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  perspective: 800px;
  &__name {
    position: absolute;
    font-size: 7vw;
    color: #f8bc9b;
    line-height: 7vw;
    letter-spacing: 0.5em;
    padding-left: 0.5em;
    font-family: abyssopelagic, arial;
    opacity: 0;
    mix-blend-mode: screen;
  }
  &__skip-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 4em;
    padding: 4px 10px 4px 10px;
    font-size: 1em;
    line-height: 1em;
    font-family: Roboto, arial;
    color: #eeeeee;
    border: 1px solid #eeeeee;
    background-color: transparent;
    outline: none;
    transition: 0.3s ease-in-out;
    z-index: 20;
    &:hover {
      cursor: pointer;
      opacity: 1;
      color: #000;
      border-color: #000;
    }
  }
}
// ============================================================= //

// ============== Animation text Helene Andre ================== //
.home__name-animation {
  .text {
    position: absolute;
    font-size: 7vw;
    color: #fff;
    line-height: 7vw;
    letter-spacing: 0.5em;
    padding-left: 0.5em;
    opacity: 0;
    font-family: abyssopelagic, arial;
    transform: translate(-50%, -50%);
    width: fit-content;
    mix-blend-mode: screen;
    @for $i from 0 through 300 {
      $key: $i + 1;
      &:nth-child(#{$key}) {
        $row: floor($i / 20);
        color: rgba(249 - $key*0.03, 203 - $key*0.43, 172 - $key*0.48, 1);
        mix-blend-mode: difference;
        clip-path: polygon(
          floor($i / 2) * 10% - $row * 100% $row * 50%,
          floor($key / 2) * 10% - $row * 100% ceil($key % 2) * 50% + ($row * 50%),
          ceil($key / 2) * 10% - $row * 100% ($row + 1) * 50%
        );
        transform-origin: random(100) - 50 + floor($i / 2) * 10% - $row * 100%  random(100) - 50 + $row * 50%;
        animation: fly#{$key} 4000ms $i * 40ms cubic-bezier(0.360, 0.100, 0.160, 1.000) alternate;
        animation-fill-mode: forwards;

        @keyframes fly#{$key} {
          $initX: random(1000) - 500;
          $initY: random(1000) - 500;
          $initZ: random(1000) - 500;
          $initDepth: random(3000) - 2500;
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) rotateX(#{$initX}deg) rotateY(#{$initY}deg) rotateZ(#{$initZ}deg) translateZ(#{$initDepth}px);
          }
          10% {
            opacity: 0;
            transform: translate(-50%, -50%) rotateX(#{$initX}deg) rotateY(#{$initY}deg) rotateZ(#{$initZ}deg) translateZ(#{$initDepth}px);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
          }
        }
      }
    }
  }
}

.home__text {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0%;
  background-color: #000;
  &--job {
    height: 36px;
    width: 324px;
    position: absolute;
    top: 60%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translateX(-50%);
    color: white;
    font-size: 3em;
    font-size: 26px;
    font-family: 'Roboto', arial;
    font-weight: 200;
    letter-spacing: 3px;
    width: fit-content;
    text-align: center;
  }
  &--location {
    height: 36px;
    width: 324px;
    position: absolute;
    top: 70%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translateX(-50%);
    color: white;
    font-size: 18px;
    font-family: roboto, arial;
    font-weight: 200;
    letter-spacing: 2px;
    width: fit-content;
    text-align: center;
  }
}

.home__description {
  height: 50vh;
  width: 600px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 58vh;
  color: #fff;
  font-size: 1.5em;
  font-weight: 200;
  text-align: center;
}

.home__description-wrapper {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}

.home__description-wrapper {
  width: 0px;
}

.home__description-wrapper .home__description--text {
  margin-left: -512px;
}
// ============================================================= //

// ===================== Home Background Animation ================== //
.home__background {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0%;
  background-color: #fff;
}
// ============================================================= //

// ====================== Rain animation ======================= //
.rain-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 34px;
  height: 300px;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}

.rain, .rain2 {
  position: absolute;
  top: -130px;
  width: 2px;
  height: 70px;
  background: #fff;
}

$NumberOfDrops: 5;

@for $i from 0 through $NumberOfDrops {
  $left: random(100) * 1%;
  .rain:nth-of-type(#{$i}) {
    left: $left;
  }
}

@for $j from 0 through $NumberOfDrops {
  $left: random(100) * 1%;
  .rain2:nth-of-type(#{$j}) {
    left: $left;
  }
}

// Prevent scroll.
.no-scroll{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

@media screen and (max-width: 450px) {
  .home__text--job {
    font-size: 6vw;
  }
}
</style>
