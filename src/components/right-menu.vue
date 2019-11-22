<template lang="pug">
div
  //- Menu big screens.
  v-slide-x-reverse-transition
    .right-menu(v-if="animationDone")
      ul.right-menu--big-screen
        li
          v-icon.drawer-toggle-big-screeen(color="white" @click.stop="drawer = !drawer" title="Menu") icon-hamburger
        li(v-for="(item, i) in menuItems" :key="i" v-if="item.title")
          a(:href="item.link" :title="item.title" target="_blank")
            i.right-menu__icon(:class="item.icon")
        li(@click.stop="contactDrawer = !contactDrawer")
          v-icon.right-menu__icon(color="#fff" title="Email Me") icon-email

  //- Menu small screens.
  v-slide-x-reverse-transition
    .right-menu(v-if="animationDone")
      nav.right-menu--small-screen
        v-layout(justify-center)
          v-icon.drawer-toggle(color="white" @click.stop="drawer = !drawer" title="Menu") icon-hamburger

  //- Drawer containing menu on small screens.
  v-navigation-drawer.drawer(
    v-model="drawer"
    fixed
    right
    temporary
    width="250")
    div.drawer-items(v-for="(item, i) in menuItems" :key="i")
      a.drawer__item(v-if="item.scrollTo" link
        v-scroll-to="{ element: '#' + item.scrollTo, duration: 500 }") {{ item.label }}
      a(:href="item.link" :title="item.title" target="_blank")
        i.right-menu__icon(:class="item.icon")
    div.drawer-items(@click.stop="contactDrawer = !contactDrawer;drawer = !drawer")
      v-icon(medium color="#fff" title="Email Me") icon-email

  //- Contact drawer.
  v-navigation-drawer.drawer.d-flex.align-center(
    v-model="contactDrawer"
    fixed
    right
    temporary
    width="250")
    contact-panel
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import contactPanel from '@/views/contact-panel'

Vue.use(VueScrollTo)

export default {
  props: {
    animationDone: {
      type: Boolean,
      default: false
    }
  },
  components: { contactPanel },
  data: () => ({
    contactDrawer: null,
    drawer: null,
    menuItems: [
      { scrollTo: 'home', label: 'Home' },
      { scrollTo: 'portfolio', label: 'Portfolio' },
      { scrollTo: 'skills', label: 'Skills' },
      { scrollTo: 'thought', label: 'Thought' },
      { title: 'GitHub', link: 'https://github.com/helene-andre', icon: 'icon-github' },
      { title: 'CodePen', link: 'https://codepen.io/Helene-Andre/', icon: 'icon-codepen' },
      { title: 'Linkedin', link: 'https://www.linkedin.com/in/helene-andre/', icon: 'icon-linkedin' },
      { title: 'My Resume', link: './helene-frontend-dev.pdf', icon: 'icon-download' }
    ]
  })
}
</script>

<style lang="scss">
.right-menu--small-screen {
  display: none;
}

.right-menu {
  height: auto;
  z-index: 5;
  width: 50px;
  position: fixed;
  right: 0%;
  top: 46vh;
  text-align: center;

  &__icon {
    position: relative;
    font-size: 26px;
    color: rgba(255,255,255, 1);
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {color: rgba(255,255,255, 0.7);}
  }
}

.right-menu--small-screen--checkbox {display: none;}
.drawer.v-navigation-drawer {background-color: rgba(33, 33, 33, 0.9);}
.drawer-toggle-big-screeen {font-size: 36px;}
.drawer-toggle {
  position: fixed;
  top: 1%;
  right: 1%;
  font-size: 40px;
  opacity: 0.7;

  &:hover {opacity: 0.9;}
}

.drawer-items {
  text-align: center;
  padding: 4px 0 4px 0;
  font-size: 23px;
  font-family: Abyssopelagic, Arial, Helvetica, sans-serif;
  letter-spacing: 3px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {background-color: rgba(255,255,255, 0.1);}

  & a {
    display: block;
    height: 100%;
    width: 100%;
    color: #fff;
  }
}
// ====================== Media queries ======================== //
@media screen and (max-width: 720px) {
  .right-menu {
    position: fixed;
    top: 1%;
    right: 1%;
  }
  .right-menu--big-screen {display: none;}
  .right-menu--small-screen {display: block;}
}
// ============================================================= //
</style>
