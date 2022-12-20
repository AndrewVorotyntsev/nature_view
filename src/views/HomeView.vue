<template>
  <PageLayout>
    <div class="home">
      <GalleryComponent/>
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
