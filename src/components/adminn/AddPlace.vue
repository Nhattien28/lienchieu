<template>
    <div class="add-place-form">
      <h2>Thêm địa điểm mới</h2>
      <form @submit.prevent="submitPlace">
        <div class="form-group">
          <label for="name">Tên địa điểm:</label>
          <input type="text" id="name" v-model="place.name" required />
        </div>
  
        <div class="form-group">
          <label for="description">Mô tả:</label>
          <textarea id="description" v-model="place.description" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="image">Link ảnh:</label>
          <input type="text" id="image" v-model="place.image" required />
        </div>
  
        <div class="form-group">
          <label for="location">Vị trí:</label>
          <input type="text" id="location" v-model="place.location" required />
        </div>
  
        <button type="submit">Thêm địa điểm</button>
      </form>
  
      <div v-if="successMessage" class="success-msg">{{ successMessage }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const place = ref({
    name: '',
    description: '',
    image: '',
    location: '',
  });
  
  const successMessage = ref('');
  
  const submitPlace = () => {
    // Tạm thời lưu vào localStorage hoặc log ra
    const existing = JSON.parse(localStorage.getItem('places') || '[]');
    existing.push({ ...place.value });
    localStorage.setItem('places', JSON.stringify(existing));
  
    successMessage.value = 'Địa điểm đã được thêm!';
    
    // Reset form
    place.value = {
      name: '',
      description: '',
      image: '',
      location: '',
    };
  };
  </script>
  
  <style scoped>
  .add-place-form {
    max-width: 600px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 16px;
  }
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
  }
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    background: #2b8a3e;
    color: white;
    padding: 10px 18px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background: #237032;
  }
  .success-msg {
    margin-top: 16px;
    color: green;
    font-weight: bold;
  }
  </style>
  