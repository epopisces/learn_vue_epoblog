<!--'Home.vue' from The Net Ninja's tutorial-->
<script>
// eslint-disable-next-line
import { ref } from 'vue'
import getPosts from '@/composables/getPosts'
//components
import PostCategories from '@/components/PostCategories.vue'
import PostFeed from '@/components/PostFeed.vue'

export default {
  name: 'HomePage',
  components: {
    PostFeed,
    PostCategories
  },
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <!--eslint-disable vue/no-unused-components-->
  <main>
    <img class="banner-image" alt="Vue logo" src="../assets/Super-Star-Destroyer-of-Fireplace-Mantels.jpg">
    <p>"Welcome to Your Vue.js App"</p>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
    
      <PostFeed :posts="posts" />
      <PostCategories />
    </div>
    <div v-else>
      <p>Loading. . .</p>
    </div>
    
  </main>
</template>
