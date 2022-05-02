<template>
  <main class="blog" :class="{ 'blog--reading': this.post }">
    <blog-nav :content="content" :filters="filters" :navs="navs"/>
    <blog-feed :filters="filters"/>
    <blog-post :post="post"/>
    <blog-footer/>
  </main>
</template>

<script>
import BlogNav from '../components/BlogNav.vue'
import BlogFeed from '../components/BlogFeed.vue'
import BlogPost from '../components/BlogPost.vue'
import BlogFooter from '../components/BlogFooter.vue'

export default {
  name: 'BlogPage',
  components: { BlogNav, BlogFeed, BlogPost, BlogFooter },
  resource: 'Blog',
  props: {
    post: String,
    category: String
  },

  data() {
    return {
      navs: 0,
      title: '',
      labels: {
        post: '',
        author: ''
      }
    }
  },

  computed: {
    content() {
      return { title: this.title, labels: this.labels }
    },
    filters() {
      let filters = {}

      if (this.post) filters.post = this.post
      if (this.author) filters.author = this.author

      return filters
    }
  },

  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },

  mounted() {
    this.$getResource('blog')
      // eslint-disable-next-line
      .then(x => {
        // use pace hook to know when rendering is ready
      })
  }
}
</script>