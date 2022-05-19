<template>
  <!--eslint-disable vue/no-multiple-template-root-->
  <div class="notfound">
    <h1>404</h1>
    <p>Did you mean to visit one of the following links instead?
    <ul style="text-align: left">
        <li> <router-link to="/">Home Page</router-link></li>
    </ul> 
    
    </p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: '404NotFound',
  components: {  }
}
</script>