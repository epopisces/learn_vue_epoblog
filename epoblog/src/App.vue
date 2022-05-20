<script setup>
/* eslint-disable no-unused-vars */
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'
/* eslint-enable no-unused-vars */
</script>

<template>
  <body>
    <HeaderItem />
      <router-view />
    <FooterItem />
  </body>
</template>

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
