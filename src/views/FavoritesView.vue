<template>
  <PageLayout>
    <div class="favorite">
      <h1>This is an favorite page</h1>
      <ListComponent name="Корзина" :list="listBasket" :favorites="listFavorites" :is-basket="true" />
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/layout/PageLayout.vue'
import ListComponent from "@/components/ListComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "FavoritesView",
  components: {ListComponent, PageLayout},
  computed: {
    ...mapGetters([
      'getListFavorites',
      'getList'
    ]),
    listBasket () {
      const list = []
      this.getListFavorites.forEach(id => {
        list.push(this.getList.find(item => item.id === id))
      })
      return list
    },
    listFavorites () {
      return this.getListFavorites
    },
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>