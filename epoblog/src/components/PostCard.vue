<!--'SinglePost.vue' from The Net Ninja's tutorial-->
<script>
import { computed } from 'vue'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0,100) + '....'
    })

    return { snippet }
  },
}
</script>

<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <article class="latest_card">
    <img src="../assets/logo.png" alt="" />
    <div class="card__content">
      <h2 class="card__title">{{ post.title }}</h2>
      <p> {{ snippet }} </p>
      <!-- <span v-for="tag in posts[0].tags" :key="tag">
        #{{ tag }}
      </span> -->
      <p class="post__link"><a href="#">Read more</a></p>
    </div>
  </article>
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