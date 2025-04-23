<template>
    <div class="booking-manager">
      <h2>Quản lý đặt tour</h2>
  
      <table>
        <thead>
          <tr>
            <th>Tên người đặt</th>
            <th>Tour</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in bookings" :key="index">
            <td>{{ booking.user }}</td>
            <td>{{ booking.tour }}</td>
            <td>{{ booking.date }}</td>
            <td>
              <select v-model="booking.status">
                <option value="pending">Chờ duyệt</option>
                <option value="confirmed">Đã duyệt</option>
                <option value="canceled">Đã huỷ</option>
              </select>
            </td>
            <td>
              <button @click="saveStatus(index)">Lưu</button>
              <button @click="deleteBooking(index)" class="delete">Xoá</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const bookings = ref([]);
  
  onMounted(() => {
    const stored = localStorage.getItem('bookings');
    bookings.value = stored ? JSON.parse(stored) : [];
  });
  
  const saveStatus = (index) => {
    localStorage.setItem('bookings', JSON.stringify(bookings.value));
    alert('Đã cập nhật trạng thái!');
  };
  
  const deleteBooking = (index) => {
    if (confirm('Xác nhận xoá booking?')) {
      bookings.value.splice(index, 1);
      localStorage.setItem('bookings', JSON.stringify(bookings.value));
    }
  };
  onMounted(() => {
  const stored = localStorage.getItem('bookings');
  if (!stored) {
    localStorage.setItem('bookings', JSON.stringify([
      { user: "Minh", tour: "Tour Bà Nà", date: "2025-05-01", status: "pending" },
      { user: "Linh", tour: "Tour Hải Vân Quan", date: "2025-05-05", status: "confirmed" }
    ]));
  }
  bookings.value = JSON.parse(localStorage.getItem('bookings'));
});

  </script>
  
  <style scoped>
  .booking-manager {
    max-width: 900px;
    margin: auto;
    padding: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  thead {
    background-color: #f5f5f5;
  }
  
  th, td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  select {
    padding: 6px;
  }
  
  button {
    padding: 6px 10px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    background-color: #007bff;
  }
  
  button.delete {
    background-color: #dc3545;
  }
  </style>
  