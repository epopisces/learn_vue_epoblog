<!--'Home.vue' from The Net Ninja's tutorial-->
<script>
import PostFeed from '../components/PostFeed.vue'
import getPosts from '../composables/getPosts'
import PostCategories from '../components/PostCategories.vue'

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
