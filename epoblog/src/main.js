import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Markdown from 'vue3-markdown-it'

/* import fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icon(s) */
import { faPhone } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faPhone)

const epoblog = createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(Markdown)
  .use(router)
/* add font awesome icon component */

epoblog.mount('#app')

/* References
https://vueschool.io/articles/vuejs-tutorials/the-benefits-of-the-vue-3-app-initialization-code/
*/