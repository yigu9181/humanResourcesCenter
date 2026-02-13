<script setup lang="ts">

</script>

<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style>
/* Fade transition styles for top-level routes (login <-> main pages) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

