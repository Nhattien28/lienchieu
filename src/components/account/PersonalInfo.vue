<template>
  <div class="personal-info">
    <h2>Thông tin cá nhân</h2>
    <form @submit.prevent="updateInfo">
      <label>Họ tên</label>
      <input type="text" v-model="user.fullName" />

      <label>Tuổi</label>
      <input type="number" v-model="user.age" min="1" />

      <label>Giới tính</label>
      <select v-model="user.gender">
        <option value="">-- Chọn giới tính --</option>
        <option value="Nam">Nam</option>
        <option value="Nữ">Nữ</option>
        <option value="Khác">Khác</option>
      </select>

      <label>Số điện thoại</label>
      <input type="text" v-model="user.phone" />

      <label>Địa chỉ</label>
      <input type="text" v-model="user.address" />

      <button type="submit">Cập nhật</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  fullName: "Nguyễn Văn A",
  age: 25,
  gender: "Nam",
  phone: "0912345678",
  address: "123 Đường ABC, TP.HCM",
});

const updateInfo = () => {
  alert("Thông tin đã được cập nhật!");
};
</script>

<style scoped>
.personal-info {
  padding: 100px 30px 30px;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.personal-info h2 {
  color: var(--main-color);
  margin-bottom: 24px;
  text-align: center;
}

.personal-info label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

.personal-info input,
.personal-info select {
  width: 100%;
  height: 36px;
  margin-bottom: 16px;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.personal-info button {
  width: 100%;
  padding: 10px;
  background-color: var(--main-color);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.personal-info button:hover {
  background-color: #333;
}
</style>
