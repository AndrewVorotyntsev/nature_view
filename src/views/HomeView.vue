<template>
  <PageLayout>
    <div class="home">
      <GalleryComponent/>
      <div align="center">
        <el-button type="primary" icon="el-icon-location">Леса</el-button>
        <el-button type="primary" icon="el-icon-location">Реки</el-button>
        <el-button type="primary" icon="el-icon-location">Горы</el-button>
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
