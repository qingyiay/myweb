<template>
  <div class="page-content">
    <h2>{{ content }}</h2>
  </div>
</template>

<script setup lang="ts">
import {ref, watch, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const content = ref()
onMounted(() => {
  content.value = route.query.content
})
watch(route, (newValue, oldValue) => {
  content.value = newValue.query.content
}, {deep: true, immediate: true})
</script>

<style scoped lang="less">
.page-content {
  position: relative;

  h2 {
    font-weight: 400;
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
  }
}
</style>