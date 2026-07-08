<template>
  <div class="page-container">
    <div class="banner-section">
      <div class="banner-placeholder">
        <i class="fas fa-image"></i>
        <span>Banner占位</span>
      </div>
    </div>

    <div class="quick-actions">
      <div class="action-grid">
        <div v-for="item in actions" :key="item.id" class="action-item" @click="handleAction(item)">
          <div class="action-icon" :style="{ background: item.bgColor }">
            <i :class="item.icon"></i>
          </div>
          <span class="action-text">{{ item.text }}</span>
        </div>
      </div>
    </div>

    <div class="news-section">
      <div class="section-header">
        <span class="section-title">最新动态</span>
        <span class="section-more">更多</span>
      </div>
      <div class="news-list">
        <div v-for="news in newsList" :key="news.id" class="news-item">
          <div class="news-avatar">
            <img :src="news.avatar" :alt="news.author" />
          </div>
          <div class="news-content">
            <div class="news-header">
              <span class="news-author">{{ news.author }}</span>
              <span class="news-time">{{ news.time }}</span>
            </div>
            <p class="news-title">{{ news.title }}</p>
            <div class="news-images" v-if="news.images && news.images.length">
              <img v-for="(img, idx) in news.images" :key="idx" :src="img" class="news-img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="notice-section">
      <div class="section-header">
        <span class="section-title">通知公告</span>
        <span class="section-more">更多</span>
      </div>
      <div class="notice-list">
        <div v-for="notice in noticeList" :key="notice.id" class="notice-item">
          <span class="notice-dot" v-if="notice.isNew"></span>
          <span class="notice-title">{{ notice.title }}</span>
          <span class="notice-time">{{ notice.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { currentUser, peopleList } from '../data/people'

const actions = [
  { id: 1, icon: 'fas fa-file-alt', text: '审批', bgColor: '#e8f5e9' },
  { id: 2, icon: 'fas fa-calendar-check', text: '日程', bgColor: '#e3f2fd' },
  { id: 3, icon: 'fas fa-tasks', text: '任务', bgColor: '#fff3e0' },
  { id: 4, icon: 'fas fa-comments', text: '消息', bgColor: '#f3e5f5' },
  { id: 5, icon: 'fas fa-user-circle', text: '通讯录', bgColor: '#e0f7fa' },
  { id: 6, icon: 'fas fa-cog', text: '设置', bgColor: '#fce4ec' }
]

const newsList = [
  {
    id: 1,
    author: peopleList[1].name,
    avatar: peopleList[1].avatar,
    time: '10分钟前',
    title: '发布了新的项目计划，请大家查看并反馈意见。',
    images: []
  },
  {
    id: 2,
    author: peopleList[2].name,
    avatar: peopleList[2].avatar,
    time: '1小时前',
    title: '本周工作总结已更新，详情请查看附件。',
    images: ['https://via.placeholder.com/100']
  },
  {
    id: 3,
    author: peopleList[5].name,
    avatar: peopleList[5].avatar,
    time: '2小时前',
    title: '明天下午3点召开项目启动会，请各位准时参加。',
    images: []
  }
]

const noticeList = [
  { id: 1, title: '关于2026年下半年工作计划的通知', time: '2026-07-05', isNew: true },
  { id: 2, title: '系统维护通知：7月10日凌晨进行系统升级', time: '2026-07-04', isNew: true },
  { id: 3, title: '端午节放假安排通知', time: '2026-06-28', isNew: false },
  { id: 4, title: '办公区域网络优化完成', time: '2026-06-25', isNew: false }
]

function handleAction(item) {
  alert(`点击了${item.text}`)
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f8f8f8; }

.banner-section { padding: 12px; }
.banner-placeholder { height: 120px; background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #999; }
.banner-placeholder i { font-size: 32px; margin-bottom: 8px; }
.banner-placeholder span { font-size: 14px; }

.quick-actions { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.action-grid { display: flex; flex-wrap: wrap; justify-content: space-between; }
.action-item { width: 16.66%; display: flex; flex-direction: column; align-items: center; margin-bottom: 12px; }
.action-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #666; margin-bottom: 6px; }
.action-icon i { font-size: 20px; }
.action-text { font-size: 12px; color: #333; }

.news-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.section-title { font-size: 16px; font-weight: 600; color: #333; }
.section-more { font-size: 12px; color: #999; }

.news-list { }
.news-item { display: flex; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
.news-item:last-child { border-bottom: none; }
.news-avatar { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; margin-right: 12px; flex-shrink: 0; }
.news-avatar img { width: 100%; height: 100%; object-fit: cover; }
.news-content { flex: 1; }
.news-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.news-author { font-size: 13px; color: #333; }
.news-time { font-size: 11px; color: #999; }
.news-title { font-size: 14px; color: #333; line-height: 1.5; margin-bottom: 8px; }
.news-images { display: flex; gap: 6px; }
.news-img { width: 60px; height: 60px; border-radius: 6px; object-fit: cover; }

.notice-section { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; }
.notice-list { }
.notice-item { display: flex; align-items: center; padding: 12px 0; border-bottom: 1px solid #f5f5f5; }
.notice-item:last-child { border-bottom: none; }
.notice-dot { width: 6px; height: 6px; background: #d93030; border-radius: 50%; margin-right: 12px; }
.notice-title { flex: 1; font-size: 14px; color: #333; }
.notice-time { font-size: 12px; color: #999; margin-left: 12px; }
</style>