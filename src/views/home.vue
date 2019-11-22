<template lang="pug">
section#home(:class="{ 'no-scroll': !animationDone }")
  .home
    .home__name-wrapper.home__name-wrapper--animated
      .home__name.home__name--full(v-if="animationDone") HELENE ANDRE
      .home__name.home__name--animated(v-else)
        - var $text = "HELENE ANDRE"
        - for (i = 0; i < 50; i++)
          .text #{$text}

    .home__text
      .home__text--job FRONTEND DEVELOPER
      .home__text--location @Melbourne, Australia
    .home__background(v-if="!animationDone")

    v-fade-transition
      input.home__skip-button(
        v-if="!animationDone"
        type="button"
        value="Skip"
        @click="skipAnimation()")

  rain(v-if="animationDone")
  .home__description
    div.home__description-clipper
      div.home__description--text I help companies &amp; individuals to build
      div user friendly experience and elegant interfaces.
</template>

<script>
import { TimelineMax, TweenLite, Power1 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
import rain from '@/components/rain'

export default {
  components: { rain },
  data: () => ({
    animationDone: false,
    delayAnimation: 9000
  }),

  created () {
    document.addEventListener('keyup', e => {
      // On enter or escape keyup, skip animation. (13 = enter, 27 = escape)
      if (e.keyCode === 13 || e.keyCode === 27) this.skipAnimation()
    })
  },

  mounted () {
    if (window.screen.width < 570) { this.skipAnimation() }
    else {
      this.darkenBackground()
      this.preventScroll()
      this.animateClipper()
    }
  },

  beforeDestroy () {
    document.removeEventListener('keyup', e => {})
  },

  methods: {
    darkenBackground () {
      let timelineBackground = new TimelineMax()
      timelineBackground.add(TweenLite.to('.home__background', 2, { ease: Power1.easeInOut, y: '-100%' }), 6)
    },
    preventScroll () {
      setTimeout(() => {
        this.animationDone = true
        this.$emit('animation-done')
      }, this.delayAnimation)
    },
    animateClipper () {
      let timelineClipper = new TimelineMax()

      timelineClipper.to('.home__description-clipper', 2, { opacity: 1 })
        .fromTo('.home__description--text', 1.2, { marginLeft: '-110%', opacity: 0 }, { marginLeft: 0, opacity: 1 }, 2)
        .fromTo('.home__description-clipper', 4, { width: 0 }, { width: '100%' }, 2)

      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.home__description', duration: '120%', triggerHook: 0.7 })
        .setTween(timelineClipper)
        .addTo(controller)
    },
    skipAnimation () {
      this.$emit('animation-done')
      this.animationDone = true
      this.delayAnimation = 0
      this.preventScroll()
    }
  }
}
</script>

<style lang="scss">
#home {height: auto;}

.home {
  height: 100vh;
  position: relative;

  &__name-wrapper {
    width: 100%;
    position: absolute;
    top: 51vh;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7vw;
    color: #f8bc9b;
    line-height: 7vw;
    letter-spacing: 0.5em;
    font-family: Abyssopelagic, Arial, Helvetica, sans-serif;
  }

  &__name {
    z-index: 1;
    mix-blend-mode: difference;
    line-height: 0vh;

    &--full {
      text-indent: 0.5em;
    }
  }

  &__skip-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 4em;
    padding: 4px 10px 4px 10px;
    font-size: 1em;
    line-height: 1em;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: #bdbdbd;
    border: 1px solid #bdbdbd;
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
.home__name-wrapper--animated {
  .text {
    position: absolute;
    font-size: 7vw;
    color: #fff;
    mix-blend-mode: screen;
    line-height: 7vw;
    letter-spacing: 0.5em;
    padding-left: 0.5em;
    opacity: 0;
    font-family: Abyssopelagic, Arial, Helvetica, sans-serif;
    transform: translate(-50%, -50%);
    width: fit-content;
    z-index: 10;

    @for $i from 0 through 50 {
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
    font-family: 'Lato-Light', Arial, Helvetica, sans-serif;
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
    font-family: 'Lato-Light', Arial, Helvetica, sans-serif;
    font-weight: 200;
    letter-spacing: 2px;
    width: fit-content;
    text-align: center;
  }
}

.home__description {
  height: 80vh;
  margin: auto;
  padding-top: 46vh;
  margin-bottom: 20vh;
  color: #fff;
  font-size: 3.6vw;
  text-align: center;
  &--text {width: 100%;}
}

.home__description-clipper {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}
// ============================================================= //

// ===================== Home Background Animation ================== //
.home__background {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #fff;
}
// ============================================================= //

// Prevent scroll.
.no-scroll {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: hidden;
}
// ============================================================= //

// ====================== Media queries ======================== //
@media screen and (min-width: 750px) {
  .home__description {
    font-size: 25px;
  }
}

@media screen and (max-width: 570px) {
  .home__description {font-size: 19px;}
}

@media screen and (max-width: 450px) {
  .home__text--job {font-size: 5vw;}
  .home__description {font-size: 13px;}
  .home__text--location {font-size: 16px;}
}
// ============================================================= //
</style>
