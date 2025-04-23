<template>
    <div class="user-manager">
      <h2>Quản lý người dùng</h2>
  
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Tên</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.email }}</td>
            <td>
              <input v-model="user.name" />
            </td>
            <td>
              <select v-model="user.role">
                <option>user</option>
                <option>admin</option>
              </select>
            </td>
            <td>
              <button @click="updateUser(index)">Lưu</button>
              <button @click="deleteUser(index)" class="delete">Xoá</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const users = ref([]);
  
  onMounted(() => {
    const stored = JSON.parse(localStorage.getItem('users') || '[]');
    users.value = stored;
  });
  
  const updateUser = (index) => {
    localStorage.setItem('users', JSON.stringify(users.value));
    alert('Đã cập nhật người dùng!');
  };
  
  const deleteUser = (index) => {
    if (confirm('Bạn có chắc muốn xoá người dùng này?')) {
      users.value.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users.value));
    }
  };
  onMounted(() => {
  const stored = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Thêm một user ảo nếu chưa có user nào trong localStorage
  if (stored.length === 0) {
    stored.push(
      { email: 'testuser1@example.com', name: 'Admin', role: 'admin' },
      { email: 'testuser2@example.com', name: 'User Test 2', role: 'user' },
      { email: 'testuser3@example.com', name: 'User Test 3', role: 'user' },
      { email: 'testuser4@example.com', name: 'User Test 4', role: 'user' },
      { email: 'testuser5@example.com', name: 'User Test 5', role: 'user' }
    );
    localStorage.setItem('users', JSON.stringify(stored));
  }

  users.value = stored;
});

  </script>
  
  <style scoped>
  .user-manager {
    max-width: 800px;
    margin: auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  thead {
    background-color: #f0f0f0;
  }
  
  th,
  td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  input,
  select {
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 6px 12px;
    margin-right: 4px;
    border: none;
    cursor: pointer;
    background-color: #2b8a3e;
    color: white;
    border-radius: 4px;
  }
  
  button.delete {
    background-color: #d9534f;
  }
  </style>
  