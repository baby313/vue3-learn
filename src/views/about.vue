<template>
  <!-- 挂载DOM元素 -->
  <p ref="msg">
    留意该节点，有一个ref属性
  </p>

  <div @click="chnageChild">change</div>
  <!-- 挂载DOM元素 -->

  <!-- 挂载子组件 -->
  <Child ref="child" />
  <!-- 挂载子组件 -->

  <div v-for="item in list" :key="item.id">{{ item.id }}</div>

  <Reactive />
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import Child from '@/components/Child.vue'
import Reactive from '@/components/Reactive.vue'

const msg = ref(null)
const child = ref(null)

const chnageChild = () => {
  child.value.toggle()
}

onMounted(() => {
  console.log(msg.value)
  console.dir(child.value)
})

const list = reactive([{ id: 1 }, { id: 2 }, { id: 3 }])
// 丢失响应性
// list = []

// 不会破坏响应性
// list.length = 0

setTimeout(() => {
  list.push({ id: 4 })
}, 2000)
</script>

<style scoped lang="less">
</style>
