<!--'Details.vue' from The Net Ninja's tutorial-->
<script>

import MarkdownRender from '@/components/MarkdownRender.vue'
import getPost from '@/composables/getPost'
//import Markdown from 'vue3-markdown-it'
export default {
  props: ['id'],
  setup (props) {
    // get the values from the getPosts func
    const { post, error, load, mdRendered } = getPost(props.id)

    load()

    return { post, error, mdRendered }
  },
  components: {
    //Markdown,
    MarkdownRender // eslint-disable-line
  }
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
      <div v-html="mdRendered"></div>
      <!--
      <MarkdownRender :posts="posts" />
      <Markdown :source="posts[0].body" />
      <MarkdownRender :source="posts[0].body" />-->
      </div>
    </div>
    <div v-else>
      <p>Loading. . .</p>
    </div>
  </div>
</template>

<!-- ###########################################################################
So I'm thinking this view (or the primary component it uses) should accept markdown as a 'body', and process it through
the appropriate components (third party or otherwise) to render it
############################################################################ -->