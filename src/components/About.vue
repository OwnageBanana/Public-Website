<script setup>
import { ref } from 'vue'
function created () {
  console.log("t");
}

const firstIndustryExperienceDate = new Date(2016, 5, 1);
const yearsInIndustry = Math.ceil((new Date() - firstIndustryExperienceDate) / (1000 * 60 * 60 * 24 * 365));
let sectionSelection = ref({ tech: false, });

</script>

<template>
  <div class="layout">
    <div>
      <div class="pfp-container">
        <img class="pfp" src="/src/assets/pfp.jpg">
      </div>
      <h3>About Me:</h3>
      <p>
        As a Software Engineer <b> I take pride in the quality of my work</b>, I enjoy playing with digital tools to build
        meaningful products, solving interesting problems and <b> making software that brings joy. </b> I am and endlessly
        inquisitive person, I need to know how things tick and I love building on my knowledge through studying, tinkering on my own
        projects and by observing other peoples' projects and their approach to problem solving.
      </p>
      <p>
        I am always seeking better approaches to problem solving and how teams of developers work effectively. <b>I am constantly revising</b>
        my software development lifecycle, pruning the inefficient processes. <b> I am honest</b> and open about when something is not working,
        I am not afraid to put in the effort to build excellent teams and help others build on themselves, because I believe this is the root
        to building great products.
      </p>
      <q>forget about your targets, lets focus on our systems.</q>
      <br/>
      <cite> - James Clear, Atomic habits</cite>
      <dl>
        <dt><b>Software Engineer for {{yearsInIndustry}}+ years</b>, the majority of my professional experience involves <b>full-stack development.</b></dt>
        <dt><b>Bachelor's degree in computer science</b> from Dalhousie University + co-op program.</dt>
      </dl>
      <!-- <h3>Summary of Products I've built:</h3>
      <dl>
        <dt>internal websites, application development, databases.</dt>
        <dt>Server hosting, devops, cloud-based solutions.</dt>
      </dl> -->
      <h3 class="section-heading">
        <button class="section-button" @click="sectionSelection = sectionSelection == 'tech'? '': 'tech'">
          The Tech I Love
        </button>
      </h3>
      <div :class="['section', sectionSelection !== 'tech'? 'hidden-section':'']" >
        <p>below is an incomplete list of software and languages I use, </p>
        <dl>
          <dt><code>Vue + Vite</code> for front a end development stack. </dt>
          <dd>Occasionally sprinkled with <code>Tailwind + Sass</code> for CSS tools.</dd>
          <dt><code>Electron</code> for native desktop applications. </dt>
          <dt><code>Golang, C# .NET, Node.js</code> for server-side code.</dt>
          <dt><code>MySQL, MSSQL, Postgresql</code> for relational databases. </dt>
          <dt><code>Datastore, MongoDB</code> for non-relational databases. </dt>
          <dt><code>Azure and Google Cloud</code> are my most used cloud platforms. </dt>
          <dt><code>Gitlab and Azure Devops</code> for all things Devops. </dt>
          <dt><code>Docker</code> for all my containerization needs. </dt>
          <dt><code>Debian and Ubuntu</code> are my favorite Linux distributions.</dt>
        </dl>
      </div>
      <h3 class="section-heading">
        <button :class="'section-button'" @click="sectionSelection = sectionSelection == 'tech2'? '': 'tech2'">
          The Tools I Use
        </button>
      </h3>
      <div :class="['section', sectionSelection !== 'tech2'? 'hidden-section':'']" >
        <dl>
          <dt>VS Code is my IDE of choice. </dt>
          <dd>Go see my <router-link to="/blog?article=vs-code">favorite extensions!</router-link></dd>
          <dt>Google Workspace for professional documentation tools</dt>
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
.pfp-container {
  height: 12rem;
  width: 12rem;
  margin: 2rem auto 0;
}
@media(min-width:640px){
  .pfp-container {
    float:right;
  }
}
.pfp {
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
  border: var(--contrast-bright) solid;
}
html.dark .pfp {
  border: var(--complement) solid;
}

@media (min-width: 640px) {
  .layout {
    flex-direction: row-reverse;
  }
  .pfp-container {
    margin: 2rem 0 0 2rem;
  }
}
@media (min-width: 768px) {
  .pfp-container {
    margin: 1rem 0 0 1rem;
  }
}
</style>
