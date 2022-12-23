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
import NavigationMenuComponent from "@/components/NavigationMenuComponent.vue";

export default {
  name: 'PageLayout',
  components: {NavigationMenuComponent},
}
</script>