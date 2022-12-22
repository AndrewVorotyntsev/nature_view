<template>
  <PageLayout>
    <div class="home">
      <GalleryComponent/>
      <div align="center">
        <router-link to="/places/forest">
          <el-button type="primary" icon="el-icon-location">Леса</el-button>
        </router-link>
        <router-link to="/places/river">
          <el-button type="primary" icon="el-icon-location">Реки</el-button>
        </router-link>
        <router-link to="/places/mountain">
          <el-button type="primary" icon="el-icon-location">Горы</el-button>
        </router-link>

      </div>
    </div>
  </PageLayout>
</template>

<script>
// @ is an alias to /src
import PageLayout from '@/components/layout/PageLayout.vue'
import GalleryComponent from "@/components/GalleryComponent.vue";

export default {
  name: 'HomeView',
  components: {
    GalleryComponent,
    PageLayout,
  }
}
</script>
