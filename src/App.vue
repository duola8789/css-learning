<template>
  <div id="app" class="app">
    <nav class="nav">
      <h1 class="title"><router-link to="home">CSS-Learning</router-link></h1>
      <ul class="menus">
        <li v-for="link in links" :key="link.path" class="link-item">
          <router-link :to="link.path">{{link.title}}</router-link>
        </li>
      </ul>
    </nav>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import helper from '@/utils/helper';

export default {
  name: 'app',

  data() {
    return {
      links: helper.getPagesComp()
    };
  }
};
</script>

<style>
  /* 全局样式 */
  @import './assets/reset.css';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a {
    display: inline-block;
    position: relative;
    color: #505d6b;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
  }
  a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #505d6b;
    visibility: hidden;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
  a:hover:before {
    visibility: visible;
    transform: scale(1);
  }
  .content-title {
    font-size: 30px;
    text-align: left;
  }
</style>

<style scoped lang="less">
  @asideWidth: 300px;
  .app {
    .nav {
      position: fixed;
      top: 0;
      left: 0;
      width: @asideWidth;
      height: 100%;
      padding: 20px;
      border-right: 1px solid #ccc;
      overflow-y: auto;

      /* 滚动条 */
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 4px;
      }
      &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(135, 135, 135, 0.4);
      }

      .title {
        margin: 20px 0 30px;
        a {
          font-weight: 600;
          font-size: 20px;
          color: #364149;
        }
      }
      .link-item {
        padding: 10px 0;
        font-size: 16px;
        text-align: left;
        a {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .main {
      margin-left: @asideWidth;
      padding: 100px;
    }
  }
</style>
