<template>
  <div class="page-container">
    <!-- 飞机背景顶部 -->
    <div class="plane-header">
      <div class="header-icons">
        <i class="fas fa-sign-out-alt" @click="handleExit"></i>
        <i class="fas fa-cog" @click="handleSettings"></i>
      </div>
    </div>

    <!-- 用户名片卡 -->
    <div class="user-card">
      <img :src="currentUser.avatar" class="user-avatar" />
      <div class="user-info">
        <div class="user-name-row">
          <span class="user-name">{{ displayName }}</span>
          <i class="fas fa-venus user-gender"></i>
          <span class="user-tag">
            <i class="far fa-address-card"></i>
            名片
          </span>
        </div>
        <div class="user-title-row" @click="handleTitle">
          <span class="user-title">产品经理</span>
          <i class="fas fa-chevron-right"></i>
        </div>
        <span class="user-dept">信息管理部-管理支撑产品处</span>
      </div>
    </div>

    <!-- 入职提示 -->
    <div class="join-tip">
      <span>2023-07-03日加入，您在吉祥第1101天! 吉祥感谢有你！</span>
      <i class="fas fa-bell"></i>
    </div>

    <!-- 四个快捷功能 -->
    <div class="quick-card">
      <div class="quick-item" @click="handleQuick('我的薪酬')">
        <i class="fas fa-piggy-bank"></i>
        <span>我的薪酬</span>
      </div>
      <div class="quick-item" @click="handleQuick('我要打卡')">
        <i class="far fa-clock"></i>
        <span>我要打卡</span>
      </div>
      <div class="quick-item" @click="handleQuick('我的福利')">
        <i class="fas fa-gift"></i>
        <span>我的福利</span>
      </div>
      <div class="quick-item" @click="handleQuick('我的钱包')">
        <i class="fas fa-wallet"></i>
        <span>我的钱包</span>
      </div>
    </div>

    <!-- WiFi广告 -->
    <div class="wifi-banner" @click="handleWifi">
      <div class="wifi-content">
        <span class="wifi-text">飞机上也可以<span class="highlight">免费</span>上网啦</span>
        <span class="wifi-text">快点击连接Wi-Fi吧！</span>
      </div>
      <div class="wifi-icon-wrap">
        <i class="fas fa-wifi"></i>
      </div>
    </div>

    <!-- 吉食GO -->
    <div class="jishi-card" @click="handleJishi">
      <div class="jishi-info">
        <h4>吉食GO</h4>
        <span class="jishi-balance">钱包余额 <span class="balance-amount">¥ 22.85</span></span>
      </div>
      <div class="pay-code">
        <i class="fas fa-qrcode"></i>
        <span>付款码</span>
      </div>
    </div>

    <!-- 我的邮箱 -->
    <div class="menu-card">
      <div class="menu-item" @click="handleMenu('我的邮箱')">
        <i class="far fa-smile menu-icon"></i>
        <span class="menu-text">我的邮箱</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>

    <!-- 梧桐云学堂 / IT资源 -->
    <div class="menu-card">
      <div class="menu-item" @click="handleMenu('梧桐云学堂')">
        <i class="far fa-bookmark menu-icon"></i>
        <span class="menu-text">梧桐云学堂</span>
        <span class="menu-badge">16</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('我的IT资源')">
        <i class="fas fa-desktop menu-icon"></i>
        <span class="menu-text">我的IT资源</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>

    <!-- 帮助与反馈 / 账户安全中心 -->
    <div class="menu-card">
      <div class="menu-item" @click="handleMenu('帮助与反馈')">
        <i class="far fa-question-circle menu-icon"></i>
        <span class="menu-text">帮助与反馈</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
      <div class="menu-item" @click="handleMenu('账户安全中心')">
        <i class="fas fa-lock menu-icon"></i>
        <span class="menu-text">账户安全中心</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>

    <!-- 退出账号 -->
    <div class="menu-card">
      <div class="menu-item" @click="handleLogout">
        <i class="fas fa-sign-out-alt menu-icon"></i>
        <span class="menu-text">退出账号</span>
        <i class="fas fa-chevron-right menu-arrow"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { MAIN_USER_AVATAR } from '../data/people'

const currentUser = {
  name: '梁吉力',
  avatar: MAIN_USER_AVATAR
}
const displayName = '梁劼'

function handleExit() {
  alert('退出登录')
}

function handleSettings() {
  alert('设置')
}

function handleTitle() {
  alert('切换职位')
}

function handleQuick(name) {
  alert(`打开${name}`)
}

function handleWifi() {
  alert('连接机上WiFi')
}

function handleJishi() {
  alert('吉食GO')
}

function handleMenu(name) {
  alert(`打开${name}`)
}

function handleLogout() {
  if (confirm('确定要退出账号吗？')) {
    alert('已退出')
  }
}
</script>

<style scoped>
.page-container { padding-bottom: 70px; min-height: 100vh; background: #f5f5f5; }

/* 飞机顶部 */
.plane-header { height: 110px; background: linear-gradient(180deg, #c4e0e8 0%, #a8d4dc 100%); position: relative; overflow: hidden; }
.plane-header::before { content: ''; position: absolute; bottom: -10px; left: -20%; width: 140%; height: 60px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 60'%3E%3Cpath d='M0 30 Q50 5 100 20 Q150 35 200 15 Q250 -5 300 10 Q350 25 400 5 L400 60 L0 60 Z' fill='%23ffffff' opacity='0.15'/%3E%3C/svg%3E") no-repeat; background-size: 100% 100%; }
.plane-header::after { content: '✈️'; position: absolute; top: 20px; left: 5%; font-size: 50px; opacity: 0.7; transform: rotate(-5deg); }
.header-icons { position: absolute; top: 12px; right: 16px; display: flex; gap: 16px; color: #333; font-size: 20px; z-index: 2; }
.header-icons i { cursor: pointer; }

/* 用户名片 */
.user-card { background: #fff; margin: -30px 12px 0; border-radius: 12px; padding: 16px; display: flex; align-items: flex-start; gap: 14px; position: relative; z-index: 2; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
.user-avatar { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.user-info { flex: 1; padding-top: 2px; }
.user-name-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; flex-wrap: wrap; }
.user-name { font-size: 18px; font-weight: 600; color: #333; }
.user-gender { color: #ff6b9d; font-size: 14px; }
.user-tag { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; background: #f5f5f5; color: #666; font-size: 11px; border-radius: 4px; }
.user-tag i { font-size: 12px; }
.user-title-row { display: flex; align-items: center; gap: 4px; margin-bottom: 6px; cursor: pointer; }
.user-title { font-size: 14px; color: #333; }
.user-title-row i { font-size: 10px; color: #ccc; }
.user-dept { font-size: 12px; color: #999; }

/* 入职提示 */
.join-tip { margin: 12px; padding: 10px 14px; background: linear-gradient(90deg, #fdf4e3 0%, #fdf0d4 100%); border-radius: 8px; display: flex; justify-content: space-between; align-items: center; }
.join-tip span { font-size: 12px; color: #b87a3a; line-height: 1.5; }
.join-tip i { color: #f5a623; font-size: 14px; flex-shrink: 0; margin-left: 8px; }

/* 四个快捷功能 */
.quick-card { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 20px 0 16px; display: flex; justify-content: space-around; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
.quick-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.quick-item i { font-size: 26px; color: #333; }
.quick-item span { font-size: 12px; color: #333; }

/* WiFi广告 */
.wifi-banner { margin: 0 12px 12px; border-radius: 12px; padding: 16px 20px; background: linear-gradient(135deg, #f5e8d4 0%, #f0dcc0 100%); display: flex; justify-content: space-between; align-items: center; }
.wifi-content { display: flex; flex-direction: column; gap: 2px; }
.wifi-text { font-size: 14px; color: #8b5a3c; font-weight: 500; }
.wifi-text .highlight { color: #ff6b6b; font-weight: 700; }
.wifi-icon-wrap { width: 48px; height: 36px; display: flex; align-items: center; justify-content: center; }
.wifi-icon-wrap i { font-size: 28px; color: #d4a87a; }

/* 吉食GO */
.jishi-card { background: #fff; margin: 0 12px 12px; border-radius: 12px; padding: 16px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
.jishi-info h4 { font-size: 16px; color: #333; font-weight: 600; margin-bottom: 6px; }
.jishi-balance { font-size: 13px; color: #999; }
.balance-amount { color: #ff3b6b; font-weight: 600; font-size: 14px; }
.pay-code { display: flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #e8d4c4 0%, #d4b8a0 100%); padding: 8px 16px; border-radius: 20px; }
.pay-code i { font-size: 16px; color: #8b5a3c; }
.pay-code span { font-size: 13px; color: #8b5a3c; font-weight: 500; }

/* 菜单卡片 */
.menu-card { background: #fff; margin: 0 12px 12px; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
.menu-item { display: flex; align-items: center; padding: 16px; border-bottom: 1px solid #f5f5f5; }
.menu-item:last-child { border-bottom: none; }
.menu-icon { width: 22px; height: 22px; color: #555; margin-right: 14px; font-size: 18px; text-align: center; }
.menu-text { flex: 1; font-size: 14px; color: #333; }
.menu-badge { min-width: 22px; height: 22px; line-height: 22px; text-align: center; background: #ff3b6b; color: #fff; font-size: 12px; font-weight: 600; border-radius: 11px; padding: 0 7px; margin-right: 8px; }
.menu-arrow { color: #ccc; font-size: 12px; }
</style>