<template lang="pug">
  #app
    menu-top
    home
    skills
    portfolio
    contact
</template>

<script>
import menuTop from '@/components/menu-top'
import home from '@/views/home'
import skills from '@/views/skills'
import portfolio from '@/views/portfolio'
import contact from '@/views/contact'

export default {
  name: 'App',
  components: { menuTop, home, skills, portfolio, contact }
}
</script>

<style lang="scss">
@import '@/sass/main.scss';
@import '@/sass/typography.scss';
</style>
