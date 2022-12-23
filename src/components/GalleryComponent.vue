<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 3" :key="item" align="center">
        <div v-if="item === 1" >
          <img src=@/assets/mountains1.jpg class="gallery-image"  alt=""/>
        </div>
        <div v-if="item === 2" >
          <img src=@/assets/river1.jpg class="gallery-image" alt=""/>
        </div>
        <div v-if="item === 3" >
          <img src=@/assets/forest1.jpg class="gallery-image" alt=""/>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .gallery-image{
    height: 400px;
    width: auto;
  }
</style>