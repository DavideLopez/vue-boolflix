import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'




/* add icons to the library */
library.add(faStar)  // per aggiungere altre icone, duplichiamo la riga , o mettiamo le virgole 

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
