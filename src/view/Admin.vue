<template>
    <div class="admin-container">
      <h1>Trang Quản Lý</h1>
      <div class="tabs">
        <button @click="activeTab = 'places'">Thêm địa điểm</button>
        <button @click="activeTab = 'users'">Người dùng</button>
        <button @click="activeTab = 'bookings'">Booking Tour</button>
      </div>
  
      <div class="tab-content">
        <AddPlace v-if="activeTab === 'places'" />
        <UserManager v-if="activeTab === 'users'" />
        <BookingManager v-if="activeTab === 'bookings'" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import AddPlace from '@/components/adminn/AddPlace.vue';
  import UserManager from '@/components/adminn/UserManager.vue';
  import BookingManager from '@/components/adminn/BookingManager.vue';
  
  const activeTab = ref('places');
  </script>
  
  <style scoped>
  .admin-container {
    padding: 20px;
  }
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  .tabs button {
    padding: 10px 20px;
    border: none;
    background: #eee;
    cursor: pointer;
  }
  .tabs button:hover {
    background: #ccc;
  }
  .tab-content {
    border-top: 1px solid #ccc;
    padding-top: 20px;
  }
  </style>
  