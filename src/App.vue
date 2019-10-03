<template lang="pug">
  v-app.black(dark :class="{ 'no-scroll': !animationDone }")
    right-menu(:animation-done="animationDone")
    home(@animation-done="animationDone = true")
    skills
    portfolio
    thought
</template>

<script>
import home from '@/views/home'
import portfolio from '@/views/portfolio'
import skills from '@/views/skills'
import rightMenu from '@/components/right-menu'
import thought from '@/views/thought'

export default {
  name: 'App',
  components: { rightMenu, home, portfolio, skills, thought },
  data: () => ({ animationDone: false })
}
</script>

<style lang="scss">
@import '@/sass/main.scss';
@import '@/sass/typography.scss';
</style>
