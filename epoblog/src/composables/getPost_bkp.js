import { ref } from 'vue'

const getPost = (id) => {
  
  const post = ref()
  const error = ref(null)
  
  const load = async () => {
    try {
      let data = await fetch('http://localhost:7071/blog/posts/' + id) 
      console.log(data)
      // error handling when API is unavailable or req malformed
      if (!data.ok) {
        throw Error('that post does not exist')
      }

      post.value = await data.json()
      
      console.log(post)
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return { post, error, load }
}

export default getPost