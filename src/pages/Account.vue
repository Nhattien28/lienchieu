<script setup>
import { ref } from "vue";

const activeTab = ref("profile");

const tabs = [
  { key: "profile", label: "Thông tin cá nhân" },
  { key: "history", label: "Lịch sử đặt chỗ" },
  { key: "password", label: "Thay đổi mật khẩu" },
];
</script>

<template>
  <div class="account-container">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        @click="activeTab = tab.key"
        :class="{ active: activeTab === tab.key }"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'profile'">
        <h2>Thông tin cá nhân</h2>
        <!-- Nội dung thông tin cá nhân -->
      </div>
      <div v-else-if="activeTab === 'history'">
        <h2>Lịch sử đặt chỗ</h2>
        <!-- Nội dung lịch sử -->
      </div>
      <div v-else-if="activeTab === 'password'">
        <h2>Thay đổi mật khẩu</h2>
        <!-- Nội dung đổi mật khẩu -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-container {
  padding: 24px;
  max-width: 800px;
  margin: auto;
}
.tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.tabs button {
  padding: 10px 20px;
  border: 1px solid var(--main-color);
  background-color: white;
  color: var(--main-color);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.tabs button.active {
  background-color: var(--main-color);
  color: white;
}
.tab-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
}
</style>
