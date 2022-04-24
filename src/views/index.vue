<template>
  <div>{{ obj }}</div>

  <!-- <div>{{ obj.age }} : {{ age }}</div> -->
  <!-- <div>{{ copy.count }}</div> -->
  <!-- toRow -->
  <!-- <div>{{ state }}</div> -->

  <div @click="changestate">change</div>

  <!-- <div>{{ statemarkonj }}</div> -->

  <!-- <div>{{ shallstate }}</div> -->

  <input v-model="text">

  {{ text }}
</template>

<script setup>
import {
  reactive,
  ref,
  readonly,
  watchEffect,
  isProxy,
  isReactive,
  isReadonly,
  toRaw,
  markRaw,
  shallowReactive,
  shallowReadonly,
  customRef,
  watch
} from 'vue'
const age = ref(18)
const obj = reactive({ count: 0, name: 'zc', age })
// obj.age = age.value
setInterval(() => {
  obj.count++
  obj.age++
}, 1000)

// const fonj = {
//   name: 'tom',
//   age: 20
// }
// const state = reactive(fonj)
// const tobj = toRaw(state)

// const changestate = () => {
//   tobj.age++
// }

// const statemarkonj = reactive({
//   name: 'markRow',
//   age: 30
// })
// const markobj = markRaw(statemarkonj)

// setInterval(() => {
//   markobj.age++
// }, 1000)

// console.log(tobj)
// console.log(state)
// console.log(isProxy(obj))
// console.log(isProxy(age))

// console.log(isReactive(obj))
// console.log(isReactive(age))

// const original = reactive({ count: 0 })

// const copy = readonly(original)

// console.log(isReadonly(original))
// console.log(isReadonly(copy))
// watchEffect(() => {
//   // 用于响应性追踪
//   console.log(obj.name)
//   console.log(copy.count)
// })

// // 变更 original 会触发依赖于副本的侦听器
// original.count++

// // 变更副本将失败并导致警告
// copy.count++ // 警告!

// const shallstate = shallowReactive({
//   foo: 1,
//   nested: {
//     bar: 2,
//     run: {
//       oo: 2,
//       gg: {
//         ss: 0
//       }
//     }
//   }
// })

// shallstate.foo++

// console.log('shallstate', isReactive(shallstate.nested.run.gg))

// setInterval(() => {
//   shallstate.nested.run.gg.ss++
// }, 1000)

function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue.toLocaleUpperCase()
          trigger()
        }, delay)
      }
    }
  })
}

const text = useDebouncedRef('hello')

// watch(text, (text, pretext) => {
//   console.log('text value', text)
//   console.log('text prevalue', pretext)
// })

// watch(
//   [text, () => obj.age],
//   ([text, obj], [pretext, preobj]) => {
//     console.log('text value', text)
//     console.log('text prevalue', pretext)

//     console.log('state value', obj)
//     console.log('state prevalue', preobj)
//   },
//   { deep: true }
// )
</script>

<style scoped lang="less">
</style>
