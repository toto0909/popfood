import Vue from 'vue'
import Vuex from 'vuex'
import { StoreOptions } from 'vuex';
import { RootState } from './types';
import { search } from './Search';

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    search,
  },
};

Vue.use(Vuex)
export default new Vuex.Store<RootState>(store);

/*
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
*/
