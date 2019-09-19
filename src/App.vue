<template lang="pug">
  v-app
    drawer
    contact
    home
    skills
    portfolio
    thought
</template>

<script>
import home from '@/views/home'
import portfolio from '@/views/portfolio'
import skills from '@/views/skills'
import contact from '@/components/contact'
import drawer from '@/components/drawer'
import thought from '@/views/thought'

export default {
  name: 'App',
  components: { contact, drawer, home, portfolio, skills, thought },
  data: () => ({
    drawer: null,
    items: [{ title: 'About Me' }, { title: 'Portfolio' }]
  })
}
</script>

<style lang="scss">
.hide {
  display: none;
}

.show {
  opacity: 1;
}

body {
  background-color: #000;
  font-family: 'Roboto', arial;
  & div, & span {
    color: #fff;
    font-family: 'Roboto', arial;
  }
}

h1 {
  font-family: abyssopelagic, arial;
  font-weight: 200;
  font-size: 50px;
  color: #f8bc9b;
  text-align: center;
  padding: 10vh 0px 8vh 0px;
  letter-spacing: 8px;
}

h2 {
  font-family: abyssopelagic, arial;
  font-weight: 600;
  font-size: 1.4em;
  letter-spacing: 2px;
  padding-bottom: 6px;
}

ul, li {
  list-style-type: none;
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}

section {
  background-color: #000;
  height: auto;
  width: 80%;
  min-height: 100vh;
  width: 100%;
  position: relative;
  padding-bottom: 16vh;
}
/**=========================== font-family =============================**/
@font-face {
  font-family: abyssopelagic;
  src: url('./assets/fonts/abyssopelagic.otf');
}

@font-face {
  font-family: midnight;
  src: url('./assets/fonts/midnight.otf');
}

@font-face {
  font-family: 'portfolio';
  src:url('./assets/fonts/portfolio.eot');
  src:url('./assets/fonts/portfolio.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/portfolio.woff') format('woff'),
    url('./assets/fonts/portfolio.ttf') format('truetype'),
    url('./assets/fonts/portfolio.svg#portfolio') format('svg');
  font-weight: normal;
  font-style: normal;
}

[data-icon]:before {
  font-family: "portfolio" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: "portfolio" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-location:before {
  content: "\61";
}
.icon-github:before {
  content: "\62";
}
.icon-codepen:before {
  content: "\63";
}
.icon-linkedin:before {
  content: "\64";
}
.icon-email:before {
  content: "\65";
}
.icon-phone:before {
  content: "\66";
}
.icon-html:before {
  content: "\69";
}
.icon-css:before {
  content: "\73";
}
.icon-js:before {
  content: "\74";
}
.icon-php:before {
  content: "\6a";
}
.icon-jquery:before {
  content: "\70";
  font-size: 22px;
}
.icon-sass:before {
  content: "\79";
}
.icon-download:before {
  content: "\47";
}
.icon-love:before {
  content: "\45";
}
.icon-wand:before {
  content: "\46";
}
.icon-vue:before {
  content: "\6f";
}
.icon-mysql:before {
  content: "\4a";
  font-size: 23px;
}
.icon-arrow-left:before {
  content: "\67";
}
.icon-react:before {
  content: "\68";
  font-size: 38px;
  line-height: 26px;
}
/**=====================================================================**/
</style>
