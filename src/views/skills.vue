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
import { TimelineLite, TweenLite, Power1 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

export default {
  mounted () {
    this.animateSkills()
  },
  data: () => ({
    skills: [
      {
        title: 'Preprocessors & ECMA Script',
        description: [
          { name: 'Sass / SCSS', icon: 'icon-sass' },
          { name: 'JavaScript / ES6', icon: 'icon-js' },
          { name: 'Webpack', icon: 'icon-webpack' }
        ]
      },
      {
        title: 'JS Frameworks',
        description: [
          { name: 'Vue', icon: 'icon-vue' },
          { name: 'Nuxt', icon: 'icon-triangle' }
        ]
      },
      {
        title: 'JS Librairies',
        description: [
          { name: 'GSAP', icon: 'icon-sock' },
          { name: 'ScrollMagic', icon: 'icon-wand' },
          { name: 'Vuetify', icon: 'icon-triangle' },
          { name: 'JQuery', icon: 'icon-jquery' }
        ]
      },
      {
        title: 'Backend',
        description: [
          { name: 'PHP', icon: 'icon-php' },
          { name: 'SQL / MySql', icon: 'icon-mysql' },
          { name: 'Python', icon: 'icon-triangle' }
        ]
      },
      {
        title: 'Soft skills',
        description: [
          { name: 'Strong work ethic', icon: 'icon-triangle' },
          { name: 'Keen on making a real difference', icon: 'icon-triangle' },
          { name: 'Excellent communication skills', icon: 'icon-triangle' }
        ]
      },
      {
        title: 'Interests',
        description: [
          { name: 'CSS tricks', icon: 'icon-triangle' },
          { name: 'React / React Native', icon: 'icon-triangle' }
        ]
      }
    ]
  }),
  methods: {
    animateSkills () {
      const tweenSkills = new TimelineLite()
      tweenSkills.add(TweenLite.to('.skills', 2, { ease: Power1.easeInOut }))
        .fromTo('.skills', 2, { y: '30%', opacity: 0 }, { y: '-10%', opacity: 1 }, 1)

      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '#skills', duration: '50%', triggerHook: 0.25 })
        .setTween(tweenSkills)
        .addTo(controller)
    }
  }
}
</script>

<style lang="scss">
#skills {padding-top: 20vh;}
.skills {
  height: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10vh 15% 0 15%;

  &__item {
  height: auto;
  width: 33%;
  top: 0;
  padding: 15px 15px 30px 15px;
  text-align: center;

    &--icon {
      padding-right: 6px;
      height: 22px;
    }

    &--list li {
      line-height: 21px;
      padding-bottom: 5px;
    }
  }
  & ul {margin-top: 0.5em;}
}

.icon-triangle:before {font-size: 16px;}

@media screen and (max-width: 768px) {
  .skills__item h2 {font-size: 15px;}
}

@media screen and (max-width: 520px) {
  .skills {margin-top: 6em;}
}

@media screen and (max-width: 470px) {
  .skills {display: block;}
  .skills__item {width: 100%;}
  .skills__item h2 {font-size: 20px;}
}
</style>
