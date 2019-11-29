<template lang="pug">
section#home
  div.home__texts-wrapper
    h1.home__title.line-home Hello, I'm Helene.
    h2.home__job.line-home I'm a frontend developer.
  .home__arrow
    .icon.i-angle-down
  div.home__trigger
</template>

<script>
import { TimelineLite, SteppedEase } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default {
  mounted () {
    this.splitText()
    this.animateTextsIn()
    this.animateArrow()
    this.animateTextsOut()
  },
  methods: {
    splitText () {
      let textDivs = document.getElementsByClassName('line-home')
      for (let k = 0; k < textDivs.length; k++) {
        let splittedText = textDivs[k].innerHTML
        splittedText = splittedText.split('')
        let textSplitted = ''
        for (let i = 0; i < splittedText.length; i++) {
          textSplitted += `<span>${splittedText[i]}</span>`
        }
        textDivs[k].innerHTML = textSplitted
      }
    },
    animateTextsIn () {
      const animateTextIn = new TimelineLite({ paused:true })
      animateTextIn
        .fromTo('.home__title', 0.75, { width: '0' }, { width: '11em', ease: SteppedEase.config(18) }, 1)
        .fromTo('.home__title', 1, { 'border-right-color': 'rgba(255, 255, 255, 0.75)' }, { 'border-right-color': 'rgba(255, 255, 255, 0)', repeat: -1, ease:  SteppedEase.config(2) }, 0)
        .fromTo('.home__job', 0.75, { width: '0' }, { width: '15em', ease: SteppedEase.config(35) }, 1.75)
        .fromTo('.home__arrow', 0.75, { bottom: '50px', opacity: 0 }, { bottom: '0', opacity: 0.75, repeat: -1, ease: SteppedEase.config(2) }, 2.75)
        .play()
    },
    animateArrow () {
      const animateArrow = new TimelineLite({ paused:true })
      animateArrow
        .fromTo('.home__arrow', 0.75, { bottom: '0px' }, { bottom: '-100', repeat: -1, ease: SteppedEase.config(2) }, 2.75)
        .play()
        .kill()

      const controllerElements = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.home__trigger', triggerHook: 1 })
        .setTween(animateArrow)
        .addTo(controllerElements)
    },
    animateTextsOut () {
      const animateTextsOut = new TimelineLite({ paused:true })
      animateTextsOut
        .fromTo('.home__job', 0.75, { width: '15em' }, { width: '0', ease: SteppedEase.config(35) }, 0)
        .fromTo('.home__title', 0.75, { width: '11em'}, { width: '0', ease: SteppedEase.config(18) }, 0.5)
        .play()
        .delay(0)
        .kill()

      const controllerElements = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.home__trigger', triggerHook: 1 })
        .setTween(animateTextsOut)
        .addTo(controllerElements)
    }
  }
}
</script>

<style lang="scss">
#home {
  margin-top: 0vh;

  & h2 {font-family: 'normalType', Arial, Helvetica, sans-serif;}
}

.home__texts-wrapper {
  height: auto;
  width: max-content;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.home__title, .home__job {
  position: relative;
  width: 11em;
  white-space: nowrap;
  overflow: hidden;
}

.home__title {
  width:0;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  margin-bottom: 0.8em;
}

.home__job {
  width: 15em;

  & span {padding-left: 3px;}
}

.home__arrow {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5em;
  opacity: 0;
}

.home__trigger {
  position: absolute;
  top: 102%;
}
</style>
