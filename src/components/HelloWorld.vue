<template>
  <div class="hello">
    <card-comp></card-comp>

    <el-card :body-style="{ padding: '0px', width: '200px' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <el-button type="text" class="button">Operating</el-button>
        </div>
      </div>
    </el-card>

    <h1>{{ msg }} - ({{ region }})</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import CardComp from './Card.vue'

export default {
  name: 'HelloWorld',
  components: {
    CardComp
  },
  props: {
    msg: String,
    region: {
      type: String,
      default: '00'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  color: red;
}
</style>
