<template>
  <PageLayout>
    <div class="places">
      <h1>This is an places page</h1>
      <ListComponent :name="titleCategory" :list="listCategory" :favorites="listFavorites"/>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "@/components/layout/PageLayout.vue";
import ListComponent from "@/components/ListComponent.vue";
import {mapGetters} from "vuex";

export default {
  name: "PlacesView",
  components: {ListComponent, PageLayout},
  computed: {
    ...mapGetters([
      'getListFavorites',
      'getListByCategory',
      'getList',
    ]),
    listFavorites () {
      return this.getListFavorites
    },
    titleCategory () {
      const category = this.$route.params.category
      switch (category) {
        case 'mountain': {
          return 'Горы'
        }
        case 'forest': {
          return 'Леса'
        }
        case 'river': {
          return 'Реки'
        }
        default: {
          return 'Не найдено'
        }
      }
    },
    listCategory () {
      return this.getListByCategory(this.$route.params.category)
    },
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>