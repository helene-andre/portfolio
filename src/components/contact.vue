<template lang="pug">
#contact
  .contact
    div(v-for="(item, i) in items" :key="i")
      a(:href="item.link" :title="item.title" target="_blank")
        i.contact__icon(:class="item.icon")

    v-container.contact__email
      v-layout(justify-center)
        v-icon(medium color="#fff" @click.stop="drawer = !drawer" title="Email Me") icon-email

  v-navigation-drawer(
    v-model="drawer"
    padding=0
    fixed
    right
    temporary
    width=500)
    email
</template>

<script>
import email from '@/views/email'

export default {
  components: { email },
  data: () => ({
    drawer: null,
    items: [
      { title: 'GitHub', link: 'https://github.com/helene-andre', icon: 'icon-github' },
      { title: 'CodePen', link: 'https://codepen.io/Helene-Andre/', icon: 'icon-codepen' },
      { title: 'Linkedin', link: 'https://www.linkedin.com/in/helene-andre/', icon: 'icon-linkedin' }
    ]
  }),
  methods: {
    test: (e) => {
      alert('ca marche')
    }
  }
}
</script>

<style lang="scss">
#contact {
  z-index: 10;
}

.contact {
  height: auto;
  width: 90px;
  position: fixed;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  // display: block;
  text-align: center;
  transition: 0.3s ease-in-out;
  &__icon {
    position: relative;
    font-size: 30px;
    color: #fff;
  }
}

.icon-email::before {
  position: absolute;
  bottom: 0px;
}

.container {
  padding: 16px;
}
</style>
