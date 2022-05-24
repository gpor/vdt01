import Vue from 'vue'
import './sass/app.scss'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import pageModal from './vuex/pageModal'
import videosAndTasks from './vuex/videosAndTasks'

Vue.use(Vuex);



const store = new Vuex.Store({
  modules: {
    pageModal,
    videosAndTasks,
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
