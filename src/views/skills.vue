<template lang="pug">
section#skills
  //- Skills introduction.
  .text
    h2.text__description.anim-typewriter.line__skills I build websites with
    div
      .text__item(v-for="item in skills" :key="item.name" v-if="item.main === '1'") {{ item.name }}

  //- Skills map.
  .map
    h2.map__title.line__skills I am good at...
    .map__wrapper
      .map__block
        .map__item
          h3.line__skills.line__skill Languages
          h4.languages__frontendss.line__skills.line__skill Frontend
          .skill.line__skills.line__skill(v-for="item in skills" v-if="item.type === 'frontend'") {{ item.name }}
          h4.languages__backend.line__skills.line__skill Backend
          .skill.line__skills.line__skill(v-for="item in skills" v-if="item.type === 'backend'") {{ item.name }}
      .map__block
        .map__item.framworks
          h3.line__skills.line__skill Frameworks
          .skill.line__skills.line__skill(v-for="item in skills" v-if="item.type === 'framework'") {{ item.name }}
      .map__block
        .map__item
          h3.line__skills.line__skill Libraries
          .skill.line__skills.line__skill(v-for="item in skills" v-if="item.type === 'library'") {{ item.name }}
</template>

<script>
import { TimelineLite, SteppedEase, TweenMax, Power3 } from 'gsap'
import ScrollMagic from 'scrollmagic'


export default {
  name: 'skills',
  components: {},
  mounted () {
    this.splitText()
    this.animateGlobalSkills()
    this.animateMapSkills()
  },
  data: () => ({
    skills: [
      { name: 'HTML5', type: 'frontend', main: '1' },
      { name: 'CSS3, Sass/SCSS', type: 'frontend', main: '1' },
      { name: 'JavaScript ES6', type: 'frontend', main: '1' },
      { name: 'PHP', type: 'backend' },
      { name: 'SQL/MySQL', type: 'backend' },
      { name: 'Vue.js', type: 'framework', main: '1' },
      { name: 'Nuxt.js', type: 'framework' },
      { name: 'React.js', type: 'framework', main: '1' },
      { name: 'jQuery', type: 'library' },
      { name: 'Vuetify.js', type: 'library' },
      { name: 'GSAP', type: 'library' },
      { name: 'ScrollMagic', type: 'library' }
    ]
  }),
  methods: {
    splitText () {
      let textDivs = document.getElementsByClassName('line__skills')
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
    animateGlobalSkills () {
      let skillsWidth = '12.8em'
      if (window.innerHeight < 660) skillsWidth = '14em'

      // Delay scroll global skills.
      let controllerBlockSkills = new ScrollMagic.Controller({});
      new ScrollMagic.Scene({triggerElement: '#skills', duration: 2000, triggerHook: 0.1 })
              .setPin('#skills')
              .addTo(controllerBlockSkills)

      // Animate skills sentence & carousel.
      let time = 0.4;
      let y = 100;
      let animateSkillsItem = new TimelineLite({ onComplete: function(){ animateSkillsItem.restart() } })
      animateSkillsItem
        .fromTo('.text__description', 0.75, { width: '0'}, { width: skillsWidth, ease: SteppedEase.config(22) })
        .add( TweenMax.staggerFromTo ('.text__item', time, { opacity: 0, y: y }, { opacity: 1, y: 0 }, 2))
        .add( TweenMax.staggerTo ('.text__item', time, { delay: time, opacity: 0, y: -y }, 2), 1.3)
        .delay(1)
        .play()

      const controllerSkillsItem = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.text', triggerHook: 1 })
        .setTween(animateSkillsItem)
        .addTo(controllerSkillsItem)
    },
    animateMapSkills () {
      let skillsMapWidth = '9em'
      if (window.innerHeight < 660) skillsMapWidth = '10em'
      // Animate title in skills map.
      const animateTextIn = new TimelineLite({ paused:true })
      animateTextIn
        .fromTo('.map__title', 0.75, { width: '0'}, { width: skillsMapWidth, ease: SteppedEase.config(15) })
        .fromTo('.map__title', 1, { 'border-right-color': 'rgba(255, 255, 255, 0.75)' }, { 'border-right-color': 'rgba(255, 255, 255, 0)', repeat: -1, ease:  SteppedEase.config(2) }, 0)
        .play()
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.map', triggerHook: 0.5 })
        .setTween(animateTextIn)
        .addTo(controller)

      // // Animate lines in map skills.
      let skillWidth = '12em'
      let skillHeight = '40vh'
      let skillPaddingTop = '72%'

      if (window.innerWidth < 450) {
        skillHeight = 'auto'
        skillPaddingTop = '20px'
      }

      let animateSkillsLines = new TimelineLite({ paused:true })
      animateSkillsLines
        .fromTo('.map__item', 1, { height: '0', 'border-right-color': 'rgba(255, 255, 255, 0)', 'padding-top': '0', top: '50%' }, { height: skillHeight, 'border-right-color': 'rgba(255, 255, 255, 1)', opacity: 1, 'padding-top': skillPaddingTop, top: '0', ease: Power3.easeIn }, 0.5)
        .fromTo('.map__item', 1.5, { width: '1px', 'border-right-color': 'rgba(255, 255, 255, 1)' }, { width: skillWidth, 'border-right-color':'rgba(255, 255, 255, 0)', opacity: 1, ease: Power3.easeIn }, 2)
        .play()

      const controllerSkillsLine = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.map', triggerHook: 0.6 })
        .setTween(animateSkillsLines)
        .addTo(controllerSkillsLine)

      // Animate skills in map skills.
      let animateSkillsItem = new TimelineLite({ paused:true })
      animateSkillsItem
        .add( TweenMax.staggerFromTo ('.line__skill', 1.5, { width: '0', opacity: 0 }, { width: skillWidth, opacity: 1, delay: 1, ease: SteppedEase.config(15) }, 0.1))
        .play()

      const controllerSkillsItem = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.map', triggerHook: 0.5 })
        .setTween(animateSkillsItem)
        .addTo(controllerSkillsItem)
    }
  }
}
</script>

<style lang="scss">
#skills {height: 200vh;}
//================================================ Text ====================================================//
.text {
  height: auto;
  width: max-content;
  position: absolute;
  top: 40vh;
  display: flex;

  &__description {width: 12.8em;}

  &__item {
    width: max-content;
    position: absolute;
    padding-left: 15px;
    line-height: 1em;
    font-size: 1.9em;
    color: #20f7c4;
    opacity: 0;
  }
}

.line__skills, .line__skill {
  position: relative;
  width: 10.7em;
  line-height: 1.2em;
  white-space: nowrap;
  overflow: hidden;
}

.anim-typewriter {width:0;}
//==========================================================================================================//

//================================================ Map =====================================================//
.map {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100vh;

  &__title {
    display: block;
    position: absolute;
    left: 0;
    width: 9em;
    white-space: nowrap;
    color: #fafafa;
    border-right:1px solid rgba(255, 255, 255, 0);
  }

  &__wrapper {
    height: 90vh;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-evenly;
  }

  &__block {
    position: relative;
    height: 100%;
    width: 12em;
  }

  &__item {
    height: fit-content;
    position: relative;
    top: 0%;
    padding-top: 0;
    height: 30em;
    // width: 12em;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1px solid #fff;
  }
}

.skill {
  font-size: 1.3em;
  padding-bottom: 4px;
}
//==========================================================================================================//

//=================================================== media queries ========================================//
@media screen and (max-width: 762px) {
  .text__item {font-size: 1.7em;}
  .skill {font-size: 1.2em;}
}

@media screen and (max-width: 650px) {
  .text__item {font-size: 1.2em;}
  .skill {font-size: 13px;}
  .map__block {width: 8em;}
}

@media screen and (max-width: 450px) {
  .text__item {font-size: 15px;}
  .map__wrapper {
    top: 2em;
    height: 72vh;
    flex-direction: column;
    bottom: unset;
  }
  .map__block {height: auto;}
  .map__item {
    padding-top: 20px;
    padding-left: 10px;
    height: 20vh;
  }
}

@media screen and (max-width: 370px) {
  .text__description, .text__item {font-size: 13px;}
  .text__item {padding-left: 4px;}
}
//==========================================================================================================//
</style>
