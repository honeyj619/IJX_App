<template>
  <div class="page-container">
    <!-- Header 紫色渐变区 -->
    <div class="hero-header">
      <div class="hero-top">
        <div class="city-row">
          <i class="fas fa-map-marker-alt"></i>
          <span>上海市</span>
        </div>
        <div class="hero-icons">
          <i class="fas fa-qrcode"></i>
          <div class="bell-wrap">
            <i class="fas fa-bell"></i>
            <span class="badge">10</span>
          </div>
        </div>
      </div>
      <div class="hero-search">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="快捷服务入口" />
      </div>

      <!-- Stats 4宫格 -->
      <div class="stats-row">
        <div class="stat-item" @click="handleStat('未读公文')">
          <div class="stat-icon"><i class="fas fa-file-alt"></i></div>
          <span class="stat-label">未读公文</span>
          <span class="stat-badge">50</span>
        </div>
        <div class="stat-item" @click="handleStat('待办流程')">
          <div class="stat-icon"><i class="fas fa-check-square"></i></div>
          <span class="stat-label">待办流程</span>
          <span class="stat-badge">11</span>
        </div>
        <div class="stat-item" @click="handleStat('今日日程')">
          <div class="stat-icon"><i class="far fa-calendar-check"></i></div>
          <span class="stat-label">今日日程</span>
          <span class="stat-badge">2</span>
        </div>
        <div class="stat-item" @click="handleStat('我的课程')">
          <div class="stat-icon"><i class="fas fa-desktop"></i></div>
          <span class="stat-label">我的课程</span>
          <span class="stat-badge badge-plus">99+</span>
        </div>
      </div>
    </div>

    <!-- 主题 Banner 区 -->
    <div class="theme-banner">
      <span class="theme-title">心有吉祥</span>
      <span class="theme-sub">如意人生</span>
    </div>

    <!-- Quick Apps 6宫格 -->
    <div class="quick-card">
      <div class="quick-grid">
        <div v-for="app in quickApps" :key="app.id" class="quick-item" @click="handleApp(app)">
          <div class="quick-icon"><i :class="app.icon"></i></div>
          <span class="quick-name">{{ app.name }}</span>
        </div>
      </div>
    </div>

    <!-- Report Banner -->
    <div class="report-banner" @click="handleReport">
      <span class="report-text">点击图片查看2025年度完整报告</span>
      <span class="report-year">2025</span>
      <span class="report-title">可持续发展报告</span>
      <span class="report-sub">上海吉祥航空股份有限公司</span>
    </div>

    <!-- Docs Tabs -->
    <div class="docs-card">
      <div class="tabs-row">
        <div v-for="(tab, idx) in docTabs" :key="tab.id"
             class="tab-item"
             :class="{ active: activeTab === tab.id }"
             @click="activeTab = tab.id">
          {{ tab.name }}
        </div>
      </div>
      <div class="docs-list">
        <div v-for="doc in filteredDocs" :key="doc.id" class="doc-item" @click="handleDoc(doc)">
          <span class="doc-title">{{ doc.title }}</span>
          <span class="doc-no">{{ doc.no }}</span>
        </div>
      </div>
    </div>

    <!-- 关于吉祥 -->
    <div class="about-section">
      <h3 class="section-title">关于吉祥</h3>

      <!-- 企业文化卡 -->
      <div class="culture-card" @click="handleCulture">
        <div class="culture-text">
          <h4>企业文化</h4>
          <span>吉祥航空 如意到家</span>
        </div>
        <div class="culture-plane">
          <i class="fas fa-plane"></i>
        </div>
      </div>

      <!-- 3个小卡片 -->
      <div class="feature-grid">
        <div class="feature-card" v-for="item in features" :key="item.id" @click="handleFeature(item)">
          <div class="feature-icon" :style="{ background: item.bg }">
            <i :class="item.icon"></i>
          </div>
          <span class="feature-title">{{ item.title }}</span>
          <span class="feature-sub">{{ item.sub }}</span>
        </div>
      </div>
    </div>

    <!-- 福利中心 -->
    <div class="welfare-section">
      <div class="section-head">
        <h3 class="section-title">福利中心</h3>
        <span class="more-btn">更多</span>
      </div>
      <div class="welfare-grid">
        <div class="welfare-card w-blue" @click="handleWelfare('工会福利')">
          <div class="welfare-text">
            <h4>工会福利专区</h4>
            <span>吉祥生活电商平台</span>
            <span class="welfare-tag">福利兑换中</span>
          </div>
          <div class="welfare-icon">
            <i class="fas fa-gift"></i>
          </div>
        </div>
        <div class="welfare-card w-pink" @click="handleWelfare('生日福利')">
          <div class="welfare-text">
            <h4>生日福利</h4>
            <span>员工2026年7月生日福利</span>
            <span class="welfare-tag w-tag-pink">Happy Birthday</span>
          </div>
          <div class="welfare-icon">
            <i class="fas fa-birthday-cake"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 如意商城 -->
    <div class="mall-section">
      <div class="section-head">
        <h3 class="section-title">如意商城</h3>
        <span class="more-btn">更多</span>
      </div>
      <div class="mall-scroll">
        <div class="mall-card" v-for="item in mallItems" :key="item.id" @click="handleMall(item)">
          <div class="mall-img" :style="{ background: item.bg }">
            <i class="fas fa-box-open"></i>
          </div>
          <span class="mall-title">{{ item.name }}</span>
          <span class="mall-price">¥ {{ item.price }}</span>
        </div>
      </div>
    </div>

    <!-- 精品推荐 -->
    <div class="recommend-section">
      <div class="section-head">
        <h3 class="section-title">精品推荐</h3>
        <span class="more-btn">更多</span>
      </div>
      <div class="recommend-grid">
        <div class="recommend-card" v-for="item in recommendItems" :key="item.id" @click="handleRecommend(item)">
          <div class="recommend-img" :style="{ background: item.bg }">
            <i class="fas fa-umbrella-beach"></i>
          </div>
          <span class="recommend-title">{{ item.title }}</span>
          <span class="recommend-tag">机票+酒店</span>
          <span class="recommend-price">¥ {{ item.price }} <em>起</em></span>
        </div>
      </div>
    </div>

    <!-- 底部 Logo -->
    <div class="footer-logo">
      <span class="logo-text">吉祥</span>
    </div>

    <!-- 如意助手悬浮按钮 -->
    <div class="assistant-float" @click="handleAssistant">
      <div class="assistant-avatar"><i class="fas fa-robot"></i></div>
      <span>如意助手</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('company')

const quickApps = [
  { id: 1, icon: 'fas fa-video', name: '会议室' },
  { id: 2, icon: 'fas fa-address-book', name: '通讯录' },
  { id: 3, icon: 'fas fa-cogs', name: '流程中心' },
  { id: 4, icon: 'fas fa-users', name: '员工活…' },
  { id: 5, icon: 'far fa-calendar-check', name: '公司值班' },
  { id: 6, icon: 'fas fa-ellipsis-h', name: '全部' }
]

const docTabs = [
  { id: 'company', name: '公司文件' },
  { id: 'meeting', name: '会议纪要' },
  { id: 'notice', name: '通知公告' },
  { id: 'mail', name: '邮' },
  { id: 'more', name: '更多' }
]

const docsData = {
  company: [
    { id: 1, title: '关于2026年6月28日B-8540飞机滑过停止线事件…', no: '吉祥航发〔2026〕174号' },
    { id: 2, title: '关于发布《吉祥航空"2026年世界人工智能大会…', no: '吉祥航发〔2026〕173号' },
    { id: 3, title: '关于对2026年防台防汛工作督查情况的通报', no: '吉祥航发〔2026〕172号' },
    { id: 4, title: '关于召开2026年吉祥航空年中工作会议暨五届二…', no: '吉祥航发〔2026〕171号' },
    { id: 5, title: '关于飞行标准管理部组织架构调整的通知', no: '吉祥航发〔2026〕170号' }
  ],
  meeting: [
    { id: 1, title: '2026年第二季度经营分析会会议纪要', no: '〔2026〕12号' },
    { id: 2, title: '安全委员会第23次会议纪要', no: '〔2026〕11号' }
  ],
  notice: [
    { id: 1, title: '关于开展2026年度员工体检的通知', no: '2026-06-28' },
    { id: 2, title: '关于办公楼空调系统升级改造的通知', no: '2026-06-25' }
  ],
  mail: [
    { id: 1, title: '【重要】7月薪资发放时间调整通知', no: 'HR 06-30' }
  ],
  more: [
    { id: 1, title: '查看全部文档', no: '更多分类 →' }
  ]
}

const filteredDocs = computed(() => docsData[activeTab.value] || [])

const features = [
  { id: 1, icon: 'fas fa-book', title: '如意飞翔', sub: '美好吉祥', bg: 'linear-gradient(135deg, #ffe8ee 0%, #ffd4df 100%)' },
  { id: 2, icon: 'fas fa-envelope-open-text', title: '信息通知', sub: '内部招聘', bg: 'linear-gradient(135deg, #fff4e0 0%, #ffe8c8 100%)' },
  { id: 3, icon: 'fas fa-utensils', title: '花吉食', sub: '今日菜单', bg: 'linear-gradient(135deg, #f0e8ff 0%, #e0d4f8 100%)' }
]

const mallItems = [
  { id: 1, name: '吉祥航空IP熊猫公仔-凤仙子', price: '55.00', bg: '#ffd6e0' },
  { id: 2, name: '吉祥航空IP熊猫公仔-灵灵子', price: '55.00', bg: '#d6e8ff' },
  { id: 3, name: '吉祥航空IP熊猫公仔-小狮弟', price: '55.00', bg: '#e0d4f8' }
]

const recommendItems = [
  { id: 1, title: '【休闲度假】上海-西双版纳3-5天往返机票+…', price: '1780.00', bg: 'linear-gradient(135deg, #3b5998 0%, #8b9dc3 100%)' },
  { id: 2, title: '【休闲度假】上海-槟城5-6天往返机票+1晚…', price: '2089.00', bg: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)' },
  { id: 3, title: '上海出发|济州往返机票+济州维斯酒店', price: '1801.00', bg: 'linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)' },
  { id: 4, title: '【休闲度假】上海出发|探密玉龙雪山4天3晚自由…', price: '1697.00', bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }
]

function handleStat(name) { alert(`打开${name}`) }
function handleApp(app) { alert(`打开${app.name}`) }
function handleReport() { alert('查看2025可持续发展报告') }
function handleDoc(doc) { alert(doc.title) }
function handleCulture() { alert('企业文化') }
function handleFeature(item) { alert(item.title) }
function handleWelfare(name) { alert(`打开${name}`) }
function handleMall(item) { alert(item.name) }
function handleRecommend(item) { alert(item.title) }
function handleAssistant() { alert('如意助手') }
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f5f5f5; position: relative; }

/* Hero Header */
.hero-header { background: linear-gradient(180deg, #d4a8e8 0%, #b88ad4 100%); padding: 40px 16px 20px; position: relative; }
.hero-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.city-row { display: flex; align-items: center; gap: 6px; color: #fff; font-size: 14px; }
.city-row i { font-size: 13px; }
.hero-icons { display: flex; align-items: center; gap: 16px; color: #fff; font-size: 20px; }
.bell-wrap { position: relative; }
.bell-wrap .badge { position: absolute; top: -6px; right: -8px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; background: #ff3b6b; color: #fff; font-size: 11px; font-weight: 600; border-radius: 9px; padding: 0 5px; }

.hero-search { display: flex; align-items: center; background: rgba(255,255,255,0.9); border-radius: 20px; padding: 8px 16px; margin-bottom: 16px; }
.hero-search i { color: #999; margin-right: 10px; font-size: 13px; }
.hero-search input { flex: 1; border: none; outline: none; font-size: 13px; background: transparent; color: #333; }
.hero-search input::placeholder { color: #aaa; }

/* Stats */
.stats-row { display: flex; justify-content: space-between; padding: 4px 0; }
.stat-item { width: 25%; display: flex; flex-direction: column; align-items: center; position: relative; }
.stat-icon { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: #fff; margin-bottom: 6px; }
.stat-icon i { font-size: 28px; }
.stat-label { font-size: 12px; color: #fff; }
.stat-badge { position: absolute; top: -4px; right: 12px; min-width: 22px; height: 18px; line-height: 18px; text-align: center; background: #ff3b6b; color: #fff; font-size: 11px; font-weight: 600; border-radius: 9px; padding: 0 6px; }
.stat-badge.badge-plus { font-size: 10px; }

/* Theme Banner */
.theme-banner { height: 100px; background: linear-gradient(135deg, #e8c8f0 0%, #d4a8e8 50%, #c090d8 100%); margin: 0 12px; border-radius: 12px 12px 0 0; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.theme-banner::before { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 30px; background: #f5f5f5; border-radius: 50% 50% 0 0; transform: translateY(15px); }
.theme-title { font-size: 28px; font-weight: 700; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 2px; }
.theme-sub { font-size: 22px; font-weight: 600; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.1); }

/* Quick Card */
.quick-card { background: #fff; margin: -20px 12px 12px; border-radius: 12px; padding: 16px 0 8px; position: relative; z-index: 2; }
.quick-grid { display: flex; flex-wrap: wrap; }
.quick-item { width: 20%; display: flex; flex-direction: column; align-items: center; margin-bottom: 12px; }
.quick-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px; }
.quick-icon i { font-size: 26px; color: #333; }
.quick-name { font-size: 12px; color: #333; }

/* Report Banner */
.report-banner { margin: 0 12px 12px; border-radius: 12px; height: 100px; background: linear-gradient(135deg, #f8d4e8 0%, #f0c0e0 50%, #e8a8d8 100%); position: relative; overflow: hidden; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.report-text { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); font-size: 11px; color: #b85a8a; font-weight: 500; white-space: nowrap; }
.report-year { font-size: 36px; font-weight: 700; color: #d45a8a; letter-spacing: 2px; }
.report-title { font-size: 16px; font-weight: 600; color: #b85a8a; margin-top: -4px; }
.report-sub { font-size: 10px; color: #b85a8a; margin-top: 2px; }

/* Docs Card */
.docs-card { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px 0 0; overflow: hidden; }
.tabs-row { display: flex; padding: 0 16px 12px; gap: 20px; border-bottom: 1px solid #f5f5f5; }
.tab-item { font-size: 14px; color: #666; padding: 4px 0; position: relative; white-space: nowrap; }
.tab-item.active { color: #ff6b9d; font-weight: 600; }
.tab-item.active::after { content: ''; position: absolute; bottom: -13px; left: 50%; transform: translateX(-50%); width: 20px; height: 3px; background: #ff6b9d; border-radius: 2px; }
.docs-list { padding: 0 16px; }
.doc-item { padding: 14px 0; border-bottom: 1px solid #f5f5f5; }
.doc-item:last-child { border-bottom: none; }
.doc-title { display: block; font-size: 14px; color: #333; margin-bottom: 6px; line-height: 1.4; }
.doc-no { font-size: 12px; color: #999; }

/* 关于吉祥 */
.about-section { padding: 0 12px 12px; }
.section-title { font-size: 16px; font-weight: 600; color: #333; margin-bottom: 12px; }

.culture-card { background: linear-gradient(135deg, #c05080 0%, #a84070 100%); border-radius: 12px; padding: 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.culture-text h4 { font-size: 20px; font-weight: 600; color: #fff; margin-bottom: 6px; }
.culture-text span { font-size: 14px; color: rgba(255,255,255,0.85); }
.culture-plane { width: 80px; height: 60px; display: flex; align-items: center; justify-content: center; }
.culture-plane i { font-size: 48px; color: #fff; transform: rotate(-15deg); }

.feature-grid { display: flex; gap: 10px; }
.feature-card { flex: 1; background: #fff; border-radius: 12px; padding: 12px 8px; display: flex; flex-direction: column; align-items: center; text-align: center; }
.feature-icon { width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
.feature-icon i { font-size: 24px; color: #ff6b9d; }
.feature-title { font-size: 13px; color: #333; font-weight: 500; margin-bottom: 2px; }
.feature-sub { font-size: 11px; color: #999; }

/* Welfare */
.welfare-section { padding: 0 12px 12px; }
.section-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.section-head .section-title { margin-bottom: 0; }
.more-btn { font-size: 12px; color: #999; }

.welfare-grid { display: flex; gap: 10px; }
.welfare-card { flex: 1; background: #fff; border-radius: 12px; padding: 14px 12px; display: flex; justify-content: space-between; align-items: center; min-height: 80px; position: relative; overflow: hidden; }
.welfare-text { display: flex; flex-direction: column; gap: 4px; flex: 1; }
.welfare-text h4 { font-size: 14px; color: #333; font-weight: 600; }
.welfare-text > span:nth-child(2) { font-size: 11px; color: #999; }
.welfare-tag { display: inline-block; padding: 2px 8px; background: #e8f0ff; color: #4a7bd4; font-size: 10px; border-radius: 4px; margin-top: 2px; align-self: flex-start; }
.w-tag-pink { background: #ffe8f0; color: #e85a80; }
.welfare-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.welfare-icon i { font-size: 28px; color: #ccc; }

/* Mall */
.mall-section { padding: 0 12px 12px; }
.mall-scroll { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 4px; }
.mall-scroll::-webkit-scrollbar { display: none; }
.mall-card { flex-shrink: 0; width: 130px; background: #fff; border-radius: 12px; padding: 10px; }
.mall-img { width: 100%; height: 100px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
.mall-img i { font-size: 32px; color: rgba(255,255,255,0.8); }
.mall-title { display: block; font-size: 12px; color: #333; line-height: 1.4; margin-bottom: 4px; height: 32px; overflow: hidden; }
.mall-price { font-size: 15px; font-weight: 600; color: #ff3b6b; }

/* Recommend */
.recommend-section { padding: 0 12px 16px; }
.recommend-grid { display: flex; flex-wrap: wrap; gap: 10px; }
.recommend-card { width: calc(50% - 5px); background: #fff; border-radius: 12px; padding: 10px; }
.recommend-img { width: 100%; height: 90px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
.recommend-img i { font-size: 28px; color: rgba(255,255,255,0.8); }
.recommend-title { display: block; font-size: 12px; color: #333; line-height: 1.4; margin-bottom: 6px; height: 32px; overflow: hidden; }
.recommend-tag { display: inline-block; font-size: 10px; color: #4a7bd4; background: #e8f0ff; padding: 1px 6px; border-radius: 4px; margin-bottom: 4px; }
.recommend-price { font-size: 15px; font-weight: 600; color: #ff3b6b; }
.recommend-price em { font-size: 11px; font-style: normal; color: #999; font-weight: 400; }

/* Footer Logo */
.footer-logo { text-align: center; padding: 12px 0 20px; }
.logo-text { font-size: 14px; font-weight: 600; color: #ccc; }

/* Assistant Float */
.assistant-float { position: fixed; right: 16px; bottom: 90px; background: linear-gradient(135deg, #ff8aa0 0%, #ff6b9d 100%); border-radius: 20px 20px 20px 4px; padding: 8px 12px; display: flex; align-items: center; gap: 6px; z-index: 10; box-shadow: 0 4px 12px rgba(255,107,157,0.3); }
.assistant-avatar { width: 28px; height: 28px; background: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.assistant-avatar i { font-size: 14px; color: #ff6b9d; }
.assistant-float span { font-size: 12px; color: #fff; font-weight: 500; }
</style>