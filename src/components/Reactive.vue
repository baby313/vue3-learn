<template>
  <div>
    不要对通过 reactive 定义的对象进行解构，解构后得到的变量会失去响应性
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const userInfo = reactive({
      name: 'wang',
      age: 18
    })

    setTimeout(() => {
      userInfo.name = 'chang name'
    }, 2000)

    return {
      // 这样return出去给模板用，在2s后也不会同步更新
      // ...userInfo,
      ...toRefs(userInfo)
    }
  }
})
</script>

<style scoped lang="less">

</style>
