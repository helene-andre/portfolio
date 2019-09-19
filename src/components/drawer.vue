<template lang="pug">
#drawer
  v-layout(wrap)
    v-container
      v-layout(justify-center)
        v-icon.icon-drawer(
          large
          color="white"
          dark
          @click.stop="drawer = !drawer") icon-arrow-left
  
  v-navigation-drawer(
    v-model="drawer"
    fixed
    height="100%"
    temporary)
    v-list-tile(
      v-for="item in items"
      :key="item.title"
      @click="drawer = false"
      v-scroll-to="{el: item.link, duration: 600}"
      class="drawer__text") {{ item.title }}
</template>

<script>
import Vue from 'vue';
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

export default {
  data: () => ({
    drawer: null,
    items:[
      { title: "Home", link: "#home" },
      { title: "Portfolio", link: "#portfolio" },
      { title: "Skills", link: "#skills" }
    ]
  })
}
</script>

<style lang="scss">
#drawer {
  position: fixed;
  z-index: 5;
}

.icon-drawer {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 100px;
}

.v-list__tile {
  font-family: abyssopelagic, arial;
  color: #f8bc9b;
  text-align: center;
  padding: 9vh;
  font-weight: 600;
  font-size: 2em;
  letter-spacing: 2px;
}
</style>
