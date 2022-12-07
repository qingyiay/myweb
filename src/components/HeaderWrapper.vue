<template>
  <div class="headerWrapper">
    <header class="header" :class="{dark:isDark===true}">
      <div class="container">
        <h1>
          <router-link to="/">
            <img src="../assets/images/logo.svg" alt="logo" srcset="" class="nav-logo">
          </router-link>
        </h1>
        <ul class="nav">
          <li class="nav-item">
            <el-input placeholder="搜索文档"/>
          </li>
          <li class="nav-item">
            <router-link to="/">
              指南
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              组件
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              主题
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/">
              资源
            </router-link>
          </li>
          <li class="nav-item">
            <div class="nav-gap"></div>
          </li>
          <li class="nav-item nav-versions">
            <div class="nav-dropdown">
              <el-dropdown trigger="click" popper-class="blueBack">
              <span class="el-dropdown-link">
                2.15.11
                <el-icon class="el-icon--right">
                  <arrow-down/>
                </el-icon>
              </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="DeleteFilled">2.15.10</el-dropdown-item>
                    <el-dropdown-item icon="Promotion">2.15.09</el-dropdown-item>
                    <el-dropdown-item icon="Comment">2.15.08</el-dropdown-item>
                    <el-dropdown-item icon="StarFilled">2.15.07</el-dropdown-item>
                    <el-dropdown-item>
                      <span>暗黑模式</span>
                      <el-switch size="large" v-model="isDark" active-icon="Moon" inactive-icon="Sunny" inline-prompt/>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
          <li class="nav-item nav-versions">
            <div class="nav-dropdown">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                中文
                <el-icon class="el-icon--right">
                  <arrow-down/>
                </el-icon>
              </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item icon="Plus">English</el-dropdown-item>
                    <el-dropdown-item icon="CirclePlusFilled">
                      French
                    </el-dropdown-item>
                    <el-dropdown-item icon="Link">国际语</el-dropdown-item>
                    <el-dropdown-item icon="Lock">象棋</el-dropdown-item>
                    <el-dropdown-item icon="Crop">围棋</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import {inject} from "vue"

let isDark = inject("isDark")


</script>
<style lang="less">
.el-popper.is-light.blueBack {
  background-color: #254277 !important;
  border: 1px solid #254277 !important;
}

.blueBack.el-popper[data-popper-placement^=bottom] .el-popper__arrow::before {
  background: #254277 !important;
  border: 1px solid #254277 !important;
}

.blueBack.el-popper[data-popper-placement^=top] .el-popper__arrow::before {
  background: #254277 !important;
  border: 1px solid #254277 !important;
}

.blueBack {
  .el-dropdown-menu__item.hover, .el-dropdown-menu__item:hover {
    background: #2A77C6 !important;
  }

  .el-dropdown-menu__item {
    color: #B3BCCE !important;
  }

  .el-dropdown-menu__item.selected {
    background: #2A77C6 !important;
  }
}
</style>
<style scoped lang="less">
.headerWrapper {
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0;
  top: 0;
  z-index: 1500;

  .dark {
    background-color: #1c1e21 !important;
  }

  .header {
    height: 80px;
    background-color: #fff;
    color: #fff;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 80px;
    z-index: 100;
    position: relative;

    .container {
      padding: 0;
      width: 1140px;
      height: 100%;
      box-sizing: border-box;
      border-bottom: 1px solid #dcdfe6;
      margin: 0 auto;

      h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;

        a {
          color: #333;
          text-decoration: none;
          display: block;

          .nav-logo {
            vertical-align: sub;
          }
        }
      }

      .nav {
        width: 742px;
        float: right;
        height: 100%;
        line-height: 80px;
        background: transparent;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;

        .nav-item {
          margin: 0;
          list-style: none;
          position: relative;

          a {
            text-decoration: none;
            color: #1989fa;
            opacity: .5;
            display: block;
            padding: 0 22px;
          }

          .nav-gap {
            position: relative;
            width: 1px;
            height: 80px;
            padding: 0 20px;

            &::before {
              content: "";
              position: absolute;
              top: calc(50% - 8px);
              width: 1px;
              height: 16px;
              background: #ebebeb;
            }
          }

          .nav-dropdown {
            margin-bottom: 6px;
            padding-left: 18px;
            width: 100%;
            display: inline-block;
            position: relative;
            color: #606266;
            font-size: 14px;

            .el-dropdown-link {
              cursor: pointer;
              display: flex;
              align-items: center;
            }

            span {
              display: block;
              width: 100%;
              font-size: 16px;
              color: #888;
              line-height: 80px;
              transition: .2s;
              padding-bottom: 6px;
              user-select: none;
            }
          }
        }

        .nav-versions {
          width: 99px;
        }
      }
    }
  }
}
</style>