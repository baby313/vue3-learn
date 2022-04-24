<template>
  <div>
    style module
  </div>
  <p :class="$style.msg">Hello World!</p>
  <div>useCssModule</div>

  <p :class="$style.msg">
    <span :class="$style.text">Hello World!</span>
  </p>

  <div v-html="content" />
</template>

<script setup>
import { useCssModule } from 'vue'

const style = useCssModule()
console.log(style)

// 编写模板内容
const content = `<p class="${style.msg}">
      <span class="${style.text}">Hello World! —— from v-html</span>
    </p>`
// 需要注意的一点是，一旦开启 <style module> ，那么在 <style module> 里所编写的样式，都必须手动绑定才能生效，没有被绑定的样式，会被编译，但不会主动生效到你的 DOM 上。

// 原因是编译出来的样式名已经变化，而你的 DOM 未指定对应的样式名，或者指定的是编译前的命名，所以并不能匹配到正确的样式。
</script>

<style module>
.msg {
  color: #ff0000;
}
.text {
  font-size: 14px;
}
</style>
