<script>
export default {
  data() {
    return {
      quote: []
    }
  },
  // note quotes/* returns a list, incl /random which returns a list of 1 quote
  // by default.  Thus the data[0] below
  mounted() {
    fetch('http://localhost:7071/quotes/random')
      .then(res => res.json())
      .then(data => this.quote = data[0])
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