<template>
  <div class="navLayout">
    <div class="navLayout-side el-scrollbar" :class="{dark:isDark===true}">
      <div class="el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
        <el-scrollbar height="937px" :always="true">
          <div class="side-nav" style="opacity: 1;">
            <ul>
              <li class="nav-item">
                <router-link to="/">
                  更新日志
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" target="_blank">
                  Element React
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/" target="_blank">
                  Element Angular
                </router-link>
              </li>
              <li class="nav-item">
                <a>开发指南</a>
                <ul class="pure-menu-list sub-nav" style="height: auto;">
                  <li class="nav-item">
                    <router-link to="/">安装</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/">快速上手</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/">国际化</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/">自定义主题</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/">内置过渡动画</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a>组件</a>
                <div class="nav-group" >
                  <div class="nav-group_title">Basic</div>
                  <ul class="pure-menu-list" style="height: auto">
                    <li v-for="(item,index) in data.BasicArr" :key="item.title" class="nav-item" @click="change(index)">
                      <router-link :to="{path:'/content',query:{content:item.title}}" :class="{active:index===num}">
                        {{ item.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="nav-group">
                  <div class="nav-group_title">Form</div>
                  <ul class="pure-menu-list" style="height: auto">
                    <li v-for="(item,index) in data.FormArr" :key="item.title" class="nav-item" @click="changeTwo(index)">
                      <router-link :to="{path:'/content',query:{content:item.title}}" :class="{active:index===numTwo}">
                        {{ item.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="nav-group">
                  <div class="nav-group_title">Data</div>
                  <ul class="pure-menu-list" style="height: auto">
                    <li v-for="item in data.FormArr" :key="item.title" class="nav-item">
                      <router-link to="/">
                        {{ item.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
                <div class="nav-group">
                  <div class="nav-group_title">Notice</div>
                  <ul class="pure-menu-list" style="height: auto">
                    <li v-for="item in data.FormArr" :key="item.title" class="nav-item">
                      <router-link to="/">
                        {{ item.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {reactive, ref, onMounted, inject} from "vue";

let isDark = inject("isDark")
let num = ref<number>()
let numTwo = ref<number>()
const change = (i: number) => {
  sessionStorage.setItem("num", JSON.stringify(i))
  num.value = Number(sessionStorage.getItem("num"))
}
const changeTwo = (i: number) => {
  sessionStorage.setItem("numTwo", JSON.stringify(i))
  numTwo.value = Number(sessionStorage.getItem("numTwo"))
}
onMounted(() => {
  num.value = Number(sessionStorage.getItem("num"))
  numTwo.value = Number(sessionStorage.getItem("numTwo"))
})

interface basic {
  title: string,
  flag: boolean,
  id: number
}

const data = reactive({
  BasicArr: <basic[]>[],
  FormArr: <basic[]>[]
})
data.BasicArr = [
  {
    title: "Layout 布局",
    flag: false,
    id: 0
  },
  {
    title: "container 布局容器",
    flag: false,
    id: 1
  },
  {
    title: "color 色彩",
    flag: false,
    id: 2
  },
  {
    title: "Typography 字体",
    flag: false,
    id: 3
  },
  {
    title: "Border 边框",
    flag: false,
    id: 0
  },
  {
    title: "icon 图标",
    flag: false,
    id: 0
  },
  {
    title: "button 按钮",
    flag: false,
    id: 0
  },
  {
    title: "link 文字链接",
    flag: false,
    id: 0
  },
]
data.FormArr = [
  {
    title: "Radio 单选框",
    flag: false,
    id: 0
  },
  {
    title: "CheckBox 多选框",
    flag: false,
    id: 0
  },
  {
    title: "input 输入框",
    flag: false,
    id: 0
  },
  {
    title: "Typography 字体",
    flag: false,
    id: 0
  },
  {
    title: "inputNumber 计数器",
    flag: false,
    id: 0
  },
  {
    title: "select 选择器",
    flag: false,
    id: 0
  },
  {
    title: "switch 开关",
    flag: false,
    id: 0
  },
  {
    title: "slider 滑块",
    flag: false,
    id: 0
  },
]
</script>

<style scoped lang="less">
.navLayout {
  width: 257px;
  height: 100vh;
  position: absolute;

  .dark {
    background-color: #1c1e21 !important;
    color: #CFD3DC !important;
  }

  &-side {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1032;
    top: 80px;
    bottom: 0;
    width: 240px;
    height: auto;
    background: #fff;

    .el-scrollbar__wrap {
      height: 100%;
      overflow-x: auto;

      .side-nav {
        height: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
        padding-right: 0;
        width: 100%;
        box-sizing: border-box;
        transition: opacity .3s;

        ul {
          padding: 0;
          margin: 0;
          overflow: hidden;

          li {
            list-style: none;

            a {
              font-size: 16px;
              color: #333;
              line-height: 40px;
              height: 40px;
              margin: 0;
              padding: 0;
              text-decoration: none;
              display: block;
              position: relative;
              transition: .15s ease-out;
              font-weight: 700;
            }
          }
        }

        .pure-menu-list {
          .nav-item {
            a {
              display: block;
              height: 40px;
              color: #444;
              line-height: 40px;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-weight: 400;

              &:hover {
                color: #409eff;
              }
            }

            a.active {
              color: #409eff;
            }
          }
        }

        .nav-group_title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
        }
      }
    }

    .el-scrollbar__bar.is-vertical {
      width: 6px;
      top: 2px;
    }
  }
}


</style>