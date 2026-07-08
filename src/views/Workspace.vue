<template>
  <div class="page-container">
    <div class="search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="搜索应用、文件..." v-model="searchText" />
    </div>

    <div class="apps-section">
      <div class="section-header">
        <span class="section-title">常用应用</span>
        <span class="section-more">全部</span>
      </div>
      <div class="apps-grid">
        <div v-for="app in apps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon" :style="{ background: app.bgColor }">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <div class="recent-section">
      <div class="section-header">
        <span class="section-title">最近使用</span>
        <span class="section-more">清空</span>
      </div>
      <div class="recent-list">
        <div v-for="item in recentList" :key="item.id" class="recent-item">
          <div class="recent-icon" :style="{ background: item.bgColor }">
            <i :class="item.icon"></i>
          </div>
          <div class="recent-info">
            <span class="recent-name">{{ item.name }}</span>
            <span class="recent-time">{{ item.time }}</span>
          </div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>

    <div class="shortcuts-section">
      <div class="section-header">
        <span class="section-title">快捷入口</span>
      </div>
      <div class="shortcuts-list">
        <div v-for="shortcut in shortcuts" :key="shortcut.id" class="shortcut-item">
          <div class="shortcut-left">
            <div class="shortcut-icon" :style="{ background: shortcut.bgColor }">
              <i :class="shortcut.icon"></i>
            </div>
            <div class="shortcut-info">
              <span class="shortcut-title">{{ shortcut.title }}</span>
              <span class="shortcut-desc">{{ shortcut.desc }}</span>
            </div>
          </div>
          <span class="shortcut-badge" v-if="shortcut.badge">{{ shortcut.badge }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')

const apps = [
  { id: 1, icon: 'fas fa-file-signature', name: '审批流程', bgColor: '#e8f5e9' },
  { id: 2, icon: 'fas fa-calendar', name: '日程管理', bgColor: '#e3f2fd' },
  { id: 3, icon: 'fas fa-users', name: '通讯录', bgColor: '#fff3e0' },
  { id: 4, icon: 'fas fa-envelope', name: '邮件', bgColor: '#f3e5f5' },
  { id: 5, icon: 'fas fa-file-excel', name: '报表', bgColor: '#e0f7fa' },
  { id: 6, icon: 'fas fa-chart-bar', name: '数据分析', bgColor: '#fce4ec' },
  { id: 7, icon: 'fas fa-clipboard', name: '公告', bgColor: '#fff8e1' },
  { id: 8, icon: 'fas fa-comments', name: '讨论', bgColor: '#e8eaf6' }
]

const recentList = [
  { id: 1, icon: 'fas fa-file-signature', name: '采购审批单', time: '10分钟前', bgColor: '#e8f5e9' },
  { id: 2, icon: 'fas fa-calendar', name: '项目评审会议', time: '1小时前', bgColor: '#e3f2fd' },
  { id: 3, icon: 'fas fa-file-excel', name: '月度报表', time: '3小时前', bgColor: '#e0f7fa' },
  { id: 4, icon: 'fas fa-envelope', name: '王建国的邮件', time: '昨天', bgColor: '#f3e5f5' }
]

const shortcuts = [
  { id: 1, icon: 'fas fa-clock', title: '待办事项', desc: '3项待处理', badge: '3', bgColor: '#fff0f0' },
  { id: 2, icon: 'fas fa-exclamation-circle', title: '紧急通知', desc: '2条新通知', badge: '2', bgColor: '#fff3e0' },
  { id: 3, icon: 'fas fa-chart-line', title: '业务数据', desc: '查看最新数据', bgColor: '#e3f2fd' },
  { id: 4, icon: 'fas fa-users', title: '团队动态', desc: '查看团队更新', bgColor: '#e8f5e9' }
]

function handleApp(app) {
  alert(`打开${app.name}`)
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f8f8f8; }

.search-bar { display: flex; align-items: center; background: #fff; margin: 12px; padding: 10px 16px; border-radius: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.search-bar i { color: #999; margin-right: 12px; font-size: 16px; }
.search-bar input { flex: 1; border: none; outline: none; font-size: 14px; background: transparent; }
.search-bar input::placeholder { color: #ccc; }

.apps-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.section-title { font-size: 16px; font-weight: 600; color: #333; }
.section-more { font-size: 12px; color: #999; }

.apps-grid { display: flex; flex-wrap: wrap; justify-content: space-between; }
.app-item { width: 25%; display: flex; flex-direction: column; align-items: center; margin-bottom: 16px; }
.app-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 8px; }
.app-icon i { font-size: 24px; }
.app-name { font-size: 12px; color: #333; }

.recent-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.recent-list { }
.recent-item { display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
.recent-item:last-child { border-bottom: none; }
.recent-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #666; margin-right: 12px; }
.recent-icon i { font-size: 18px; }
.recent-info { flex: 1; }
.recent-name { font-size: 14px; color: #333; display: block; margin-bottom: 4px; }
.recent-time { font-size: 12px; color: #999; }
.recent-item i:last-child { color: #ccc; font-size: 14px; }

.shortcuts-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.shortcuts-list { }
.shortcut-item { display: flex; align-items: center; padding: 14px 0; border-bottom: 1px solid #f5f5f5; }
.shortcut-item:last-child { border-bottom: none; }
.shortcut-left { display: flex; align-items: center; flex: 1; }
.shortcut-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #666; margin-right: 14px; }
.shortcut-icon i { font-size: 20px; }
.shortcut-info { }
.shortcut-title { font-size: 14px; color: #333; display: block; margin-bottom: 4px; }
.shortcut-desc { font-size: 12px; color: #999; }
.shortcut-badge { display: inline-block; min-width: 22px; height: 22px; line-height: 22px; text-align: center; background: #d93030; color: #fff; font-size: 12px; border-radius: 11px; padding: 0 6px; }
</style>