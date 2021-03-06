import Vue from 'vue';
import Vuex from 'vuex';
import logger from '@/plugins/logger'
import login from './modules/login';


Vue.use(Vuex);

export default () => new Vuex.Store({
  modules:{
    login,
  },
  strict: true,
  plugins: [logger] 
})