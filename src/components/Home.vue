<script setup>
import { ref } from 'vue'

import { useRouter, useRoute } from 'vue-router'
// const route = useRoute()
const router = useRouter()
const nav = function (path) {
  router.push(path)
};
</script>

<template>
  <!-- <h1>Hi! 👋 </h1> -->
  <h1>Welcome!</h1>

  <p>
    I'm Adam Mills and this website is dedicated as a repository for anything <!-- <br/> -->
    that my mind settles on long enough to be considered a project, something <!-- <br/> -->
    to showcase or simply share through the internet.
  </p>
  <p>
    below you'll find a quick synopsis of what I have been up to: What books I'm
    reading projects I'm working on, topics I'm interested in and ideas I've found to be
    worth sharing
  </p>
  <!-- recent articles -->
  <!-- technical articles -->
  <div id="blog">
    <h2>Recent Works</h2>
    <!-- top x number of blogs -->
      <div class="flow">
        <div class="article-stub">
          <h3>
            At-Home Pi Server
          </h3>
          <div class="article-stub-body">
            <img src="/src/assets/images/pi_on_floor_small.jpg" alt="image of a raspberry pi on my dirty floor"  width="150" />
            <span>Building a Pi server from the ground up has been a lot of things, primarily its been a bad decision!</span>
            <br />
          </div>
          <RouterLink to="/projects/1"  go>
            jmp .BLOG_PI_SERVER
          </RouterLink>
        </div>
      </div>

      <div class="reverse-flow">
        <div class="article-stub">
          <h3>
            Building a Keyboard
          </h3>
          <div class="article-stub-body">
            <img src="/src/assets/images/3d_printed_pcb_small.jpg" alt="Image of a 3d printed pcb" width="150"/>
            <span>A project for the ages, vastly underestimated, poorly planed and awfully timed during a chip shortage
            but glory is found on the hard-fought path and keyboard clack waits for no man!</span>
          </div>
          <RouterLink to="/projects/2" go>
            jmp .BLOG_WISE_CLACKER
          </RouterLink>
        </div>
      </div>
  </div>
  <!-- technical articles -->
  <!-- books -->
 <div id="books">
    <h1>
      What I'm Reading
    </h1>
      <div class="reading-list">
        <img src="/src/assets/images/books/neuromancer.jpg"           height="220"/>
        <img src="/src/assets/images/books/1984.jpg"                  height="220"/>
        <img src="/src/assets/images/books/change_your_mind.jpg"      height="220"/>
        <img src="/src/assets/images/books/dune_1.jpg"                height="220"/>
        <img src="/src/assets/images/books/mind_on_plants.jpg"        height="220"/>
        <img src="/src/assets/images/books/richdad.jpg"               height="220"/>
        <img src="/src/assets/images/books/fahrenheit.jpg"            height="220"/>
        <img src="/src/assets/images/books/dune_2.jpg"                height="220"/>
        <img src="/src/assets/images/books/manufacturing_consent.jpg" height="220"/>
        <img src="/src/assets/images/books/three_body_problem.jpg"    height="220"/>
        <img src="/src/assets/images/books/eversion.jpg"              height="220"/>
        <img src="/src/assets/images/books/learning_AoE.jpg"          height="220"/>
        <img src="/src/assets/images/books/locke.jpg"                 height="220"/>
        <img src="/src/assets/images/books/hear_the_wind_sing.jpg"    height="220"/>
        <img src="/src/assets/images/books/pinball.jpg"               height="220"/>
        <div class="caption">
        </div>
    </div>
  </div>
</template>

<style scoped>
.flow {
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  display: flex;
}
.reverse-flow {
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  flex-direction: row-reverse;
}

.article-stub {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
}

@media (min-width:768px) {
  .article-stub {
    width: 66%;
  }
}
.article-stub-body {
  display: flex;
  text-align: justify;
  min-height: 9.375rem;
  flex-direction: column;
}
.article-stub-body img {
  margin:auto;
  margin-bottom:0.5rem;
  min-width: 150px;
  height: fit-content;
  border-radius: 0.25rem;
  border: 4px solid var(--complement-bright);
}
@media (min-width:640px) {
  .reverse-flow {
    text-align: right;
  }
  .article-stub-body {
    display: flex;
    text-align: justify;
    min-height: 9.375rem;
  }
  .flow .article-stub-body {
    flex-direction: row;
  }
  .reverse-flow .article-stub-body {
    flex-direction: row-reverse;
  }
  .article-stub-body img {
    min-width: 150px;
    height: fit-content;
    border-radius: 0.25rem;
    border: 4px solid var(--complement-bright);
  }
  .flow .article-stub-body img {
    margin: 0 0.75rem 0 0;
  }
  .reverse-flow .article-stub-body img {
    margin: 0 0 0 0.75rem;
  }
}

.article-stub h3 {
  border-bottom: 0.1875rem solid var(--main-darker);
}
.reading-list {
  /* display:flex; */
  /* overflow:hidden; */
  margin: 1rem auto;
}

/* .article-stub h1::before {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 0px;
  width: 100%;
  height: 2px;

  background: linear-gradient(270deg, var(--complement-bright) 0%, var(--complement) 50%, var(--contrast) 100%);
}
html.dark .article-stub h1::after {
  background: linear-gradient(270deg, var(--complement-bright) 0%, var(--complement) 50%, var(--contrast) 100%);
} */
</style>
