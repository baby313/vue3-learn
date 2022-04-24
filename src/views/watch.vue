<template>
  <div>
    watch
  </div>
  <div>
    {{ userInfo }}
  </div>

  <div>批量watch</div>

  <div>{{ message }}</div>
  <div>{{ nums }}</div>

</template>

<script setup>
import { reactive, watch, ref, watchEffect } from 'vue'
// 定义一个响应式数据
const userInfo = reactive({
  name: 'Petter',
  age: 18
})

// 2s后改变数据
setTimeout(() => {
  userInfo.name = 'Tom'
}, 2000)

/**
 * 可以直接监听这个响应式对象
 * callback 的参数如果不用可以不写
 */
watch(userInfo, () => {
  console.log('监听整个 userInfo ', userInfo.name)
})

/**
 * 也可以监听对象里面的某个值
 * 此时数据源需要写成 getter 函数
 */
watch(
  // 数据源，getter 形式
  () => userInfo.name,
  // 回调函数 callback
  (newValue, oldValue) => {
    console.log('只监听 name 的变化 ', userInfo.name)
    console.log('打印变化前后的值', { oldValue, newValue })
  }
)

// 定义多个数据源
const message = ref('')
const index = ref(0)

// 2s后改变数据
setTimeout(() => {
  message.value = 'foo!'
  message.value = 'Hello World!'
  index.value++
}, 2000)

watch(
  // 数据源改成了数组
  [message, index],
  // 回调的入参也变成了数组，每个数组里面的顺序和数据源数组排序一致
  ([newMessage, newIndex], [oldMessage, oldIndex]) => {
    console.log('message 的变化', { newMessage, oldMessage })
    console.log('index 的变化', { newIndex, oldIndex })
  }
)

watch(
  message,
  () => {
    console.log('触发监听immediate', message.value)
  },
  // 设置 immediate 选项
  {
    immediate: true
  }
)

// 定义一个响应式数据，注意我是用的 ref 来定义
const nums = ref([])

// 2s后给这个数组添加项目
setTimeout(() => {
  nums.value.push(1)

  // 可以打印一下，确保数据确实变化了
  console.log('修改后', nums.value)
}, 2000)

// 但是这个 watch 不会按预期执行
watch(
  nums,
  // 这里的 callback 不会被触发
  () => {
    console.log('触发监听', nums.value)
  },
  // 因为关闭了 deep
  {
    deep: false
  }
)
</script>

<style lang="scss" scoped>
</style>
