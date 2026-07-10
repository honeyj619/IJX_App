<template>
  <div class="tab-bar">
    <router-link to="/" class="tab-item" :class="{ active: currentRoute === 'Home' }">
      <i class="fas fa-home"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/schedule" class="tab-item" :class="{ active: currentRoute === 'Schedule' }">
      <i class="fas fa-calendar-alt"></i>
      <span>日程</span>
    </router-link>
    <router-link to="/workspace" class="tab-item" :class="{ active: currentRoute === 'Workspace' }">
      <i class="fas fa-th-large"></i>
      <span>工作台</span>
    </router-link>
    <router-link to="/message" class="tab-item" :class="{ active: currentRoute === 'Message' }">
      <i class="fas fa-comment-dots"></i>
      <span>消息</span>
    </router-link>
    <router-link to="/profile" class="tab-item" :class="{ active: currentRoute === 'Profile' }">
      <i class="fas fa-user-circle"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.name)
</script>

<style scoped>
.tab-bar { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; height: 70px; background: #fff; border-top: 1px solid #f0f0f0; display: flex; justify-content: space-around; align-items: flex-start; padding-top: 8px; z-index: 999; padding-bottom: env(safe-area-inset-bottom); }
.tab-item { display: flex; flex-direction: column; align-items: center; justify-content: flex-start; width: 20%; color: #999; transition: all 0.2s; text-decoration: none; }
.tab-item.active { color: #ff6b9d; }
.tab-item i { font-size: 24px; margin-bottom: 3px; }
.tab-item span { font-size: 11px; font-weight: 500; }
</style>