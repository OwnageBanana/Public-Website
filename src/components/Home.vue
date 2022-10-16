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
  <h1>Welcome! </h1>

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
    <h1>
      Recent Articles
    </h1>
    <!-- top x number of blogs -->
    <a class="invisible" @click="nav('/blog/1')">
      <div class="flow">
        <div class="article-stub">
          <h2>
            At-Home Pi Server
          </h2>
          <div class="article-stub-body">
            <img src="\src\assets\images\pi_on_floor_small.jpg" alt="image of a raspberry pi on my dirty floor"  width="150" />
            Building a Pi server from the ground up has been a lot of things, primarily its been a bad decision!
          </div>
        </div>
      </div>
    </a>
    <a class="invisible"  @click="nav('/blog/2')">
      <div class="reverse-flow">
        <div class="article-stub">
          <h2>
            Building a Keyboard
          </h2>
          <div class="article-stub-body">
            <img src="\src\assets\images\3d_printed_pcb_small.jpg" alt="Image of a 3d printed pcb" width="150"/>
            A project for the ages, vastly underestimated, poorly planed and awfully timed during a chip shortage
            but glory is found on the hard-fought path and keyboard clack waits for no man!
          </div>
        </div>
      </div>
    </a>
  </div>
  <!-- technical articles -->
  <!-- books -->
 <div id="books">
    <h1>
      What I'm Reading
    </h1>
      <div class="reading-list">
        <img src="\src\assets\images\books\neuromancer.jpg"           height="220"/>
        <img src="\src\assets\images\books\1984.jpg"                  height="220"/>
        <img src="\src\assets\images\books\change_your_mind.jpg"      height="220"/>
        <img src="\src\assets\images\books\dune_1.jpg"                height="220"/>
        <img src="\src\assets\images\books\mind_on_plants.jpg"        height="220"/>
        <img src="\src\assets\images\books\richdad.jpg"               height="220"/>
        <img src="\src\assets\images\books\fahrenheit.jpg"            height="220"/>
        <img src="\src\assets\images\books\dune_2.jpg"                height="220"/>
        <img src="\src\assets\images\books\manufacturing_consent.jpg" height="220"/>
        <img src="\src\assets\images\books\three_body_problem.jpg"    height="220"/>
        <img src="\src\assets\images\books\eversion.jpg"              height="220"/>
        <img src="\src\assets\images\books\learning_AoE.jpg"          height="220"/>
        <img src="\src\assets\images\books\locke.jpg"                 height="220"/>

        <div class="caption">
        </div>
    </div>
  </div>
</template>

<style scoped>
.flow {
  display: flex;
}
.reverse-flow {
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
}
.article-stub {
  display: flex;
  flex-direction: column;
  width: 66%;
  position: relative;
}
.article-stub-body {
  display: flex;
  text-align: justify;
  min-height: 9.375rem;
}
.reverse-flow .article-stub-body {
  flex-direction: row-reverse;
}
.article-stub-body img {
  margin: 0px 12px;
  min-width: 150px;
  height: fit-content;
  border-radius: 0.1875rem;
  border-color: var(--main-darker);
}
.article-stub h2 {
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
