<!--'Details.vue' from The Net Ninja's tutorial-->
<script>

import MarkdownRender from '../components/MarkdownRender.vue'
import getPosts from '../composables/getPosts'
//import Markdown from 'vue3-markdown-it'
export default {
  setup () {
    // get the values from the getPosts func
    const { posts, error, load } = getPosts()
    
    load()

    return { posts, error }
  },
  components: {
    //Markdown,
    MarkdownRender // eslint-disable-line
  },
  // data() {
  //   return {
  //     post: []//,
  //     //source: post.body
  //   }
  // },
  // note quotes/* returns a list, incl /random which returns a list of 1 quote
  // by default.  Thus the data[0] below
  // mounted() {
  //   fetch('http://localhost:7071/blog/posts')
  //     .then(res => res.json())
  //     .then(data => this.post = data[0])
  //     .catch(err => console.log(err.message))
  // }
}
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>The blog is ID#{{ $route.params.id }}</h1>
    <div v-if="posts.length">
      <h1>Within the category {{ posts[0].category }}</h1>
      <p>{{ posts[0].author }}</p>
      <!-- <span v-for="tag in posts[0].tags" :key="tag">
        #{{ tag }}
      </span> -->
      <div style="text-align: left;">
      {{ posts[0].body }}
      <!--
      
      <Markdown :source="posts[0].body" />
      <MarkdownRender :source="posts[0].body" />-->
      </div>
    </div>
    <div v-else>
      <p>Loading. . .</p>
    </div>
  </div>
</template>
''
<!-- ###########################################################################
So I'm thinking this view (or the primary component it uses) should accept markdown as a 'body', and process it through
the appropriate components (third party or otherwise) to render it
############################################################################ -->