<template>
  <div class="list">
    <h2>{{ name }}</h2>
<!--    <el-card v-for="(item, index) in list" :key="index" :body-style="{ padding: '0px', width: '200px' }">-->
<!--      <img :src="item.img" class="image">-->
<!--      <div>-->
<!--        <span>{{ item.title }}<span v-if="isBasket"> - ({{ item.price }})</span></span>-->
<!--        <div v-if="favorites.findIndex(((obj) => obj === item.id)) === -1" class="bottom clearfix">-->
<!--          <el-button type="text" class="button" @click="add(item.id)">Добавить в избранное</el-button>-->
<!--        </div>-->
<!--        <div v-else class="bottom clearfix">-->
<!--          <el-button type="text" class="button" @click="remove(item.id)">Удалить из избранного</el-button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </el-card>-->
    <div align="center">
      <div v-for="(item, index) in list" :key="index" align="center">
        <CardComp :id="item.id" :image-src="item.image" :title="item.title" :description="item.description" :is-favorite="favorites.findIndex(((obj) => obj === item.id)) === -1" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComp from "@/components/Card.vue";

export default {
  name: 'ListComponent',
  components: {CardComp},
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
  }
}
</script>

<style scoped>
</style>
