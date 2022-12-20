import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Andrew',
      role: 'ADMIN',
    },
    favorites: [],
    list: [
      {
        id: '1',
        title: 'Горы',
        description: "Описание гор",
        category: 'mountain'
      },
      {
        id: '2',
        title: 'Горы 2',
        description: "Описание гор 2",
        category: 'mountain'
      },
      {
        id: '3',
        title: 'Горы 3',
        description: "Описание гор 3",
        category: 'mountain'
      },
      {
        id: '4',
        title: 'Лес 1',
        description: "Описание леса 1",
        category: 'forest'
      },
      {
        id: '5',
        title: 'Лес 2',
        description: "Описание леса 2",
        category: 'forest'
      },
      {
        id: '6',
        title: 'Река 1',
        description: "Описание реки 1",
        category: 'river'
      },
    ]
  },
  getters: {
    getUser: state => state.user,
    getUsers: state => ([state.user]),
    getList: state => state.list,
    getListByCategory: state => category => state.list.filter(item => item.category === category),
    getListFavorites: state => state.favorites
  },
  mutations: {
    addFavorite (state, payload) {
      state.favorites.push(payload)
    },
    removeFavorite(state, payload) {
      const objWithIdIndex = state.favorites.findIndex((obj) => obj === payload);

      if (objWithIdIndex > -1) {
        state.favorites.splice(objWithIdIndex, 1);
      }

    },
  },
  actions: {
    addFavorite ({ commit }, payload) {
      commit('addFavorite', payload)
    },
    removeFavorite ({ commit }, payload) {
      commit('removeFavorite', payload)
    },
  },

  modules: {
  }
})
