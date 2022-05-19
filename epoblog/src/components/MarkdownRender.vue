<script>
// Accepts Markdown and renders HTML.  Created as a component for modularity
// vue3-markdown-it is 3.66mb.  marked is 409kb
//import { marked } from 'marked'
import { computed, onMounted, onUpdated } from 'vue'
export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.substring(0,100)
    })
    onMounted(() => console.log('component mounted'))
    onUpdated(() => console.log('component updated'))
    console.log(props.post)
    return { snippet }
    
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
  <span>{{ snippet }}</span>
  <router-link :to="{ name: 'BlogPage', params: { id: post.id }}">
    <h3>{{ post.title }}</h3>
  </router-link>
  <!--<div v-html="markdownToHtml"></div>-->
  
</template>

<style>

</style>