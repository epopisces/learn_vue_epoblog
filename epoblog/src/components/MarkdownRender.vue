<!--! NOTE: this file no longer imported anywhere, need to examine whether -->
<!--! to make markdown rendering a component or a composable.  Either way -->
<!--! I do want it to be a piece of code distinct from the page View component -->
-->
<script>
// Accepts Markdown and renders HTML.  Created as a component for modularity
// vue3-markdown-it is 3.66mb.  marked is 409kb
import { marked } from 'marked'
import { computed, onMounted, onUpdated } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    
    const markdownToHtml = computed(() => {
      return marked(props.post.body)
    })
    
    onMounted(() => console.log('component mounted'))
    onUpdated(() => console.log('component updated'))
    
    console.log(props.post)
    
    return { markdownToHtml }
    
    //const markdown = props.source
  },
  // data(props) {
  //   //const markdown = props.source
  //   return {
  //     //markdown: '# hello world'
  //     markdown: props.source
  //   }
  // },
  // computed: {
  //   markdownToHtml() {
  //     return marked(this.markdown)
  //   }
  // }
}
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  
  <router-link :to="{ name: 'BlogPage', params: { id: post.id }}">
    <h3>{{ post.title }}</h3>
  </router-link>
  <div v-html="markdownToHtml"></div>
  
</template>

<style>

</style>