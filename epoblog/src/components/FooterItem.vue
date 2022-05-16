<script>
export default {
  data() {
    return {
      quote: {}
    }
  },

  mounted() {
    fetch('http://localhost:7071/quotes/random')
      .then(res => res.json())
      .then(data => this.quote = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<template>
  <footer>
    <p>{{ quote.quote }} by {{ quote.author }}</p>
  </footer>
</template>

<style>

footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: lightblue;
}

</style>