<!--'PostList.vue' from The Net Ninja's tutorial-->
<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import PostCard from './PostCard.vue'

export default {
  // eslint-disable-next-line
  props: ['posts'],
  components: { PostCard },
  // eslint-disable-next-line
  setup() {
    onMounted(() => console.log('component mounted'))
    onUnmounted(() => console.log('component mounted'))
    onUpdated(() => console.log('component mounted'))
  },
}
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <a>Latest Posts</a>
  <div class="latest_wrapper">
    <div v-for="post in posts" :key="post.id">
      <PostCard :post="post" />
    </div>
  </div>
</template>

<style>
@media (min-width: 500px) {
  .category_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
    align-items: center;
    justify-items: center
  }
}

.latest_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

@media (min-width: 800px) {
  .latest_wrapper {
    flex-direction: row;
  }
}

.latest_card {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-basis: 25em;
  background-color:aliceblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
}

.card__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card__title {
  position: absolute;
  top: 20%;
  left: 10%;
}

.card__link {
  margin-top: auto; 
}

</style>