<template>
    <div class="auth-container">
      <h2>Đăng ký</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="name" type="text" placeholder="Tên Đăng Nhập" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng ký</button>
      </form>
      <p>Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  
  const handleRegister = () => {
    console.log("Đăng ký với:", name.value, email.value, password.value)
    // Thêm logic xử lý đăng ký ở đây
  }
  </script>
  
  <style scoped>
  /* Dùng chung style như Login.vue */
  .auth-container {
    max-width: 400px;
    margin: 100px auto;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(0,0,0,0.1);
    text-align: center;
  }
  input, button {
    width: 100%;
    padding: 10px;
    margin: 12px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
  button {
    background: var(--main-color);
    color: white;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background: #444;
  }
  </style>
  