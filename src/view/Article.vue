<!-- src/views/PostList.vue -->
<template>
    <div class="post-list">
      <h2>Bài Viết Mới Nhất</h2>
      <div class="post" v-for="post in posts" :key="post.id" @click="viewPost(post)">
        <img :src="post.image" alt="Post Image" />
        <h3>{{ post.title }}</h3>
        <p>{{ post.description.slice(0, 100) }}...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const posts = [
    {
      id: 1,
      title: "Khám phá Đà Lạt mộng mơ",
      image: "https://source.unsplash.com/featured/?dalat",
      description: "Đà Lạt là điểm đến hấp dẫn với khí hậu mát mẻ, cảnh đẹp thơ mộng, thích hợp để nghỉ dưỡng và tham quan các địa điểm nổi tiếng như Thung Lũng Tình Yêu, Hồ Xuân Hương, đồi chè Cầu Đất..."
    },
    {
      id: 2,
      title: "Ẩm thực Huế - đậm đà hương vị cố đô",
      image: "https://source.unsplash.com/featured/?hue,food",
      description: "Ẩm thực Huế mang đậm nét tinh tế của văn hóa cung đình và dân gian, nổi bật với các món như bún bò Huế, bánh bèo, bánh bột lọc và chè Huế phong phú..."
    },
    {
      id: 3,
      title: "Vịnh Hạ Long - Kỳ quan thiên nhiên thế giới",
      image: "https://source.unsplash.com/featured/?halongbay",
      description: "Vịnh Hạ Long là di sản thiên nhiên với hàng ngàn đảo đá vôi kỳ vĩ trên mặt biển xanh. Nơi đây còn có những hang động tuyệt đẹp như Hang Sửng Sốt, Hang Đầu Gỗ..."
    }
  ];
  
  const viewPost = (post) => {
    router.push({ name: "article", params: { article: post } });
  };
  </script>
  
  <style scoped>
  .post-list {
    padding: 40px;
    max-width: 1000px;
    margin: auto;
  }
  .post {
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }
  .post img {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
  .post h3 {
    margin-top: 12px;
    color: #222;
  }
  .post p {
    color: #666;
  }
  </style>
  