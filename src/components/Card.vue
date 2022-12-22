<template>
      <div class="card">
        <div class="container">
          <img :src="itemImage" alt="image">
        </div>
        <div class="details">
          <h3> {{ title }}</h3>
          <p> {{ description }} </p>
        </div>
        <div v-if="isFavorite" class="bottom clearfix">
          <el-button type="text" class="button" @click="add(id)">Добавить в избранное</el-button>
        </div>
        <div v-else class="bottom clearfix">
          <el-button type="text" class="button"  @click="remove(id)" >Удалить из избранного</el-button>
        </div>
      </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'CardComp',
  props: {
    id: String,
    title: String,
    description: String,
    isFavorite: Boolean,
    imageSrc: {
      type: String,
      default: "lasvegas.jpg"
    },
  },
  computed: {
    itemImage() {
      if (!this.imageSrc) {
        return
      }
      const fileName = this.imageSrc.toLowerCase();
      return require(`@/assets/${fileName}`);
    }
  },
  methods: {
    ...mapActions([
      'addFavorite',
      'removeFavorite'
    ]),
    add (id) {
      this.addFavorite(id)
    },
    remove (id) {
      this.removeFavorite(id)
    },
  }
}
</script>

<style>
  .card{
    background-color: #1c1b29;
    border-radius: 20px;
    width: 800px;
    box-shadow: 0 0 30px rgba(0,0,0,0.18);
  }

  img{
    width: 100%;
    display: block;
    border-radius: 20px 20px 0 0;
  }

  .details{
    padding: 20px 10px;
  }

  .details>h3{
    color: #ffffff;
    font-weight: 600;
    font-size: 18px;
    margin: 10px 0 15px 0;
  }

  .details>p{
    color: #a0a0a0;
    font-size: 15px;
    line-height: 30px;
    font-weight: 400;
  }

</style>