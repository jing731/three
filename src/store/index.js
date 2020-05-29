import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/store/storage'
Vue.use(Vuex)
const USER_KEY = 'user'
export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)
    // user: JSON.parse(window.localStorage.getItem('user')) // 用户的token等数据
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(USER_KEY, state.user)
      // 由于容器刷新，数据就消失，所以持久化到本地
      // window.localStorage.setItem('user', JSON.stringify(this.state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
