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
.tab-bar { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; height: 56px; background: #fff; border-top: 1px solid #e8e8e8; display: flex; justify-content: space-around; align-items: center; z-index: 999; }
.tab-item { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 20%; height: 100%; color: #999; transition: all 0.2s; text-decoration: none; }
.tab-item.active { color: #d93030; }
.tab-item i { font-size: 22px; margin-bottom: 4px; }
.tab-item span { font-size: 10px; }
</style>