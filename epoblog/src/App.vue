<template>
  <body>
    <HeaderItem />
    <main>
      <img class="banner-image" alt="Vue logo" src="./assets/Super-Star-Destroyer-of-Fireplace-Mantels.jpg">
      <p>"Welcome to Your Vue.js App"</p>
      <PostLatest />
      <PostCategories />
    </main>
    <FooterItem />
  </body>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
import PostLatest from './components/PostLatest.vue'
import PostCategories from './components/PostCategories.vue'
//import BlogPost from './components/BlogPost.vue'
/* eslint-enable no-unused-vars */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html, body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.body {
  display: flex;
  flex-direction: column;
}

main {
    flex: auto;
    background-color: #ccc;
}

.banner-image {
  width: 100%;
  height: 15em;
  object-position: 0% 75%;
  object-fit: cover;
}
</style>
