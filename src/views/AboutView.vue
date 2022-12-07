<template>
  <div class="about">
    <el-button type="primary" @click="jump">返回首页</el-button>
    <h1>{{ text }}</h1>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()
const text = ref<string>("我是about页面")
const jump = () => {
  router.push("/")
}
onMounted(() => {
  if (route.path) {
    text.value = "我不是谁"
  } else {

  }
})
</script>
<style>

</style>
