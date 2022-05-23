import { ref } from 'vue'

const getPosts = () => {
  
  const posts = ref([])
  const error = ref(null)
  console.log(posts)
  
  const load = async () => {
    try {
      let data = await fetch('http://localhost:7071/blog/posts') 
      
      console.log(data)
      // error handling when API is unavailable or req malformed
      if (!data.ok) {
        throw Error('no data available')
      }

      posts.value = await data.json()
      console.log(posts)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { posts, error, load }
}

export default getPosts