<template>
  <div class="css-vue3">
    CSS 样式与预处理器
  </div>
  <p :class="activeClass">Hello World!</p>

  <p :class="[activeClass1, activeClass2]">Hello World!</p>

  <p :class="{ 'active-class': isActive }">Hello World!</p>

  <p
    :class="[
      { activeClass1: isActive },
      { activeClass2: !isActive }
    ]"
  >
    Hello World!
  </p>

  <ul class="list">
    <li
      v-for="(item, index) in 5"
      :key="index"
      class="item"
      :class="{ cur: index === curIndex }"
      @click="curIndex = index"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const activeClass = 'active-class'
const activeClass1 = 'active-class1'
const activeClass2 = 'active-class2'

const isActive = true

const curIndex = ref(0)
</script>

<style lang="less" scoped>
.css-vue3 {
  background-color: skyblue;
}

.active-class {
  color: red;
}

.active-class1 {
  font-size: 18px;
}

.active-class2 {
  font-weight: 600;
}
</style>
