<template>
  <router-link v-for="item in filterRouter" :key="item.name" :to="item.path">{{ item.name }} / </router-link>
  <router-view />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
const routers = useRouter()

const filterRouter = computed(() => {
  return routers.options.routes.filter((item) => item.name)
})
</script>

<style>
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
