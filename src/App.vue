
<script setup>
import { ref, watch } from 'vue'
import Heading from '@layout/Heading.vue'
import Footer from '@layout/Footer.vue'
let scrollY = ref(window.scrollY);
let timeoutId = ref(-1);
window.onscroll = (e) => {
  if (timeoutId.value !== -1) window.clearTimeout(timeoutId);
  timeoutId.value = setTimeout(() => { scrollY.value = window.scrollY }, 200, this)
}
let scrollToTop = () => {
  window.scrollTo(0, 0);
}
</script>

<template>
  <Heading />
    <div class="main-view">
      <router-view></router-view>
    </div>
  <Footer />
   <Transition name="fade">
      <button id="return-to-top" class="scroll-top-button" v-if="scrollY > 258" @click="scrollToTop">
        <div class="icon-container">
          <div style="display:block; margin:auto;">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <rect fill="none" height="24" width="24"/><path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z"/>
            </svg>
      </div>
        </div>
      </button>
    </Transition>
</template>


<style>
.main-view {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 0.5rem;
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
    width: 1024px;
    /* max-width: 75%; */
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scroll-top-button {
  display: block;
  cursor: pointer;
  position: fixed;
  right: 2rem;
  bottom: 2.5rem;
  height: 3rem;
  width: 3rem;
  border-radius: 9999px;
  background-color: var(--main-lighter);
  border: 2px solid var(--main-light);
  /* box-shadow: ; */
}
.icon-container {
  margin: auto;
}
.icon-container svg {
  width: 1.5rem;
}
@media (min-width: 640px) {
  .scroll-top-button {
    width: 2.5rem;
    height: 2.5rem;
    bottom: 3rem;
    right: 5%;
  }
  .icon-container svg {
    width: 1.5rem;
  }
}
@media (min-width: 768px) {
  .scroll-top-button {
    width: 3rem;
    height: 3rem;
    bottom: 4rem;
    right: 5%;
  }
  .icon-container svg {
    width: 2rem;
  }
}
@media (min-width: 1024px) {
  .scroll-top-button {
    right: 5%;
  }
}
@media (min-width: 1440px) {
  .scroll-top-button {
    width: 3.5rem;
    height: 3.5rem;
    bottom: 4rem;
    right: 10%;
  }
  .icon-container svg {
    width: 2rem;
  }
}
@media (min-width: 2000px) {
  .scroll-top-button {
    bottom: 4rem;
    right: 20%;
  }
}
</style>
