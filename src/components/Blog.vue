
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { reactive } from 'vue'
import Blog1 from './Blogs/Blog1.vue'
import Blog2 from './Blogs/Blog2.vue'
const route = useRoute()
const router = useRouter()

let blogId = ref(route.params.id?? 1);

</script>


<template>
  <!-- forgive me for this, I don't have a database yet -->
  <template v-if="blogId == 1">
  <Blog1 />
  </template>

  <template v-else>
    <Blog2 />

  </template>
</template>

<style scoped>
</style>