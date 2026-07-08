<template>
  <div class="page-container">
    <div class="tab-header">
      <div class="tab-item-header" :class="{ active: activeTab === 'schedule' }" @click="activeTab = 'schedule'">
        日程
      </div>
      <div class="tab-item-header" :class="{ active: activeTab === 'task' }" @click="activeTab = 'task'">
        任务
      </div>
    </div>

    <div v-if="activeTab === 'schedule'">
      <div class="calendar-section">
        <div class="calendar-header">
          <span class="calendar-title">{{ currentYear }}年{{ currentMonth }}月</span>
          <span class="today-link" @click="goToday">今天</span>
        </div>
        <div class="calendar-weekdays">
          <span v-for="day in weekdays" :key="day">{{ day }}</span>
        </div>
        <div class="calendar-days">
          <div v-for="(day, index) in calendarDays" :key="index" 
               class="calendar-day"
               :class="{ 
                 'other-month': !day.isCurrentMonth,
                 'today': day.isToday,
                 'selected': day.date === selectedDate,
                 'has-event': day.hasEvent
               }"
               @click="selectDate(day)">
            <span class="day-number">{{ day.day }}</span>
            <span class="day-lunar">{{ day.lunar }}</span>
            <span v-if="day.hasEvent" class="event-dot"></span>
          </div>
        </div>
      </div>

      <div class="schedule-list">
        <div v-for="event in dayEvents" :key="event.id" class="schedule-item">
          <div class="schedule-time">
            <span class="start-time">{{ event.startTime }}</span>
            <span class="time-line"></span>
            <span class="end-time">{{ event.endTime }}</span>
          </div>
          <div class="schedule-content">
            <span class="event-dot-color" :style="{ background: event.color }"></span>
            <span class="event-title">{{ event.title }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="task-tabs">
        <span class="task-tab" :class="{ active: taskFilter === 'pending' }" @click="taskFilter = 'pending'">
          待处理 <span class="badge">{{ pendingCount }}</span>
        </span>
        <span class="task-tab" :class="{ active: taskFilter === 'completed' }" @click="taskFilter = 'completed'">
          已处理 <span class="badge">{{ completedCount }}</span>
        </span>
      </div>

      <div v-if="filteredTasks.length === 0" class="empty-state">
        <svg class="empty-icon" viewBox="0 0 100 100" fill="none">
          <path d="M50 20v30M35 50h30" stroke="#ccc" stroke-width="2"/>
          <circle cx="50" cy="70" r="15" stroke="#ccc" stroke-width="2"/>
          <path d="M45 75h10" stroke="#ccc" stroke-width="2"/>
        </svg>
        <span class="empty-text">暂无数据</span>
      </div>
    </div>

    <div class="fab" @click="handleAdd">
      <i class="fas fa-plus"></i>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('schedule')
const taskFilter = ref('pending')
const currentYear = ref(2026)
const currentMonth = ref(7)
const selectedDate = ref(new Date().getDate())

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

const lunarDays = ['十四', '十五', '十六', '建党节', '十八', '十九', '二十',
  '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七',
  '廿八', '廿九', '六月', '初二', '初三', '初四', '初五',
  '初六', '初七', '初八', '初九', '大暑', '十一', '十二',
  '十三', '十四', '十五', '十六', '十七', '十八', '建军节']

const events = [
  { id: 1, date: 8, startTime: '13:15', endTime: '14:00', title: '《系统数据修改申请》流程迁移沟通', color: '#1890ff' },
  { id: 2, date: 8, startTime: '14:30', endTime: '15:30', title: '党群文化网站招采文件沟通', color: '#faad14' },
  { id: 3, date: 1, startTime: '09:00', endTime: '10:00', title: '周一例会', color: '#52c41a' },
  { id: 4, date: 5, startTime: '10:00', endTime: '11:30', title: '项目评审', color: '#722ed1' }
]

const tasks = [
  { id: 1, title: '完成项目文档', status: 'completed' },
  { id: 2, title: '审核报销单据', status: 'completed' },
  { id: 3, title: '整理会议纪要', status: 'completed' },
  { id: 4, title: '提交周报', status: 'completed' },
  { id: 5, title: '更新系统配置', status: 'completed' },
  { id: 6, title: '代码审查', status: 'completed' },
  { id: 7, title: '修复Bug', status: 'completed' }
]

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value - 1, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value, 0)
  const today = new Date()
  
  const startDay = firstDay.getDay()
  const totalDays = lastDay.getDate()
  
  const prevMonthLastDay = new Date(currentYear.value, currentMonth.value - 1, 0).getDate()
  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthLastDay - i,
      date: prevMonthLastDay - i,
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
      lunar: ''
    })
  }
  
  let lunarIndex = 0
  for (let i = 1; i <= totalDays; i++) {
    const isToday = today.getFullYear() === currentYear.value && 
                   today.getMonth() + 1 === currentMonth.value && 
                   today.getDate() === i
    const hasEvent = events.some(e => e.date === i)
    days.push({
      day: i,
      date: i,
      isCurrentMonth: true,
      isToday: isToday,
      hasEvent: hasEvent,
      lunar: lunarDays[lunarIndex++] || ''
    })
  }
  
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      day: i,
      date: i,
      isCurrentMonth: false,
      isToday: false,
      hasEvent: false,
      lunar: ''
    })
  }
  
  return days
})

const dayEvents = computed(() => {
  return events.filter(e => e.date === selectedDate.value)
})

const pendingCount = computed(() => tasks.filter(t => t.status === 'pending').length)
const completedCount = computed(() => tasks.filter(t => t.status === 'completed').length)

const filteredTasks = computed(() => {
  return tasks.filter(t => t.status === taskFilter.value)
})

function selectDate(day) {
  if (day.isCurrentMonth) {
    selectedDate.value = day.date
  }
}

function goToday() {
  const today = new Date()
  currentYear.value = today.getFullYear()
  currentMonth.value = today.getMonth() + 1
  selectedDate.value = today.getDate()
}

function handleAdd() {
  alert('添加')
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f8f8f8; }

.tab-header { display: flex; background: #fff; border-bottom: 1px solid #f0f0f0; }
.tab-item-header { flex: 1; text-align: center; padding: 16px 0; font-size: 16px; color: #333; position: relative; }
.tab-item-header.active { color: #d93030; }
.tab-item-header.active::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 32px; height: 3px; background: linear-gradient(90deg, #d93030, #ff6b6b); border-radius: 2px; }

.calendar-section { background: #fff; margin: 12px; border-radius: 12px; padding: 16px; }
.calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.calendar-title { font-size: 18px; font-weight: 600; color: #333; }
.today-link { font-size: 14px; color: #1890ff; }

.calendar-weekdays { display: flex; justify-content: space-around; padding: 8px 0; border-bottom: 1px solid #f0f0f0; }
.calendar-weekdays span { font-size: 12px; color: #999; width: 14.28%; text-align: center; }

.calendar-days { display: flex; flex-wrap: wrap; }
.calendar-day { width: 14.28%; padding: 8px 0; display: flex; flex-direction: column; align-items: center; position: relative; }
.calendar-day.other-month .day-number { color: #ccc; }
.calendar-day.today { background: #fff0f0; border-radius: 8px; }
.calendar-day.today .day-number { color: #d93030; font-weight: 600; }
.calendar-day.selected { background: #ffe4e1; border-radius: 8px; }
.calendar-day.selected .day-number { color: #d93030; font-weight: 600; }
.day-number { font-size: 14px; color: #333; }
.day-lunar { font-size: 10px; color: #999; margin-top: 2px; }
.event-dot { position: absolute; bottom: 2px; width: 4px; height: 4px; background: #d93030; border-radius: 50%; }
.calendar-day.has-event .day-number { color: #d93030; }

.schedule-list { padding: 0 12px; }
.schedule-item { background: #fff; border-radius: 12px; padding: 16px; margin-bottom: 12px; display: flex; }
.schedule-time { width: 60px; display: flex; flex-direction: column; align-items: center; padding-right: 16px; border-right: 1px solid #f0f0f0; }
.start-time { font-size: 14px; font-weight: 600; color: #333; }
.time-line { width: 2px; height: 20px; background: #e8e8e8; margin: 4px 0; }
.end-time { font-size: 12px; color: #999; }
.schedule-content { flex: 1; padding-left: 16px; display: flex; align-items: center; }
.event-dot-color { width: 8px; height: 8px; border-radius: 50%; margin-right: 10px; }
.event-title { font-size: 14px; color: #333; }

.task-tabs { display: flex; padding: 12px; gap: 12px; }
.task-tab { padding: 8px 20px; border-radius: 20px; font-size: 14px; background: #f0f0f0; color: #666; }
.task-tab.active { background: #fff0f0; color: #d93030; }
.badge { display: inline-block; min-width: 18px; height: 18px; line-height: 18px; text-align: center; background: #d93030; color: #fff; font-size: 11px; border-radius: 9px; padding: 0 5px; margin-left: 4px; }

.empty-state { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 80px 20px; color: #999; }
.empty-icon { width: 120px; height: 120px; }
.empty-text { font-size: 14px; margin-top: 16px; }

.fab { position: fixed; right: 20px; bottom: 80px; width: 56px; height: 56px; background: #c4a35a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 24px; box-shadow: 0 4px 12px rgba(196, 163, 90, 0.4); z-index: 998; }
</style>