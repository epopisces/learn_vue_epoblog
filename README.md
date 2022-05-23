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

# Considerations

## Serve markdown to client and render clientside, or serve prerendered?
Makes sense to serve markdown.  It's lightweight, and the client-side code is fairly lightweight too.  Major search engines will execute the JS to inspect the result

## Serve mermaid to client and render clientside, or server prerendered?
A trickier one.  Mermaid rendering is NOT lightweight. Could have a separate, headless chrome instance running alongside API, when mermaid would be delivered intercepts, renders, inserts PNG?  Seems. . .less than elegant heh

## Nav generated at buildtime or runtime?
Make an API call vs created at buildtime?  API call is more flexible, though I think there are ways to support in-browser page creation/editing either way.  Let's start with build time, can always alter in the future.

## Images in DB or hosted in Frontend?
Frontend: take advantage of CDN.  Image repo on the frontend with predictable paths for blog posts to include (and for frontmatter to reference for background image, etc)

# Goals

Trying to do several (too many) things at once.  Let's break it down
* [x] Front Page with styling
  * [x] splash graphic
  * [x] with two 'latest' objects centered below splash graphic
  * [ ] with a dynamic number of 'category' objects centered below latest
* [x] Header bar
  * [x] Working home button
  * [ ] (mobile) Dropdown menu
    * [ ] including categories
  * [ ] (desktop) Categories dropdown
  * [ ] (mobile) search icon
  * [ ] (desktop) search icon + entry
* [x] Footer bar
* [x] Support FontAwesome icons
* [x] Link to a blog page built from components
* [x] Render Markdown
* [ ] Render Mermaid
* [ ] Use frontmatter (see [frontmatter-markdown-loader](https://github.com/hmsk/frontmatter-markdown-loader), specifically [this issue](https://github.com/hmsk/frontmatter-markdown-loader/issues/238))
  * [ ] That I define
* [ ] Dynamically create list of categories from frontmatter
  * [ ] Used to generate list of category cards, as well as category list in menu
  * [ ] For icon to represent that category, grab matching $category.png or similar (use category-placeholder.png if missing)
* [ ] Dynamically create list of authors from frontmatter
* [ ] Dynamically identify 2 latest blog posts from frontmatter
  * [ ] Use to generate latest card content and link from front page

# Where I Left Off
I have a working single page, but no working links yet. Routing is in place for /blog/$category/$post, where category and post are passed to the BlogPage view

Considering using a Task (which runs every run serve/build) to generate a json doc that is used to dynamically construct objects for category, author, title, etc.

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
