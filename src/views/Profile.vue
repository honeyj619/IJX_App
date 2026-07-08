<template>
  <div class="page-container">
    <div class="profile-header">
      <div class="user-info">
        <img :src="MAIN_USER_AVATAR" class="user-avatar" />
        <div class="user-details">
          <span class="user-name">{{ MAIN_USER_NAME }}</span>
          <span class="user-role">{{ MAIN_USER_TITLE }}</span>
          <span class="user-dept">信息中心</span>
        </div>
      </div>
      <i class="fas fa-cog settings-icon"></i>
    </div>

    <div class="stats-section">
      <div class="stat-item">
        <span class="stat-value">128</span>
        <span class="stat-label">累计任务</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">98%</span>
        <span class="stat-label">完成率</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-value">5</span>
        <span class="stat-label">待处理</span>
      </div>
    </div>

    <div class="menu-section">
      <div class="menu-item" @click="handleMenu('tasks')">
        <i class="fas fa-tasks menu-icon"></i>
        <span class="menu-text">我的任务</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('schedule')">
        <i class="fas fa-calendar menu-icon"></i>
        <span class="menu-text">我的日程</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('approval')">
        <i class="fas fa-file-signature menu-icon"></i>
        <span class="menu-text">审批记录</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('documents')">
        <i class="fas fa-folder-open menu-icon"></i>
        <span class="menu-text">文档中心</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('contacts')">
        <i class="fas fa-address-book menu-icon"></i>
        <span class="menu-text">通讯录</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('help')">
        <i class="fas fa-question-circle menu-icon"></i>
        <span class="menu-text">帮助中心</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('about')">
        <i class="fas fa-info-circle menu-icon"></i>
        <span class="menu-text">关于我们</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>

    <div class="logout-section">
      <button class="logout-btn" @click="handleLogout">退出登录</button>
    </div>
  </div>
</template>

<script setup>
import { MAIN_USER_NAME, MAIN_USER_AVATAR, MAIN_USER_TITLE } from '../data/people'

function handleMenu(type) {
  const menuMap = {
    tasks: '我的任务',
    schedule: '我的日程',
    approval: '审批记录',
    documents: '文档中心',
    contacts: '通讯录',
    help: '帮助中心',
    about: '关于我们'
  }
  alert(`打开${menuMap[type]}`)
}

function handleLogout() {
  alert('退出登录')
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f8f8f8; }

.profile-header { background: linear-gradient(135deg, #d93030 0%, #ff6b6b 100%); padding: 30px 20px; display: flex; justify-content: space-between; align-items: center; }
.user-info { display: flex; align-items: center; }
.user-avatar { width: 72px; height: 72px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.3); object-fit: cover; }
.user-details { margin-left: 16px; }
.user-name { font-size: 20px; font-weight: 600; color: #fff; display: block; margin-bottom: 4px; }
.user-role { font-size: 13px; color: rgba(255,255,255,0.8); display: block; margin-bottom: 2px; }
.user-dept { font-size: 12px; color: rgba(255,255,255,0.6); }
.settings-icon { color: #fff; font-size: 22px; }

.stats-section { background: #fff; margin: -20px 12px 12px; border-radius: 12px; padding: 20px; display: flex; justify-content: space-around; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.stat-item { text-align: center; }
.stat-value { font-size: 24px; font-weight: 600; color: #d93030; display: block; margin-bottom: 4px; }
.stat-label { font-size: 12px; color: #999; }
.stat-divider { width: 1px; height: 40px; background: #f0f0f0; }

.menu-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; overflow: hidden; }
.menu-item { display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #f5f5f5; }
.menu-item:last-child { border-bottom: none; }
.menu-icon { width: 24px; height: 24px; color: #d93030; margin-right: 14px; }
.menu-text { flex: 1; font-size: 15px; color: #333; }
.menu-arrow { color: #ccc; font-size: 14px; }

.logout-section { padding: 20px 12px; }
.logout-btn { width: 100%; height: 44px; background: #fff; border: 1px solid #d93030; border-radius: 22px; color: #d93030; font-size: 15px; }
</style>