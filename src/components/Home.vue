<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Hi! 👋 </h1>

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
  <div>
  <div class="flow">
    <h1>
      At-Home Pi Server
    </h1>
    <img src="" />

  </div>

  <div class="reverse-flow">
    <h1>
      Building a keyboard
    </h1>
    <img src="" />

  </div>
</div>
  <!-- technical articles -->
  <!-- books -->

  <!-- books -->
  <div class="reading-list">
    <img src="" />
    <div class="caption"></div>
  </div>
</template>

<style scoped>
.flow {
  display: flex;
}
.reverse-flow {
  display: flex;
  flex-direction: row-reverse;
}
</style>
