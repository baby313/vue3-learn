<template>
  <div>
    计算属性computed
  </div>
  <div>{{ fullName }}</div>
</template>

<script setup>
import { computed, ref } from 'vue'

// // 定义基本的数据
// const firstName = ref('Bill')
// const lastName = ref('Gates')

// // 定义需要计算拼接结果的数据
// const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// // 2s 后改变某个数据的值
// setTimeout(() => {
//   firstName.value = 'Petter'
// }, 2000)

// 还是这2个数据源
const firstName = ref('Bill')
const lastName = ref('Gates')

// 这里我们配合setter的需要，改成了另外一种写法
const fullName = computed({
  // getter我们还是返回一个拼接起来的全名
  get() {
    return `${firstName.value} ${lastName.value}`
  },
  // setter这里我们改成只更新firstName，注意参数也定义TS类型
  set(newFirstName) {
    firstName.value = newFirstName
  }
})
console.log(fullName.value) // 输出 Bill Gates

// 2s后更新一下数据
setTimeout(() => {
  // 对fullName的赋值，其实更新的是firstName
  fullName.value = 'Petter'

  // 此时firstName已经得到了更新
  console.log(firstName.value) // 会输出 Petter

  // 当然，由于firstName变化了，所以fullName的getter也会得到更新
  console.log(fullName.value) // 会输出 Petter Gates
}, 2000)
</script>

<style lang="scss" scoped>
</style>
