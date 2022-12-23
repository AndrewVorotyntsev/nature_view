<template>
  <PageLayout>
    <div class="about" align="center">
      <h1 class="heading">Nature View</h1>
      <div class="about-description">
        Проект нужен для того чтобы искать удивительные места для путешествий
      </div>
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
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

.about-description {
  font-size: 24px;
  font-family: AubreyPro,serif;
}

</style>