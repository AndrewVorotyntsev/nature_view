<template>
  <div class="list">
    <h2>{{ name }}</h2>
    <el-card v-for="(item, index) in list" :key="index" :body-style="{ padding: '0px', width: '200px' }">
      <img :src="item.img" class="image">
      <div>
        <span>{{ item.title }}<span v-if="isBasket"> - ({{ item.price }})</span></span>
        <div v-if="favorites.findIndex(((obj) => obj === item.id)) === -1" class="bottom clearfix">
          <el-button type="text" class="button" @click="add(item.id)">Добавить в избранное</el-button>
        </div>
        <div v-else class="bottom clearfix">
          <el-button type="text" class="button" @click="remove(item.id)">Удалить из избранного</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ListComponent',
  props: {
    name: {
      type: String,
      default: 'Категория'
    },
    list: {
      type: Array,
      default: () => ([])
    },
    favorites: {
      type: Array,
      default: () => ([])
    },
    isBasket: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    ...mapActions([
      'addFavorite',
      'removeFavorite'
    ]),
    add (id) {
      console.log('fav' + this.favorites.length)
      this.addFavorite(id)
    },
    remove (id) {
      console.log('fav  - ' + this.favorites.length)
      this.removeFavorite(id)
    },
  }
}
</script>

<style scoped>
</style>
