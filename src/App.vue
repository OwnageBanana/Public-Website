
<script setup>
import Heading from '@layout/Heading.vue'
import Footer from '@layout/Footer.vue'

</script>

<template>
  <Heading />
    <div class="main-view">
      <router-view></router-view>
    </div>
  <Footer />
</template>


<style>
.main-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 1.5rem;
  /* text-align: justify; */
}

@media (min-width: 640px) {
  .main-view {
    margin: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .main-view {
    margin: 0 auto;
    max-width: 75%;
  }
}
</style>
