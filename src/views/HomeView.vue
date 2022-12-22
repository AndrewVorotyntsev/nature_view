<template>
  <PageLayout>
    <div class="home">
      <GalleryComponent/>
      <div align="center" class="navigation-links">
        <router-link class="navigation-link" to="/places/forest">
          <el-button type="primary" icon="el-icon-location">Леса</el-button>
        </router-link>
        <router-link class="navigation-link" to="/places/river">
          <el-button type="primary" icon="el-icon-location">Реки</el-button>
        </router-link>
        <router-link class="navigation-link" to="/places/mountain">
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

<style>
.navigation-links {
  padding: 24px;
}
.navigation-link {
  padding: 4px;
}
</style>
