<script setup>
import { ref } from 'vue'

const firstIndustryExperienceDate = new Date(2016, 5, 1);
const yearsInIndustry = Math.ceil((new Date() - firstIndustryExperienceDate) / (1000 * 60 * 60 * 24 * 365));

const firstDayProgramming = new Date(2008, 9, 1);
const yearsProgramming = Math.ceil((new Date() - firstDayProgramming) / (1000 * 60 * 60 * 24 * 365));
// using string matching because I need radio button like flow on selected sections
let sectionSelection = ref("tech");

</script>

<template>
  <div class="layout">
    <div>
      <div class="pfp-container">
        <img class="pfp" src="@assets/images/pfp.jpg" height="208px" width="208px">
      </div>
      <h2>About Me:</h2>
      <p>
        As a Software Developer <strong> I take pride in the quality of my work</strong>, I enjoy working with digital tools to build
        meaningful products and solving interesting problems; I'm dedicated to making <strong> software that brings joy. </strong> I am and endlessly
        inquisitive person who need to know how things work, I am always building on my knowledge through studying, tinkering on my own
        projects, and connecting with other's and their projects.
      </p>
      <p>
        I am always seeking better approaches to problem solving and how teams of
        developers can work together effectively.
        <strong>I am constantly revising</strong>
        my development lifecycle to find improvements, pruning the inefficiencies.
        <strong> I am honest</strong> and open about when something is not working,
        I am not afraid to put in the effort to build excellent teams and help others
        build on themselves, because I believe this makes everyone's life better
        and a side effect is building great products.
      </p>

      <dl>
        <dt><strong> {{yearsProgramming}}+ years</strong> programming in many capacities.</dt>
        <dt><strong>Industry Software Developer for {{yearsInIndustry}}+ years</strong>, the majority of my professional experience involves <strong>full-stack development.</strong></dt>
        <dt><strong>Bachelor's degree in computer science</strong> from Dalhousie University + co-op program.</dt>
        <dt>I've built internal reporting web-servers/websites, internal business analytics software, business operations tools, product websites.</dt>
      </dl>
      <p>
        <strong>If you'd like to get in contact with me:</strong> adam [at] adammills [dot] dev
      </p>
      <!-- <h3>Summary of Products I've built:</h3>
      <dl>
        <dt>internal websites, application development, databases.</dt>
        <dt>Server hosting, devops, cloud-based solutions.</dt>
      </dl> -->
      <div class="list-container">
        <span :class="['section-heading', sectionSelection === 'tech'? 'active' :'']">
          <button class="section-button" @click="sectionSelection = sectionSelection === 'tech'? '': 'tech'">
            The Tech I Love
          </button>
        </span>
        <div :class="['section', sectionSelection !== 'tech'? 'hidden-section':'']" >
          <p>below is an <strong>incomplete</strong> list of software and languages I use, I am just picking favorites! </p>
          <dl>
            <dt><code>Vue + Vite</code> for front a end development stack. </dt>
            <dd>Occasionally sprinkled with <code>Tailwind + Sass</code> for CSS tools.</dd>
            <dt><code>Electron</code> for native desktop applications. </dt>
            <dt><code>Golang, C# .NET, Rust, Node.js</code> for server-side code.</dt>
            <dt><code>Rust and C++</code> for systems,embedded programming.</dt>
            <dt><code>MySQL, MSSQL, PostgreSQL</code> for relational databases. </dt>
            <dt><code>Datastore</code> for non-relational databases. </dt>
            <dt><code>Azure and Google Cloud</code> are my most used cloud platforms. </dt>
            <dt><code>Gitlab and Azure Devops</code> for all things Devops. </dt>
            <dt><code>Docker</code> for all my containerization needs. </dt>
            <dt><code>Fedora, Debian</code> are my favorite Linux distributions.</dt>
            <dd>I daily drive <code>Fedora and Windows</code> at the moment.</dd>
          </dl>
        </div>
        <span :class="['section-heading', sectionSelection === 'interests'? 'active' :'']">
          <button :class="'section-button'" @click="sectionSelection = sectionSelection === 'interests'? '': 'interests'">
            My Interests Are
          </button>
        </span>
        <div :class="['section', sectionSelection !== 'interests'? 'hidden-section':'']" >
          <dl>
            <dt><code>Software Development.</code></dt>
            <dd>Web apps, design, UX.</dd>
            <dd>Server code, operational systems development.</dd>
            <dd>Embedded, IoT, automation.</dd>
            <dd>Graphics Programming.</dd>
            <dt><code>Hardware design.</code></dt>
            <dd>Embedded systems.</dd>
            <dd>Circuit design.</dd>
            <dd>PCB design.</dd>
            <dt>Video Games.</dt>
            <dt>Bouldering indoors and outdoors.</dt>
            <dt>Hiking and mushroom foraging.</dt>
            <dt>Playing guitar.</dt>
            <dt>Reading and journaling.</dt>
          </dl>
        </div>
        <span :class="['section-heading', sectionSelection === 'tools'? 'active' :'']">
          <button :class="'section-button'" @click="sectionSelection = sectionSelection === 'tools'? '': 'tools'">
            The Tools I Use
          </button>
        </span>
        <div :class="['section', sectionSelection !== 'tools'? 'hidden-section':'']" >
          <dl>
            <dt>VSCode is my IDE of choice.</dt>
            <!-- <dd>Go see my <router-link to="/blog?article=vs-code">favorite extensions!</router-link></dd> -->
            <dt>Falling in love with Neovim. </dt>
            <dd>I try to keep my settings.json and .config up-to-date and on <a href="https://github.com/OwnageBanana/Trove" target="none">GitHub, too!</a> </dd>

            <!-- <dt>Google Workspace for professional documentation tools</dt> -->
            <!-- <dt>Google Workspace for professional documentation tools</dt> -->
            <!-- <dt>Postman</dt> -->
          </dl>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
@import url("@assets/modules/sections.module.css");

.layout {
  display: flex;
  flex-direction: column;
}
.pfp-container {
  height: 13rem;
  width: 13rem;
  margin: 2rem auto 0;
}
@media (min-width: 640px) {
  .pfp-container {
    float: right;
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

.list-container {
  display:flex;
  flex-direction:column;
  margin-bottom: 2rem;
}

@media (min-width: 360px) {
  .list-container {
    min-height:582px;
  }
}

@media (min-width: 360px) {
  .section {
    max-height: 600px;
    overflow-y: hidden;
  }
  .list-container {
    min-height: 800px;
  }
}
@media (min-width: 460px) {
  .section {
    max-height: 512px;
  }
}
@media (min-width: 560px) {
  .section {
    max-height: 380px;
  }
}
@media (min-width:640px) {
  .section {
    max-height: 360px;
  }
}

</style>
