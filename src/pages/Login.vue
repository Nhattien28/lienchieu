<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Đăng Nhập</h2>
      
      <!-- Form đăng nhập -->
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label for="username">Tên Đăng Nhập</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            required
          />
        </div>

        <div class="input-group">
          <label for="password">Mật Khẩu</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="input-group">
          <button type="submit" class="login-btn">Login</button>
        </div>
        
        <!-- Thông báo lỗi -->
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');

function handleLogin() {
  // Giả lập kiểm tra đăng nhập (có thể thay bằng logic thực tế)
  if (username.value === 'admin' && password.value === 'admin') {
    // Đăng nhập thành công, điều hướng tới trang khác
    alert('Login successful!');
    // Chuyển hướng hoặc thực hiện hành động sau khi đăng nhập thành công
  } else {
    // Thông báo lỗi nếu đăng nhập không đúng
    errorMessage.value = 'Invalid username or password';
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.login-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button.login-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button.login-btn:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>
