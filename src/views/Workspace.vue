<template>
  <div class="page-container">
    <!-- 搜索框 -->
    <div class="search-bar">
      <i class="fas fa-search"></i>
      <input type="text" placeholder="请输入您要搜索的内容" v-model="searchText" />
    </div>

    <!-- 我的工作台 -->
    <div class="section">
      <div class="section-head">
        <h3 class="section-title">我的工作台</h3>
        <span class="edit-btn" @click="toggleEdit">{{ isEditing ? '完成' : '编辑' }}</span>
      </div>
      <div class="app-grid">
        <div v-for="app in myApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 推荐应用 -->
    <div class="section">
      <h3 class="section-title section-title-plain">推荐应用</h3>
      <div class="app-grid">
        <div v-for="app in recommendApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 综合服务 -->
    <div class="section">
      <h3 class="section-title section-title-plain">综合服务</h3>
      <div class="app-grid">
        <div v-for="app in serviceApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 文档中心 -->
    <div class="section">
      <h3 class="section-title section-title-plain">文档中心</h3>
      <div class="app-grid">
        <div v-for="app in docApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 员工服务 -->
    <div class="section">
      <h3 class="section-title section-title-plain">员工服务</h3>
      <div class="app-grid">
        <div v-for="app in staffApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 数据服务 -->
    <div class="section">
      <h3 class="section-title section-title-plain">数据服务</h3>
      <div class="app-grid">
        <div v-for="app in dataApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- 信息查询 -->
    <div class="section">
      <h3 class="section-title section-title-plain">信息查询</h3>
      <div class="app-grid">
        <div v-for="app in queryApps" :key="app.id" class="app-item" @click="handleApp(app)">
          <div class="app-icon-wrap">
            <i :class="app.icon"></i>
          </div>
          <span class="app-name">{{ app.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')
const isEditing = ref(false)

const myApps = [
  { id: 1, icon: 'fas fa-video', name: '会议室' },
  { id: 2, icon: 'fas fa-address-book', name: '通讯录' },
  { id: 3, icon: 'fas fa-cogs', name: '流程中心' },
  { id: 4, icon: 'fas fa-users', name: '员工活动室' },
  { id: 5, icon: 'far fa-calendar-check', name: '公司值班' }
]

const recommendApps = [
  { id: 1, icon: 'fas fa-cogs', name: '流程中心' },
  { id: 2, icon: 'fas fa-address-book', name: '通讯录' },
  { id: 3, icon: 'fas fa-users', name: '员工活动室' }
]

const serviceApps = [
  { id: 1, icon: 'far fa-envelope', name: '我的邮箱' },
  { id: 2, icon: 'fas fa-cogs', name: '流程中心' },
  { id: 3, icon: 'fas fa-video', name: '会议室' },
  { id: 4, icon: 'far fa-calendar-check', name: '公司值班' },
  { id: 5, icon: 'fas fa-file-signature', name: '工作汇报' },
  { id: 6, icon: 'fas fa-chart-line', name: '我的考评' },
  { id: 7, icon: 'fas fa-broadcast-tower', name: 'AOC大厅' },
  { id: 8, icon: 'fas fa-car', name: '车辆管理' },
  { id: 9, icon: 'fas fa-award', name: '质量管理' },
  { id: 10, icon: 'fas fa-code', name: '低代码平台' },
  { id: 11, icon: 'fas fa-paper-plane', name: 'SMS上报' },
  { id: 12, icon: 'fas fa-search', name: 'SMS检查' },
  { id: 13, icon: 'fas fa-tools', name: 'IT上报' },
  { id: 14, icon: 'fas fa-cloud-download-alt', name: '下载中心' },
  { id: 15, icon: 'fas fa-clipboard-check', name: '会议签到' }
]

const docApps = [
  { id: 1, icon: 'far fa-file-alt', name: '文件中心' },
  { id: 2, icon: 'fas fa-bullhorn', name: '通告中心' },
  { id: 3, icon: 'fas fa-book', name: '手册制度' },
  { id: 4, icon: 'far fa-newspaper', name: '文化专栏' }
]

const staffApps = [
  { id: 1, icon: 'fas fa-headset', name: 'IT需求' },
  { id: 2, icon: 'fas fa-gift', name: '抽奖配置' },
  { id: 3, icon: 'fas fa-plane', name: '费控商旅' },
  { id: 4, icon: 'fas fa-address-book', name: '通讯录' },
  { id: 5, icon: 'fas fa-wallet', name: '我的薪酬' },
  { id: 6, icon: 'fas fa-home', name: '社保公积金' },
  { id: 7, icon: 'fas fa-coffee', name: '休假自助' },
  { id: 8, icon: 'fas fa-ticket-alt', name: '优惠票' },
  { id: 9, icon: 'fas fa-users', name: '员工活动室' },
  { id: 10, icon: 'fas fa-building', name: '公寓管理' },
  { id: 11, icon: 'fas fa-tshirt', name: '装具E选' },
  { id: 12, icon: 'fas fa-utensils', name: '空勤大厅' }
]

const dataApps = [
  { id: 1, icon: 'fas fa-chart-line', name: '数据驾驶舱' }
]

const queryApps = [
  { id: 1, icon: 'far fa-file-contract', name: '我的合同' }
]

function toggleEdit() {
  isEditing.value = !isEditing.value
}

function handleApp(app) {
  if (isEditing.value) return
  alert(`打开${app.name}`)
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f5f5f5; }

/* 搜索框 */
.search-bar { display: flex; align-items: center; background: #fff; margin: 12px; padding: 9px 16px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
.search-bar i { color: #999; margin-right: 12px; font-size: 14px; }
.search-bar input { flex: 1; border: none; outline: none; font-size: 13px; background: transparent; }
.search-bar input::placeholder { color: #ccc; }

/* Section */
.section { background: #fff; margin: 0 12px 12px; border-radius: 8px; padding: 16px 0 12px; }
.section-head { display: flex; justify-content: space-between; align-items: center; padding: 0 16px 12px; }
.section-title { font-size: 16px; font-weight: 600; color: #333; }
.section-title-plain { padding: 0 16px 12px; }
.edit-btn { font-size: 12px; color: #fff; background: linear-gradient(135deg, #ffb4c4 0%, #ff8aa0 100%); padding: 4px 16px; border-radius: 12px; }

/* App Grid - 4列 */
.app-grid { display: flex; flex-wrap: wrap; padding: 0 8px; }
.app-item { width: 25%; display: flex; flex-direction: column; align-items: center; padding: 8px 0; position: relative; }
.app-icon-wrap { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px; }
.app-icon-wrap i { font-size: 26px; color: #ff6b9d; }
.app-name { font-size: 12px; color: #333; text-align: center; line-height: 1.3; }
</style>