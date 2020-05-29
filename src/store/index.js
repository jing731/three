import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user')) // 用户的token等数据
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 由于容器刷新，数据就消失，所以持久化到本地
      window.localStorage.setItem('user', JSON.stringify(this.state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
