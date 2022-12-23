<template>
  <PageLayout>
    <div class="home">
      <h1 class="heading">Nature View</h1>
      <GalleryComponent/>
      <div class="description">
        Начните свое путешествие прямо сейчас:
      </div>
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

@font-face {
  font-family: "AubreyPro";
  src: url('@/assets/fonts/AubreyPro.otf');
}

.heading {
  font-size: 50px;
  text-align: center;
  font-family: AubreyPro,serif;
}

.navigation-links {
  padding: 24px;
}
.navigation-link {
  padding: 4px;
}

.description {
  font-size: 24px;
  text-align: center;
  padding-top: 16px;
  font-family: AubreyPro,serif;
}
</style>
