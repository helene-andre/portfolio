<template lang="pug">
section#portfolio
  h1 PORTFOLIO
  .projects
    .project(v-for="(project,i) in projects" :key="i" :class="project.animation")
      .animated
        img(:src="getImages(project.image)")
      h2.project__title.animated {{ project.name }}
      .project__description.animated {{ project.description }}
</template>

<script>
import { TweenLite, TimelineLite, Power1, Power4 } from 'gsap'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

export default {
  mounted () {
    this.animateProjects()
  },
  data: () => ({
    projects: [
      { name: 'CookCook', image: 'cookcook.png', description: 'Web App', animation: 'animation-a' },
      { name: 'SweetCocktails', image: 'sweetcocktails.png', description: 'Web App', animation: 'animation-b' },
      { name: 'HTMLTags', image: 'htmltags.png', description: 'Web App', animation: 'animation-c' },
      { name: 'Template Porfolio', image: 'portfolio.png', description: 'Web App', animation: 'animation-d' },
    ]
  }),
  methods: {
    getImages (name) {
      return require(`../assets/images/${name}`)
    },
    animateProjects () {
      // Animation GSAP set up for 3 projects.
      const tween1 = new TimelineLite()
      tween1.add(TweenLite.to('.animation-a .animated', 0.2, { ease: Power1.easeInOut }))
        .fromTo('.animation-a .animated', 0.5, { opacity: 0 }, { opacity: 1 })
        .staggerTo('.animation-a .animated', 0.7, { x: '135%' }, 0.3)

      const tween2 = new TimelineLite()
      tween2.add(TweenLite.to('.animation-b .animated', 0.2, { ease: Power4.easeInOut }))
        .fromTo('.animation-b .animated', 0.5, { opacity: 0 }, { opacity: 1 })
        .staggerTo('.animation-b .animated', 0.7, { x: '-135%' }, 0.3)

      const tween3 = new TimelineLite()
      tween3.add(TweenLite.to('.animation-c .animated', 0.2, { ease: Power4.easeInOut }))
        .fromTo('.animation-c .animated', 0.5, { opacity: 0 }, { opacity: 1 })
        .staggerTo('.animation-c .animated', 0.7, { x: '135%' }, 0.3)

      const tween4 = new TimelineLite()
      tween4.add(TweenLite.to('.animation-d .animated', 0.2, { ease: Power4.easeInOut }))
        .fromTo('.animation-d .animated', 0.5, { opacity: 0 }, { opacity: 1 })
        .staggerTo('.animation-d .animated', 0.7, { x: '-135%' }, 0.3)

      // ScrollMagic & animation parameters on scroll for the 3 projects.
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '.animation-a', triggerHook: 1 })
        .setTween(tween1)
        .addTo(controller)

      new ScrollMagic.Scene({ triggerElement: '.animation-b', triggerHook: 1 })
        .setTween(tween2)
        .addTo(controller)

      new ScrollMagic.Scene({ triggerElement: '.animation-c', triggerHook: 1 })
        .setTween(tween3)
        .addTo(controller)

      new ScrollMagic.Scene({ triggerElement: '.animation-d', triggerHook: 1 })
        .setTween(tween4)
        .addTo(controller)
    }
  }
}
</script>

<style lang="scss">
#portfolio {
  height: auto;
}

.projects {
  height: auto;
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  padding: 0 10% 0 10%;
  & .project {
    height: auto;
    width: 70%;
    padding: 2em 1em 10em 1em;
    align-self: flex-start;
    text-align: right;
    &__title {color: #fff;}
    &:nth-child(2), &:nth-child(4) {align-self: flex-end; text-align: left;}
    &__description {padding-top: 6px;}
    & img {width: 100%;}
  }
}

// Projects' animation style for GSAP & ScrollMagic.
.animation-a, .animation-b, .animation-c, .animation-d {
  position: relative;
  height: auto;
  width: auto;
}

.animation-a .animated, .animation-c .animated {
  position: relative;
  left: -135%;
}

.animation-b .animated, .animation-d .animated {
  position: relative;
  right: -135%;
}

.animated {opacity: 0;}
</style>
