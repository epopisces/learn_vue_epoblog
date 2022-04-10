import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icon(s) */
import { faPhone } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faPhone)

//const epoblog = 
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app')
/* add font awesome icon component */
