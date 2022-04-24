<template>

  <div>批量watchEffect</div>
  <div>1.watch 可以访问侦听状态变化前后的值，而 watchEffect 没有</div>
  <div>2.watch 是在属性改变的时候才执行，而 watchEffect 则默认会执行一次，然后在属性改变的时候也会执行。</div>
  <div>对比 watch API ，它不支持 deep 和 immediate ，请记住这一点，其他的用法是一样的</div>
</template>

<script setup>
import { ref, watchEffect, watch } from 'vue'
// 单独定义两个数据，后面用来分开改变数值
const name = ref('Petter')
const age = ref(18)

// 定义一个调用这两个数据的函数
const getUserInfo = () => {
  console.log({
    name: name.value,
    age: age.value
  })
}

// 2s后改变第一个数据
setTimeout(() => {
  name.value = 'Tom'
}, 2000)

// 4s后改变第二个数据
setTimeout(() => {
  age.value = 20
}, 4000)

// 直接监听调用函数，在每个数据产生变化的时候，它都会自动执行
watchEffect(getUserInfo)

const foo = ref('')

setTimeout(() => {
  foo.value = 'Hello World!'
}, 2000)

function bar() {
  console.log(foo.value)
}

// 使用 watch 需要先手动执行一次
bar()

// 然后当 foo 有变动时，才会通过 watch 来执行 bar()
watch(foo, bar)

// 可以通过 watchEffect 实现 bar() + watch(foo, bar) 的效果
watchEffect(bar)
</script>

<style lang="scss" scoped>
</style>
