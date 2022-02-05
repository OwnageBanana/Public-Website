<script setup>
import { ref } from 'vue'
function created(){
 console.log("t");
}

const firstIndustryExperienceDate = new Date(2016, 5, 1);
const yearsInIndustry = Math.ceil((new Date() - firstIndustryExperienceDate) / (1000 * 60 * 60 * 24 * 365));
let sectionSelection = ref({tech:false, });

</script>

<template>
  <div class="layout">
    <img class="pfp" src="/src/assets/pfp.jpg">
    <div>
      <h3>About Me:</h3>
      <dl>
        <dt><b>Software Engineer for {{yearsInIndustry}}+ years</b>, the majority of my resume involves <b>full stack development.</b></dt>
        <dt><b>Bachelor's degree in computer science</b> from Dalhousie University + co-op program.</dt>
      </dl>
      <!-- <h3>Summary of Products I've built:</h3>
      <dl>
        <dt>internal websites, application development, databases.</dt>
        <dt>Server hosting, devops, cloud-based solutions.</dt>
      </dl> -->
      <h3 class="section-heading">
        <button class="section-button" @click="sectionSelection = sectionSelection == 'tech'? '': 'tech'">some of my favorite technology</button>
      </h3>
      <div :class="['section', sectionSelection !== 'tech'? 'hidden-section':'']" >
        <dl>
          <dt></dt>
          <dt></dt>
          <dd></dd>
          <dt></dt>
        </dl>
      </div>
      <h3 class="section-heading">
        <button class="section-button" @click="sectionSelection = sectionSelection == 'tech2'? '': 'tech2'">some of my favorite technology</button>
      </h3>
      <div :class="['section', sectionSelection !== 'tech2'? 'hidden-section':'']" >
        <dl>
          <dt></dt>
          <dt></dt>
          <dd></dd>
          <dt></dt>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("/src/assets/modules/sections.module.css");

.layout {
  display: flex;
  flex-direction: column;
}

.pfp {
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
  margin: 2rem auto 0;
  border: var(--contrast-bright) solid;
}
html.dark .pfp {
  border: var(--complement) solid;
}

@media (min-width: 640px) {
  .layout {
    flex-direction: row-reverse;
  }
  .pfp {
    margin: 2rem 0 0 2rem;
  }
}
@media (min-width: 768px) {
  .pfp {
    margin: 1rem 0 0 1rem;
  }
}
</style>
