<template>
  <div class="list">
    <h2 class="heading" >{{ name }}</h2>
    <div align="center">
      <div v-for="(item, index) in list" :key="index" align="center">
        <CardComp
            :id="item.id"
            :image-src="item.image"
            :title="item.title"
            :description="item.description"
            :coordinates="item.coordinates"
            :is-favorite="favorites.findIndex(((obj) => obj === item.id)) === -1" />
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
  },

}
</script>

<style scoped>

@font-face {
  font-family: "AubreyPro";
  src: url('@/assets/fonts/AubreyPro.otf');
}

.heading {
  font-size: 42px;
  text-align: center;
  font-family: AubreyPro,serif;
}

</style>
