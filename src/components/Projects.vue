
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref,watch } from 'vue'
import { reactive } from 'vue'
import Blog1 from './Blogs/Blog1.vue'
import Blog2 from './Blogs/Blog2.vue'
const route = useRoute()
const router = useRouter()
if (route?.params?.id === undefined){
  router.push('/projects/1');
}
let blogId = ref(route.params.id?? 1);
watch(route, async (newVal, oldVal) => {
  blogId = newVal.params.id?? 1
},{deep: true,});
</script>

<template>
  <div class="project-heading">
    <div class="project-header">
      Take a look at my other projects.
    </div>
    <div>
      <RouterLink to="/projects/1" go> 1</RouterLink>
       -
      <RouterLink to="/projects/2" go> 2 </RouterLink>
    </div>
  </div>
  <!-- forgive me for this, I don't have a database yet -->
  <template v-if="blogId == 1">
  <Blog1 />
  </template>

  <template v-else>
    <Blog2 />

  </template>
</template>

<style scoped>
.project-heading {
  display: flex;
  margin-top:0.5rem;

}
.project-header{
  display:flex;
  margin-right:1rem;
}
</style>