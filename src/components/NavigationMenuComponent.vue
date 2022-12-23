<template>
  <el-menu class="el-menu-demo" mode="horizontal" :router="true"
           background-color="#adacf5"
           text-color="#fff"
           active-text-color="#6000ff">
    <el-menu-item index="1" :route="{ name: 'home' }">Home</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Places</template>
      <el-menu-item index="2-1" :route="{ name: 'places', params: { category: 'mountain' } }">Горы</el-menu-item>
      <el-menu-item index="2-2" :route="{ name: 'places', params: { category: 'forest' } }">Леса</el-menu-item>
      <el-menu-item index="2-3" :route="{ name: 'places', params: { category: 'river' } }">Реки</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" :route="{ name: 'favorites' }">Favorites</el-menu-item>
    <el-menu-item index="4" :route="{ name: 'about' }">About</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'NavigationMenuComponent'
}
</script>
