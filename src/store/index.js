import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: 'Andrew',
      role: 'ADMIN',
    },
    // Считываем данные о избранном из localStorage
    favorites: JSON.parse(localStorage.getItem('favorites')),
    list: [
      {
        id: '1',
        title: 'Горное озеро',
        description: "Озеро посреди величественных гор",
        image: "mountains1.jpg",
        category: 'mountain'
      },
      {
        id: '2',
        title: 'Исландский пейзаж',
        description: "Необычные горы в Исландии",
        image: "mountains2.jpg",
        category: 'mountain'
      },
      {
        id: '3',
        title: 'Снежные вершины',
        description: "Экстремальное покорение снежных вершин",
        image: "mountains3.jpg",
        category: 'mountain'
      },
      {
        id: '4',
        title: 'Зеленый лес',
        description: "Тропа здоровья среди леса, гуляя по которой можно дышать свежим воздухом",
        image: "forest1.jpg",
        category: 'forest'
      },
      {
        id: '5',
        title: 'Утренний лес',
        description: "Прогулка по живописному лесу рано утром",
        image: "forest2.jpg",
        category: 'forest'
      },
      {
        id: '6',
        title: 'Широкая река',
        description: "Большая горная река, по которой можно плавать на лодке",
        image: "river1.jpg",
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
      let localFavorites = localStorage.getItem("favorites")
      let localArrayFavorites = JSON.parse(localFavorites)

      localArrayFavorites.push(payload)

      localStorage.setItem("favorites", JSON.stringify(localArrayFavorites))

      state.favorites.push(payload)
    },
    removeFavorite(state, payload) {
      let localFavorites = localStorage.getItem("favorites")
      let localArrayFavorites = JSON.parse(localFavorites)

      const objWithIdIndex = state.favorites.findIndex((obj) => obj === payload);

      if (objWithIdIndex > -1) {
        state.favorites.splice(objWithIdIndex, 1);

        localArrayFavorites.splice(objWithIdIndex, 1);
      }

      localStorage.setItem("favorites", JSON.stringify(localArrayFavorites))

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
