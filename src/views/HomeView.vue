<template>
  <HeaderWrapper/>
  <div class="main-cnt">
    <div class="page-component__scroll el-scrollbar">
      <div class="page-container page-component">
        <SideBar/>
        <div class="page-component__content">
          <section class="content">
            <router-view/>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {provide} from 'vue'
import {useRouter} from "vue-router";
import HeaderWrapper from "@/components/HeaderWrapper.vue"
import SideBar from "@/components/SideBar.vue"
import {useDark} from '@vueuse/core'

const router = useRouter()
const isDark = useDark()

provide("isDark", isDark)


</script>

<style lang="less" scoped>


.main-cnt {
  padding: 0;
  margin-top: 0;
  height: 100%;
  min-height: auto;

  .page-component__scroll {
    height: calc(100% - 80px);
    margin-top: 80px;

    .page-container {
      width: 1140px;
      padding: 0;
      margin: 0 auto;
    }

    .page-component {
      box-sizing: border-box;
      height: 100%;

      .content {
        padding-top: 50px;
      }

      .page-component__content {
        padding-left: 270px;
        padding-bottom: 100px;
        box-sizing: border-box;
      }
    }
  }

}
</style>


