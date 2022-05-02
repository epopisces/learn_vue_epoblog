<template>
  <transition appear name="v--mask">
    <footer v-once class="blog__footer">
      <a class="signature" href="https://epopisces.com" target="_blank">
        <img src="../assets/logo.png"/>
      </a>
    </footer>
  </transition>
</template>

<script>
export default { name: 'blog-footer' }
</script>