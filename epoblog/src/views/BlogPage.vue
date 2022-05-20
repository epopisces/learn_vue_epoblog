<!--'Details.vue' from The Net Ninja's tutorial-->
<script>

import MarkdownRender from '@/components/MarkdownRender.vue'
import getPost from '@/composables/getPosts'
//import Markdown from 'vue3-markdown-it'
export default {
  props: ['id'],
  setup (props) {
    // get the values from the getPosts func
    const { post, error, load } = getPost(props.id)
    
    load()

    return { post, error }
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
    <h3>The blog is ID#{{ $route.params.id }}</h3>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>Within the category {{ post.category }}, by author {{ post.author }}</p>
      <!-- <span v-for="tag in posts[0].tags" :key="tag">
        #{{ tag }}
      </span> -->
      <div style="text-align: left;">
      {{ post.body }}
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