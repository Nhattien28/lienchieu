<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToArticle = (article) => {
  router.push({ name: "Article", params: { article } });
};
</script>

<template>
  <section class="nice-place">
    <div class="container">
      <h1>Bài Viết Nổi Bật</h1>
      <div class="nice-place-content">
        <div class="nice-place-item" @click="navigateToArticle('trungnghia1')">
          <div class="nice-place-img">
            <img src="../assets/images/trungnghia.png" alt="" />
          </div>
          <div class="nice-place-text">
            <h2>Vịnh Trung Nghĩa </h2>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>Kỳ vọng điểm đến du lịch độc đáo tại Liên Chiểu</p>
            <button>Khám Phá</button>
          </div>
        </div>
        <div class="nice-place-item" @click="navigateToArticle('trungnghia2')">
          <div class="nice-place-img">
            <img src="../assets/images/haivanquan.jpg" alt="" />
          </div>
          <div class="nice-place-text">
            <h2>Hải Vân Quan</h2>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>Kỳ vọng điểm đến du lịch độc đáo tại Liên Chiểu</p>
            <button>Khám Phá</button>
          </div>
        </div>
        <div class="nice-place-item" @click="navigateToArticle('trungnghia3')">
          <div class="nice-place-img">
            <img src="../assets/images/namo.png" alt="" />
          </div>
          <div class="nice-place-text">
            <h2>Làng Nam Ô</h2>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>Kỳ vọng điểm đến du lịch độc đáo tại Liên Chiểu</p>
            <button>Khám Phá</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.nice-place {
    padding: 100px 0;

}
/* .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

} */
.container{
    max-width: 1024px;
    margin: auto;

}
.nice-place-content{
    display: flex;
    gap: 20px;
    justify-content: space-between;
}
.nice-place-item{
    width: 30%;
    height: 400px;
    position: relative;
    overflow: hidden;
}
.nice-place-item:hover .nice-place-text{
    transform: translateX(0%);

}


.nice-place-item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
.nice-place-text{
    position: absolute;
    width: 100%;
    height: 200px;
    bottom: 0;
    padding: 12px;
    background: linear-gradient(to right, rgba(0,0,0,0.8),rgba(255,255,255,0));
    transform: translateX(-100%);
    transition: all 0.8s ease;


}
.nice-place-text h2{
    color: var(--main-color);

}
.nice-place-text i{
    color: yellow;
}
.nice-place-text p{
    color: var(--White);
    margin: 12px 0;
}
.nice-place-text button{
    height: 30px;
    width: 100px;
    background-color: var(--main-color);
    border: none;
    border-radius: 10px;
    color: var(--White);
    cursor: pointer;
    transition: all 0.5s ease;
}
.nice-place-text button:hover{
    background-color: var(--White);
    color: var(--main-color);

}
.nice-place h1{
    text-align: center;
    margin-bottom: 50px;
    color: var(--main-color);
    position: relative;
}
.nice-place h1::before{
    position: absolute;
    content: "";
    height: 5px;
    width: 200px;
    background-color: var(--main-color);
    border-radius: 10px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
/* Tablet: 2 cột */
@media (max-width: 992px) {
  .nice-place-item {
    width: calc(50% - 10px);
  }
}

/* Mobile: 1 cột */
@media (max-width: 768px) {
  .nice-place-content {
    flex-direction: column;
    gap: 30px;
  }

  .nice-place-item {
    width: 100%;
    height: auto;
  }

  .nice-place-item img {
    position: relative;
    height: 250px; /* hoặc auto tùy theo ảnh */
  }
}


</style>
