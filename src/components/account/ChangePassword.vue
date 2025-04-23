<template>
    <div class="change-password">
      <h2>Thay đổi mật khẩu</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label>Mật khẩu cũ</label>
          <input type="password" v-model="oldPassword" required />
        </div>
        <div class="form-group">
          <label>Mật khẩu mới</label>
          <input type="password" v-model="newPassword" required />
        </div>
        <div class="form-group">
          <label>Xác nhận mật khẩu</label>
          <input type="password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Cập nhật</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const oldPassword = ref("");
  const newPassword = ref("");
  const confirmPassword = ref("");
  
  const handleSubmit = () => {
    if (newPassword.value !== confirmPassword.value) {
      alert("Mật khẩu xác nhận không khớp.");
      return;
    }
    // Gửi dữ liệu lên server
    alert("Cập nhật mật khẩu thành công!");
  };
  </script>
  
  <style scoped>
  .change-password {
    padding: 100px 30px 30px;
    max-width: 500px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
  .form-group {
    margin-bottom: 16px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  button {
    background-color: var(--main-color);
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  </style>
  