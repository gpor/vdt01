
const state = {
  componentName: null,
  data: {},
}

const getters = {
  getPageModalComponentName: state => state.componentName,
  getPageModalData: state => state.data,
}

const actions = {
  openModal({ commit }, { componentName, data }) {
    commit('setData', data)
    commit('setComponentName', componentName)
  },
  closeModal({ commit }) {
    commit('setComponentName', null)
  },
}

const mutations = {
  setComponentName: (state, componentName) => {
    state.componentName = componentName
  },
  setData: (state, data) => {
    state.data = data
  },
}


export default {
  state,
  getters,
  actions,
  mutations,
}
