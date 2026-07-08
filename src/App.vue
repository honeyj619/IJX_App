<template>
  <div class="app-container">
    <div class="safe-top"></div>
    <router-view />
    <TabBar />
    <div class="safe-bottom"></div>
  </div>
</template>

<script setup>
import TabBar from './components/TabBar.vue'
</script>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Arial, sans-serif; background: #f8f8f8; }
.app-container { width: 100%; max-width: 480px; margin: 0 auto; min-height: 100vh; background: #fff; position: relative; }
.safe-top { height: env(safe-area-inset-top); background: #fff; }
.safe-bottom { height: env(safe-area-inset-bottom); background: #fff; }
</style>