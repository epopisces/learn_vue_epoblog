<template>
  <div>
    <h1>The blog is {{ $route.params.post }}</h1>
    <h1>Within the category {{ $route.params.category }}</h1>
  </div>
</template>

<!-- ###########################################################################
So I'm thinking this view (or the primary component it uses) should accept markdown as a 'body', and process it through
the appropriate components (third party or otherwise) to render it
############################################################################ -->