<template>
    <div class="article-container">
      <h1>{{ article.title }}</h1>
      <img :src="article.image" alt="Article Image" />
      <p>{{ article.description }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const article = route.params.article; // Lấy thông tin bài viết từ URL (sẽ truyền qua router.push)
  </script>
  
  <style scoped>
  .article-container {
    padding: 20px;
    max-width: 800px;
    margin: auto;
  }
  
  .article-container img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  
  .article-container h1 {
    color: var(--main-color);
  }
  
  .article-container p {
    color: #333;
    font-size: 16px;
  }
  </style>
  