The 6th iteration on this as I explore technologies.  My requirements going into it:
* markdown into blog posts
* mermaid support
* Vue 3 if at all possible

The path that has led me here included:

Vue 3
* started here because it is what I built my website in, but decided I wanted to try and use a more blog-oriented framework that might have a little more out of the box

Vue 2 + Gridsome
* really nice framework. Unfortunately seemed abandoned with a large number of vulnerable dependencies, didn't support Vue 3 and didn't seem likely to do so any time soon

Vitepress
* very new, seems like a really cool project but the documentation simply isn't there for someone who is not already a Vue expert

VuePress Next

Nuxt3
* similar to Vitepress only even newer.  Seems cool, but I'm not experienced enough to adopt such a cutting edge product (lacks support/templates/demos for novices)

Vue 3 again
* well for heaven sake's let's just roll our own on top of Vue 3!  If I'm going to have to invest the time would rather learn a capable, cutting edge framework with a wide range of possibilities at the same time
  * as a starting point, explored some templates and tutorials.  See [references](#references) for the most impactful ones.  Realized I need to start simple and do a building block style, iterative process to add the features I want.  Trying to modify templates was moving too fast for my knowedge of Vue, JavaScript, TypeScript, and all the other things being thrown into the mix.


# Goals

Trying to do several (too many) things at once.  Let's break it down

* [ ] I want the data layer separate from the frontend: I've seen both `/static/api/` and `/public/` used for data (such as blog post markdown).
  * it appears /static/api/ may be the better route?  See [this article](https://cli.vuejs.org/guide/html-and-static-assets.html#when-to-use-the-public-folder)
* [x] Support FontAwesome icons
* [ ] Link to a blog page built from components
* [ ] Render Markdown
* [ ] Render Mermaid
* [ ] Use frontmatter
  * [ ] That I define
* [ ] Dynamically create list of categories from frontmatter
  * [ ] Used to generate list of category cards, as well as category list in menu
  * [ ] For icon to represent that category, grab matching $category.png or similar (use category-placeholder.png if missing)
* [ ] Dynamically create list of authors from frontmatter
* [ ] Dynamically identify 2 latest blog posts from frontmatter
  * [ ] Use to generate latest card content and link from front page

# Where I Left Off
I have a working single page, but no links (or direct URLs) work. Need to prioritize and break this project down into bite-sized chunks (perhaps even separate projects to be recombined in the future)

> NOTE: the below dependencies are copied from my prior attempt, and do not accurately reflect the current state.


# Dependencies (3rd Party Components)

## Add'l Vue Components
* vue-router

## Font Awesome Vue Component
For obvious reasons.  This makes the fontawesome icons available to Vue.  See [Font Awesome's docs on Vue use](https://fontawesome.com/docs/web/use-with/vue) for details.
* fontawesome-svg-core
* free-regular-svg-icons
* free-solid-svg-icons
* vue-fontawesome@prerelease - _Note: prerelease required, installes Vue 3 compatible version_


# Markdown/Frontmatter/Mermaid Parsing & Rendering
* github-markdown-css
* markdown-it
<!--
* [vue3-markdown-it](https://github.com/JanGuillermo/vue3-markdown-it)
* [gray-matter](https://github.com/jonschlinkert/gray-matter)

## UX Components
* [scrollto-with-animation](https://github.com/davesnx/
scrollto-with-animation) - 3.2k
old deps, may with to use still -->

# What I've Tried
[Nicolas Udy's Vue.js Blog Demo](https://snipcart.com/blog/vuejs-blog-demo).  Imported and slightly modified the [snipcart Vue Blog Demo](https://github.com/snipcart/vue-blog-demo/blob/master/src/router/index.js) after reading the [Killer Vue Blog Demo](https://snipcart.com/blog/vuejs-blog-demo). Takeaways:
* Got the JAMstack separation of data layer across to me in ways Gridsome did not

[Yeikiu's vue3-md-blog template](https://yeikiu.github.io/vue3-md-blog/#/) -  Ultimately moved away from this template as it introduced more new concepts than I was able to take on--modifying anything (eg introducing Markdown) had too great a learning curve given TypeScript which was entirely new to me.  Takeaways:
* script to generate index file from folder

# References

* [Yeikiu's vue3-md-blog template](https://yeikiu.github.io/vue3-md-blog/#/)
* [Nicolas Udy's Vue.js Blog Demo](https://snipcart.com/blog/vuejs-blog-demo)


# Usage

```ps
# install deps
npm install

# run local dev server
npm run serve

# update list of categories & blog posts
npm run build:index

```

## Using FontAwesome Icons
`main.js`
```js
/* import specific icon(s) & add to the library */
import { faHouse } from '@fortawesome/free-solid-svg-icons'
library.add(faHouse)
```
`$Component.vue`
```html
<template>
  ...
  <font-awesome-icon icon="house" />
  ...
</template>
```

## Using a Task-like NPM Script
The `npm run build:index` command will run the [generate_index.ts](./scripts/generate_index.ts) script to populate the [posts_index.json](./public/blog_store/posts_index.json) file
