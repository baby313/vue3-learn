<template>
  <div>child</div>
  <div>{{ isShowDialog }}</div>
</template>
<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const isShowDialog = ref(false)

    const toggle = () => {
      isShowDialog.value = !isShowDialog.value
    }

    return {
      isShowDialog,
      toggle
    }
  }
})

</script>
