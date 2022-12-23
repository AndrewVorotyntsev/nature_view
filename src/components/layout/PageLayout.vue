<template>
    <div class="page-layout">
        <header>
            <slot name="header">
              <NavigationMenuComponent/>
            </slot>
        </header>
        <slot>Не найдено</slot>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import NavigationMenuComponent from "@/components/NavigationMenuComponent.vue";

export default {
    name: 'PageLayout',
  components: {NavigationMenuComponent},
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

<style>

.menu {
  color: #6000ff;
}
</style>