<template lang="pug">
section#skills
  h1 skills
  .skills
    .skills__item(v-for="(skill, i) in skills" :key="i" :class="skill.class")
      h2 {{ skill.title }}
      ul.skills__item--list
        li(v-for="(item, j) in skill.description" :key="j")
          v-icon.skills__item--icon(v-if="item.icon" medium color="#fff" padding-left) {{ item.icon }}
          span(v-else)
          span(:title="item.title") {{ item.name }}
</template>

<script>
import { TimelineLite, TweenLite, Power4 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

export default {
  mounted () {
    this.animateSkills()
  },
  data: () => ({
    skills: [
      {
        class: 'skills__JSFrameworks skill__top',
        title: 'JS Frameworks',
        description: [
          { name: 'Vue', icon: 'icon-vue' },
          { name: 'React, React Native', icon: 'icon-react' },
          { name: 'JQuery', icon: 'icon-jquery' }
        ]
      },
      {
        class: 'skills__JSLibraries skill__top',
        title: 'JS Librairies',
        description: [
          { name: 'GSAP', icon: 'icon-communication' },
          { name: 'ScrollMagic', icon: 'icon-communication' }
        ]
      },
      {
        class: 'skills__frontend skill__top',
        title: 'Preprocessors & ECMA Script',
        description: [
          { name: 'Sass / SCSS', icon: 'icon-sass' },
          { name: 'JavaScript / ES6', icon: 'icon-js' }
        ]
      },
      {
        class: 'skills__backend skill__bottom',
        title: 'Backend',
        description: [
          { name: 'PHP', icon: 'icon-php' },
          { name: 'MySql', icon: 'icon-mysql' }
        ]
      },
      {
        class: 'skills__management skill__bottom',
        title: 'Soft skills',
        description: [
          { name: 'Strong work ethic' },
          { name: 'Keen on making a real difference' },
          { name: 'Excellent communication skills' }
        ]
      },
      {
        class: 'skills__interest skill__bottom',
        title: 'Interests',
        description: [
          { name: 'CS50' },
          { name: 'CSS tricks' },
          { name: 'GUI' }
        ]
      }
    ]
  }),
  methods: {
    animateSkills () {
      const tweenSkills = new TimelineLite()
      tweenSkills.add(TweenLite.to('.skills', 1, { ease: Power4.easeInOut }))
        .fromTo('.skills', 2, { y: '30%', opacity: 0 }, { y: '0%', opacity: 1 }, 2)

      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.skills', duration: 500, triggerHook: 1 })
        .setTween(tweenSkills)
        .addTo(controller)
    }
  }
}
</script>

<style lang="scss">
.skills {
  height: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10vh 15% 20vh 15%;
  &__item {
  height: auto;
  width: 33%;
  top: 0;
  padding: 15px 15px 30px 15px;
  text-align: center;
    &--icon {
    padding-right: 6px;
    }
  }
  & ul {
    margin-top: 0.5em;
  }
}

</style>
