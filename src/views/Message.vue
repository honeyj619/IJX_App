<template>
  <div class="page-container">
    <div class="search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="搜索消息..." v-model="searchText" />
    </div>

    <div class="message-list">
      <div v-for="msg in filteredMessages" :key="msg.id" class="message-item" @click="handleMessage(msg)">
        <div class="msg-avatar">
          <img :src="msg.avatar" :alt="msg.name" />
          <span class="msg-badge" v-if="msg.badge > 0">{{ msg.badge }}</span>
        </div>
        <div class="msg-content">
          <div class="msg-header">
            <span class="msg-name">{{ msg.name }}</span>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
          <p class="msg-preview">{{ msg.content }}</p>
        </div>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>

    <div v-if="filteredMessages.length === 0" class="empty-state">
      <svg class="empty-icon" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="#ccc" stroke-width="2"/>
        <path d="M50 35v10M50 60v5M35 50h10M60 50h5" stroke="#ccc" stroke-width="2"/>
      </svg>
      <span class="empty-text">暂无消息</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { peopleList } from '../data/people'

const searchText = ref('')

const messages = [
  {
    id: 1,
    name: '王建国',
    avatar: peopleList[1].avatar,
    content: '项目方案已经更新，请查看附件。',
    time: '10分钟前',
    badge: 2
  },
  {
    id: 2,
    name: '李娜',
    avatar: peopleList[2].avatar,
    content: '报销单据已审批通过。',
    time: '30分钟前',
    badge: 0
  },
  {
    id: 3,
    name: '张伟',
    avatar: peopleList[3].avatar,
    content: '代码审查发现几个问题，需要修改。',
    time: '1小时前',
    badge: 1
  },
  {
    id: 4,
    name: '刘芳',
    avatar: peopleList[4].avatar,
    content: '本周考勤统计已完成。',
    time: '2小时前',
    badge: 0
  },
  {
    id: 5,
    name: '陈明',
    avatar: peopleList[5].avatar,
    content: '下周工作计划已发布，请确认。',
    time: '昨天',
    badge: 0
  },
  {
    id: 6,
    name: '系统通知',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=system&backgroundColor=bdbdbd',
    content: '您有3条待处理的审批任务。',
    time: '昨天',
    badge: 3
  },
  {
    id: 7,
    name: '赵丽',
    avatar: peopleList[6].avatar,
    content: '会议资料已发送，请查收。',
    time: '2天前',
    badge: 0
  }
]

const filteredMessages = computed(() => {
  if (!searchText.value) return messages
  return messages.filter(m => 
    m.name.includes(searchText.value) || 
    m.content.includes(searchText.value)
  )
})

function handleMessage(msg) {
  alert(`打开与${msg.name}的对话`)
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f8f8f8; }

.search-bar { display: flex; align-items: center; background: #fff; margin: 12px; padding: 10px 16px; border-radius: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
.search-bar i { color: #999; margin-right: 12px; font-size: 16px; }
.search-bar input { flex: 1; border: none; outline: none; font-size: 14px; background: transparent; }
.search-bar input::placeholder { color: #ccc; }

.message-list { padding: 0 12px; }
.message-item { display: flex; align-items: center; background: #fff; border-radius: 12px; padding: 14px; margin-bottom: 10px; }
.msg-avatar { position: relative; margin-right: 14px; }
.msg-avatar img { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.msg-badge { position: absolute; top: -4px; right: -4px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; background: #d93030; color: #fff; font-size: 11px; border-radius: 9px; padding: 0 5px; }
.msg-content { flex: 1; }
.msg-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.msg-name { font-size: 15px; color: #333; font-weight: 500; }
.msg-time { font-size: 12px; color: #999; }
.msg-preview { font-size: 13px; color: #999; line-height: 1.4; margin: 0; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.message-item i:last-child { color: #ccc; font-size: 14px; }

.empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 100px 20px; color: #999; }
.empty-icon { width: 100px; height: 100px; }
.empty-text { font-size: 14px; margin-top: 16px; }
</style>