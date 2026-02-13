<template>
  <div>
    <navigationBar></navigationBar>
    <transition name="fade" mode="out-in">
      <router-view class="right"></router-view>
    </transition>
  </div>
</template>
<script setup lang="ts">
import navigationBar from '@/components/index/navigationBar.vue'
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
      font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    overflow-y: auto;
    background-color: #f9f9f9;
    font-family: 'Microsoft YaHei', Arial, sans-serif;
  }
  .right{
    width:calc(82% - 100px);
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: calc(18% + 20px);
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    font-size: 1.7rem;
    overflow: visible;
    background-color: #ffffff;
  }
  .fade-enter-active,
  .fade-leave-active {
  transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
