<template>
  <div>
    使用 :style 动态修改内联样式
  </div>
  <p
    :style="{
      fontSize: '13px',
      'line-height': 2,
      color: '#ff0000',
      textAlign: 'center'
    }"
  >
    Hello World!
  </p>

  <p
    :style="[style1, style2]"
  >
    Hello World!
  </p>

  <p class="msg">Hello World!</p>
</template>

<script setup>
import { ref } from 'vue'
const style1 = {
  fontSize: '13px',
  'line-height': 2
}
const style2 = {
  color: '#ff0000',
  textAlign: 'center'
}

// 3.2.0 版本之后
const fontColor = ref('#ff0000')
</script>

<style lang="less" scoped>
.msg {
  color: v-bind(fontColor);
}
</style>
