import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
//import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    alias: ['/index','/index.html'],
    name: 'Home',
    component: HomePage
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: About
  // },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    //* meta tag prevents robots indexing every url like a valid page
    meta: {
        title: '404 Not Found',
        metaTags: [
            {
                name: 'robots',
                content: 'noIndex'
            }
        ]
    }
  },
  // { 
  //   path: '/:catchAll(.*)',
  //   redirect: '/404' 
  // }
]

// Creates the router for the app, after being passed the route obj above
// createWebHistory creates the history necessary for back/forward browser buttons
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// well this got out of hand.  This code updates meta tags in the rendered HTML
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  
    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    } else if(previousNearestWithMeta) {
      document.title = previousNearestWithMeta.meta.title;
    }
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');
  
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });
  
      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');
  
      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));
  
    next();
  });

export default router
