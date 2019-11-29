<template lang="pug">
div#menu-top
  div.menu__item(v-for="item in menuItems"
    :key="item.label"
    :id="item.id"
    :class="item.class"
    v-scroll-to="{ element: `#${item.scrollTo}`, duration: 500 }") {{ item.label }}
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'

Vue.use(VueScrollTo)

export default {
  mounted () {this.setClassActive()},
  props: {
    animationDone: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    menuItems: [
      { scrollTo: 'home', label: 'Hello', class: 'menu__item active', id: 'menu__home' },
      { scrollTo: 'skills', label: 'What I do', class: 'menu__item', id: 'menu__skills' },
      { scrollTo: 'portfolio', label: 'Portfolio', class: 'menu__item', id: 'menu__portfolio' },
      { scrollTo: 'contact', label: 'Contacts', class: 'menu__item', id: 'menu__contact' }
    ]
  }),
  methods: {
    setClassActive () {
      let controllerClassActive = new ScrollMagic.Controller({globalSceneOptions: {duration: "170%"}})

      new ScrollMagic.Scene({triggerElement: '#home'})
        .setClassToggle('#menu__home', 'active')
        .addTo(controllerClassActive)
      new ScrollMagic.Scene({triggerElement: '#skills'})
        .setClassToggle('#menu__skills', 'active')
        .addTo(controllerClassActive)
      new ScrollMagic.Scene({triggerElement: '#portfolio'})
        .setClassToggle('#menu__portfolio', 'active')
        .addTo(controllerClassActive)
      new ScrollMagic.Scene({triggerElement: '#contact'})
        .setClassToggle('#menu__contact', 'active')
        .addTo(controllerClassActive)
    }
  }
}
</script>

<style lang="scss">
#menu-top {
  text-align: right;
  height: auto;
  width: max-content;
  font-family: 'fatType', Arial, Helvetica, sans-serif;
  font-size: 1em;
  position: fixed;
  top: 0;
  right: 0;
  padding: 15px 15px 0 0;
  z-index: 10;
}

.menu__item {
  padding: 2px 4px 2px 0;
  margin-bottom: 4px;

  &:hover {transform: scale(1.1);}
}

.active {border-right: 2px solid #fff;}
</style>