<template lang="pug">
section#contact
  div.contact
    h2.contact__title.line__contact Let's work together
    .contact__item
      h3.contact__subtitle.line__contact eMail me:
      br
      div.contact__details
        a#email.line__contact(href="mailto:helene.andre.06@gmail.com") helene.andre.06@gmail.com
    .contact__item
      h3.contact__subtitle.line__contact Call me
      br
      div.contact__details
        a#phone.line__contact(href="tel:+61 (0) 484 084 650") +61 (0) 484 084 650
    .contact__item
      h3.contact__subtitle.line__contact Meet me
      br
      div.contact__details.line__contact Melbourne, VIC, Australia
    .contact__item
      h3.contact__subtitle.line__contact Watch me
      br
      a.i-github(href="https://github.com/helene-andre" target="_blank")
      a.i-linkedin(href="https://www.linkedin.com/in/helene-andre/" target="_blank")
</template>

<script>
import { TimelineLite, SteppedEase, TweenMax } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default {
  name: 'home',
  components: {},
    mounted () {
    this.splitText()
    this.animateContactTexts()
  },
  methods: {
    splitText () {
      let textDivs = document.getElementsByClassName('line__contact')
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
    animateContactTexts () {
      let contactWidth = '11.5em'
      if (window.innerHeight < 660) contactWidth = '14em'

      // Animate contact title.
      const animateTextContact = new TimelineLite({ paused:true })
      animateTextContact
        .fromTo('.contact__title', 0.75, { width: '0'}, { width: contactWidth, ease: SteppedEase.config(20) }, 0)
        .fromTo('.contact__title', 1, {"border-right-color": "rgba(255, 255, 255, 0.75)"}, {"border-right-color": "rgba(255, 255, 255, 0)", repeat: -1, ease:  SteppedEase.config(2)}, 0)
        .play()
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '#contact', triggerHook: 0.6 })
        .setTween(animateTextContact)
        .addTo(controller)

      // Animate skills in map skills.
      let animateContactItems = new TimelineLite({ paused:true })
      animateContactItems
        .add( TweenMax.staggerFromTo ('.contact__item', 1.5, { width: '0', opacity: 0 }, { width: '100%', 'border-right-color': '#fff', opacity: 1, delay: 1, ease: SteppedEase.config(15) }, 0.1))
        .play()

      const controllerContactItem = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '#contact', triggerHook: 0.5 })
        .setTween(animateContactItems)
        .addTo(controllerContactItem)
    }
  }
}
</script>

<style lang="scss">
#contact {
  margin-bottom: 5vh;

  & a {
    font-size: 2em;
    padding: 6px;
    color: #fff;

    &:hover {color: #2fb796;}
  }
  & #email, #phone {padding: 0;}
}

.contact {
  height: auto;
  width: max-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  &__title {
    position: relative;
    width: 11.5em;
    margin-bottom: 1em;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid rgba(255, 255, 255, 0.75);
  }

  &__item {
    white-space: nowrap;
    overflow: hidden;
  }

  &__subtitle {
    display: block;
    color: #fafafa;
    font-family: 'fatType', Arial, Helvetica, sans-serif;
    margin-top: 1.6em;
    padding: 0;
  }

  &__details, #email, #phone {
    font-size: 1.3em;
    color: #fafafa;
  }
}

//=================================================== media queries ========================================//
@media screen and (max-width: 762px) {
  #contact { height: 80vh;}
  .contact__details, #email, #phone {font-size: 1.7em;}
}

@media screen and (max-width: 650px) {
  .contact__details, #contact #email, #contact #phone {font-size: 1.2em;}
}

@media screen and (max-width: 450px) {
  .contact__details, #contact #email, #contact #phone {font-size: 15px;}
  #contact a {font-size: 1.6em;}
}

@media screen and (max-height: 660px) {
  &__title {width: 14em;}
}

@media screen and (max-height: 660px) and (max-width: 762px) {
  .contact__details, #contact #email, #contact #phone {font-size: 15px;}
  .contact__title {margin: 0;}
}
//==========================================================================================================//
</style>
