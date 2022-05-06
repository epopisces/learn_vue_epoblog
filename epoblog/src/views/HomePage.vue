<template>
  <main>
    <img class="banner-image" alt="Vue logo" src="../assets/Super-Star-Destroyer-of-Fireplace-Mantels.jpg">
    <p>"Welcome to Your Vue.js App"</p>
    <PostLatest />
    <PostCategories />
  </main>
</template>

<script>
import PostLatest from '../components/PostLatest.vue'
import PostCategories from '../components/PostCategories.vue'

export default {
  name: 'BlogPost',
  components: {
    PostLatest,
    PostCategories
  }
}
</script>
