import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: {
      map: null,
      parcelCoords: [],
    }
  },
  mutations: {
    setMap(state, payload) {
      state.map.map = payload;
    },
    setParcelCoords(state, payload) {
      state.map.parcelCoords = payload;
    }
  },
  actions: {

  }
})
