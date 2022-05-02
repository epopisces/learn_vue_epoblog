The 5th iteration on this, perhaps, as I explore technologies.  My requirements:
* markdown into blog posts
* mermaid support
* Vue 3 if at all possible

The path that has led me here included:

Vue 3
* started here because it is what I built my website in, but decided I wanted to try and use a more blog-oriented framework that might have a little more out of the box
Vue 2 + Gridsome
* really nice framework. Unfortunately seemed abandoned with a large number of vulnerable dependencies, and didn't support Vue 3 nor had any signs of doing so
Vitepress
* very new, seems like a really cool project but the documentation simply isn't there for someone who is not already a Vue expert
VuePress Next
Nuxt
Vue 3 again
* well for heaven sake's let's just roll our own on top of Vue 3!  If I'm going to have to invest the time would rather learn a capable, cutting edge framework with a wide range of possibilities at the same time

# Goals

Trying to do several (too many) things at once.  JAMstack is an awesome concept, and data layer separation makes sense.

* I want the data layer separate from the frontend: created `/static/api/` for data (such as blog post markdown).
* Render Markdown
* Render Mermaid
* Use frontmatter
* Dynamically create list of categories from frontmatter
  * Used to generate list of category cards, as well as category list in menu
  * For icon to represent that category, grab matching $category.png or similar (use category-placeholder.png if missing)
* Dynamically create list of authors from frontmatter
* Dynamically identify 2 latest blog posts from frontmatter
  * Use to generate latest card content and link from front page

# Where I Left Off...

I have a working single page, but no links (or direct URLs) work.  Imported and slightly modified the [snipcart Vue Blog Demo](https://github.com/snipcart/vue-blog-demo/blob/master/src/router/index.js) after reading the [Killer Vue Blog Demo](https://snipcart.com/blog/vuejs-blog-demo), but it isn't accesssible yet (and I think some dependencies aren't present).  Need to prioritize and break this project down into bite-sized chunks (perhaps even separate projects to be recombined in the future)

# Dependencies (3rd Party Cmponents)

## Add'l Vue Components
* vue-router


## Font Awesome Vue Component
For obvious reasons.  This makes the fontawesome icons available to Vue.  See [Font Awesome's docs on Vue use](https://fontawesome.com/docs/web/use-with/vue) for details.
* fontawesome-svg-core
* free-regular-svg-icons
* free-solid-svg-icons
* vue-fontawesome

# Markdown/Frontmatter/Mermaid Parsing & Rendering
* [vue3-markdown-it](https://github.com/JanGuillermo/vue3-markdown-it)
* [gray-matter](https://github.com/jonschlinkert/gray-matter)

## UX Components
* [scrollto-with-animation](https://github.com/davesnx/scrollto-with-animation) - 3.2k

# References
