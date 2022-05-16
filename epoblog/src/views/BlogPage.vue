<script>
import Markdown from 'vue3-markdown-it'
export default {
  components: {
    Markdown
  },
  data() {
    return {
      post: []//,
      //source: post.body
    }
  },
  // note quotes/* returns a list, incl /random which returns a list of 1 quote
  // by default.  Thus the data[0] below
  mounted() {
    fetch('http://localhost:7071/blog/posts')
      .then(res => res.json())
      .then(data => this.post = data[0])
      .catch(err => console.log(err.message))
  }
}
</script>

<template>
  <div>
    <h1>The blog is {{ $route.params.post }}</h1>
    <h1>Within the category {{ $route.params.category }}</h1>
    <p>{{ post.author }}</p>
    <div style="text-align: left;">
    <Markdown :source="post.body" />
    </div>
  </div>
</template>

<!-- ###########################################################################
So I'm thinking this view (or the primary component it uses) should accept markdown as a 'body', and process it through
the appropriate components (third party or otherwise) to render it
############################################################################ -->