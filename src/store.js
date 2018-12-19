import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: {
      map: null,
      basemap: 'PI',
      parcelCoords: [],
      shouldShowCircleMarker: false,
    }
  },
  mutations: {
    setMap(state, payload) {
      state.map.map = payload;
    },
    setParcelCoords(state, payload) {
      state.map.parcelCoords = payload;
    },
    setBasemap(state, payload) {
      state.map.basemap = payload;
    },
    setShouldShowCircleMarker(state, payload) {
      state.map.shouldShowCircleMarker = payload;
    }
  },
  actions: {

  }
})
