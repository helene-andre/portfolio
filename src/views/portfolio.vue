<template lang="pug">
section#portfolio
  h2.projects__title.line-portfolio My works
  .projects
    .project(v-for="(project) in projects")
      .project__inner(@click="turnPolaroid")
        .project-front
          .project-front__image
            img.image(:src="getImage(project.image)")
          .project-front__text {{ project.name }}
        .project-back
          h2.project-back__title {{ project.name }}
          .project-back__details #[em {{ project.details }}]
          .project-back__tools
            i.i-wand {{ project.tools }}
          .project-back__link
            i.i-web
            a(:href="project.link" target="_blank") #[em {{ project.displayedLink }}]
</template>

<script>
import { TimelineLite, SteppedEase, Power3 } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default {
  name: 'home',
  mounted () {
    this.splitText()
    this.animateTexts()
    this.animatePolaroids()
  },
  data: () => ({
    projects: [
      {
        name: 'Sweet Cocktails',
        image: 'sweetcocktails.png',
        details: 'Interactive cocktail recipes and virtual bar - coming soon',
        tools: 'Javascript, Vue, HTML5, CSS3, PHP, MySql, Git',
        link: 'http://v2.sweetcocktails.com',
        displayedLink: 'http://v2.sweetcocktails.com' },
      {
        name: 'Sweet Bites',
        image: 'sweetbites.png',
        details: 'Ecommerce.',
        tools: 'Javascript, Vue, Nuxt, HTML5, CSS3, Git',
        link: 'https://helene-andre.github.io/SweetBites',
        displayedLink: 'helene-andre.github.io/sweetbites' },
      {
        name: 'Momentum',
        image: 'momentum.png',
        details: 'Clone of the chrome plugin Momentum using external local weather and famous quotes APIs',
        tools: 'Javascript, jQuery, HTML5, CSS3, Git',
        link: 'https://helene-andre.github.io/Momentum',
        displayedLink: 'helene-andre.github.io/momentum' },
      {
        name: 'Porfolio Template',
        image: 'portfolio-template.png',
        details: 'An online portfolio built for a customer.',
        tools: 'Javascript, Vue, HTML5, CSS3, PHP, Git',
        link: 'https://helene-andre.github.io/portfolio-template',
        displayedLink: 'helene-andre.github.io/portfolio-template' }
    ]
  }),
  methods: {
    getImage (name) {
      return require(`../assets/images/${name}`)
    },
    splitText () {
      let textDivs = document.getElementsByClassName('line-portfolio')
      for (let k = 0; k < textDivs.length; k++) {
        let splittedText = textDivs[k].innerHTML
        splittedText = splittedText.split('')
        let textSplitted = ''
        for (let i = 0; i < splittedText.length; i++) {
          textSplitted += `<span>${splittedText[i]}</span>`
        }
        textDivs[k].innerHTML = textSplitted
      }
    },
    animateTexts () {
      let portfolioWidth = '5em'
      if (window.innerHeight < 660) portfolioWidth = '6em'
      const animatePortfolioTexts = new TimelineLite({ paused:true })
      animatePortfolioTexts
        .fromTo('.projects__title', 0.75, { width: '0'}, { width: portfolioWidth, ease: SteppedEase.config(8) }, 0)
        .fromTo('.projects__title', 1, { 'border-right-color': 'rgba(255, 255, 255, 0.75)' }, { 'border-right-color': 'rgba(255, 255, 255, 0)', repeat: -1, ease:  SteppedEase.config(2) }, 0)
        .play()

      const controllerPortfolioTitle = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '#portfolio', triggerHook: 1 })
        .setTween(animatePortfolioTexts)
        .addTo(controllerPortfolioTitle)
    },
    animatePolaroids () {
      const animatePolaroids = new TimelineLite({ paused:true })
      animatePolaroids
        .fromTo('.project', 1, { opacity: '0'}, { opacity: '1', ease: Power3.easeIn }, 0)
        .fromTo('.project-front__image', 1.5, { opacity: '0'}, { opacity: '1', ease: Power3.easeIn }, 1)
        .play()

      const controllerPortfolioTitle = new ScrollMagic.Controller()
      new ScrollMagic.Scene({ triggerElement: '#portfolio', triggerHook: 1 })
        .setTween(animatePolaroids)
        .addTo(controllerPortfolioTitle)
    },
    turnPolaroid () {
      event.currentTarget.classList.toggle('turn-small-screen')
    }
  }
}
</script>

<style lang="scss">
#portfolio {height: 120vh;}

.projects {
  height: 100vh;
  width: 100%;
  position: relative;
  top: 15vh;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  &__title {
    width: 5em;
    margin-top: 1em;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    border-right: 1px solid rgba(255, 255, 255, 0);
  }
}

.project {
  font-family: 'IndieFlower', Arial, Helvetica, sans-serif;
  background-color: transparent;
  width: 300px;
  height: 336px;
  margin: 20px;
  & h2 {color:#000;}
}

.project__inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.turn-big-screen {transform: rotateY(180deg);}

.turn-small-screen {
  transform: rotateY(180deg);
  & .project-front {opacity: 0;}
}

.project-front, .project-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  perspective: 30%;
}

.project-front {
  background-color: #fff;
  margin-bottom: 20px;
  cursor: pointer;

  &__image {
    height: 69%;
    width: 90%;
    margin: 0 5% 0 5%;
    position: relative;
    top: 6%;
    left: 0;
    background-color: #eeeeee;
    overflow: hidden;
    border: 1px solid rgba(#eee, 0.5);
    & .image {
      height: 100%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &__text {
    font-family: 'IndieFlower', Arial, Helvetica, sans-serif;
    font-size: 1.4em;
    position: relative;
    width: 100%;
    color: #000;
    padding-top: 8%;
    text-align: center;
  }
}

.project-back {
  width: 90%;
  padding: 0 5% 0 5%;
  background-color: #fff;
  color: #000;
  transform: rotateY(180deg);

  &__title {padding: 20px 0 10px 0;}
  & div {padding-bottom: 10px;}
}

//=================================================== media queries ========================================//
@media screen and (max-width: 762px) {
  #portfolio {height: 230vh;}
}

@media screen and (max-height: 660px) {
  #portfolio {height: 280vh;}
}

@media screen and (max-height: 660px) and (max-width: 762px) {
  #portfolio {height: 580vh;}
}
//==========================================================================================================//
</style>
