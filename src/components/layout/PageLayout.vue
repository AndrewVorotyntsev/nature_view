<template>
    <div class="page-layout">
        <header>
            <slot name="header">
                <el-menu class="el-menu-demo" mode="horizontal" :router="true" >
                    <el-menu-item index="1" :route="{ name: 'home' }">Home</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">Places</template>
                        <el-menu-item index="2-1" :route="{ name: 'places', params: { name: 'mountain' } }">Горы</el-menu-item>
                        <el-menu-item index="2-2" :route="{ name: 'places', params: { name: 'forest' } }">Леса</el-menu-item>
                      <el-menu-item index="2-3" :route="{ name: 'places', params: { name: 'river' } }">Реки</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" :route="{ name: 'favorites' }">Favorites</el-menu-item>
                    <el-menu-item index="4" :route="{ name: 'about' }">About</el-menu-item>
                </el-menu>
            </slot>
        </header>
        <slot>Не найдено</slot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PageLayout',
    computed: {
        ...mapGetters([
            'getListBasket'
        ]),
        countBasket () {
            return this.getListBasket.length
        }
    }
}
</script>

<style lang="less">
</style>