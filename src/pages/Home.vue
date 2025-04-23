<script setup>
import { ref } from "vue";
const menuActive = ref(false);
const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};
</script>

<template>
  <div class="overlay" @click="toggleMenu" :class="{ active: menuActive }"></div>
  <div class="video-container">
    <video src="../assets/images/videohd.mp4" autoplay muted loop></video>
  
  <div class="header-content">
    <h1>Khám phá</h1>
    <p>Xách balo lên và đi nào</p>
    <form action="">
        <h1>Bạn muốn đi đâu hè này</h1>
        <p>Địa Điểm</p>
        <select>
          <option value="#">Địa điểm 1</option>
          <option value="#">Địa điểm 2</option>
          <option value="#">Địa điểm 3</option>
          <option value="#">Địa điểm 4</option>
        </select>
        <p>Số người</p>
        <input type="number" min="1" placeholder="Bạn đi bao nhiêu người">
        <p>Ngày đi</p>
        <input type="date">
        <p>Ngày về</p>
        <input type="date">
        <button>Tìm kiếm</button>
    </form>
  </div>
</div>
<section  class="about">
    <div class="container">
        <h1>Về Chúng Tôi </h1>
        <div class="about-content row">
            <div class="about-content-left">
                <img src="../assets/images/travel.gif" alt="ảnh động">
            </div>
            <div class="about-content-right">
                <h2>Tại sao bạn nên chọn chúng tôi</h2>
                <p>Chúng tôi là nơi hàng đầu về cung cấp dịch vụ lữ hành tuyệt vời ông mặt trời</p>
                <button>Tìm Hiểu Thêm</button>
            </div>
        </div>
    </div>
  </section>
<!-- <section class="contact">
    <div class="container">
        <h1>Liên hệ</h1>
        <div class="contact-content-top row">
            <div class="contact-content-item">
                <input type="text" placeholder="Tên">
            </div>
            <div class="contact-content-item">
                <input type="text" placeholder="Địa Chỉ">
            </div>
            <div class="contact-content-item">
                <input type="text" placeholder="Số Điện Thoại">
            </div>
            <div class="contact-content-item">
                <input type="text" placeholder="Email">
            </div>
        </div>
        <div class="contact-content-bottom">
            <textarea placeholder="Nội Dung" name="" id=""></textarea>
            <button>Gửi</button>
        </div>
    </div>

  </section> -->
</template>

<style scoped>
.video-container {
  height: 110vh;
  width: 100vw;
  position: relative;
  z-index: 0;
}
.video-container video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.header-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8); /* sáng nhẹ */
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header-top i {
  font-size: 30px;
  cursor: pointer;
  display: none; /* Ẩn icon menu trên desktop */
}

.header-top ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

.header-top ul li a {
  padding: 10px 16px;
  background-color: transparent;
  color: var(--main-color);
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s ease;
}

.header-top ul li a:hover {
  background-color: var(--main-color);
  color: var(--Bg-color);
}
.contact{
    padding: 50px 0;

}
.contact h1{
    text-align: center;
    margin-bottom: 50px;
    color: var(--main-color);
    position: relative;
}
.contact h1::before{
    position: absolute;
    content: "";
    height: 5px;
    width: 80px;
    background-color: var(--main-color);
    border-radius: 10px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
.contact-content-item{
    width: 50%;
    padding: 6px 12px;

}
 .contact-content-top{
    display: flex;
    flex-wrap: wrap;
} 
 .contact-content-top input{
        height: 35px;
        width: 100%;
        margin-bottom: 3px;
        background-color: #dddddd;
        outline: none;
        border: none;
        padding-left: 10px;

 }
.contact-content-bottom{
    padding: 6px 12px;
    text-align: center;

}
.contact-content-bottom textarea{
    width: 100%;
    height: 100px;
    border: none;
    outline: none;
    padding: 12px;
    background-color: #dddddd;
}
.contact-content-bottom button {

    height: 35px;
  width: 150px;
  background-color: var(--main-color);
  color: var(--White);
  margin-top: 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all .3s ease;

}
.contact-content-bottom button:hover {
    background-color: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
}
@media (max-width: 768px) {
  .contact-content-item {
    width: 100%;
  }

  .contact-content-bottom {
    padding: 0 12px;
  }
}
.about {
    padding: 100px 0;

}
.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

}
.container{
    max-width: 1024px;
    margin: auto;

}

.about h1{
    text-align: center;
    margin-bottom: 50px;
    color: var(--main-color);
    position: relative;
}
.about h1::before{
    position: absolute;
    content: "";
    height: 5px;
    width: 120px;
    background-color: var(--main-color);
    border-radius: 10px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
.about-content-left {
    width: 50%;
}
.about-content-left img {
    width: 100%;
}
.about-content-right {
    width: 50%;
    padding-left: 50px;

}
.about-content-right h2 {
    font-weight: normal;
    color: var(--main-color);
}
.about-content-right p {
    font-size: 18px;
    margin: 20px 0;
    
}
.about-content-right  button{
    height: 35px;
  width: 150px;
  background-color: var(--main-color);
  color: var(--White);
  margin-top: 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all .3s ease;

}
.about-content-right  button:hover{
    background-color: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-content-left,
  .about-content-right {
    width: 100%;
    padding: 0;
  }

  .about-content-right {
    margin-top: 30px;
  }

  .about-content-right button {
    margin: auto;
  }
}
/* .header-top i {
  position: fixed;
  margin: 12px;
  font-size: 35px;
  cursor: pointer;
  z-index: 10;
}
.header-top ul {
  position: fixed;
  right: 0;
  width: 300px;
  height: 100vh;
  padding: 150px 0 0 50px;
  display: none;
  opacity: 0;
  background: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 1;
}
.header-top ul.active {
  display: block;
  opacity: 1;
}
.header-top ul li{
  margin-bottom: 20px;
  font-size: 20px;
  cursor: pointer;
  animation: fade 0.3s linear backwards;
  animation-delay: calc(0.3s * var(--x));

}
@keyframes fade { 
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
.header-top ul li a{ 
  display: block;
  background-color: var(--main-color);
    padding: 12px;
    transition: all 0.3s ease;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    color: var(--Bg-color);

}
.header-top ul li a:hover{ 
color: var(--Load-more);
} */
.header-content{
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 36px 50px 0 50px;
  text-align: center;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}
.header-content> h1{
  color: var(--main-color);

}
.header-content> p{
  color: var(--main-color);
  

}
form{
  padding: 12px 12px;
  background-color: var(--White);
  margin-top: 30px;
  border-radius: 10px;
}
form h1{
  color: #333;
  font-size: 27px;
}
form select,input{
  width: 100%;
  height: 35px;
  padding-left: 12px;
  outline: none;
  background-color: var(--White);
  border: none;
}
form p {
  text-align: left;
  color: var(--main-color);
  margin: 8px 0px 3px;
}
form button{
  height: 35px;
  width: 150px;
  background-color: var(--main-color);
  color: var(--White);
  margin-top: 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: all .3s ease;
}
form button:hover{
  background-color: transparent;
  border: 1px solid var(--main-color);
  color: var(--main-color);
}
@media (max-width: 768px)
{
    .header-content{
      width: 100%;
  max-width: 400px;
  padding: 36px 20px 0 20px;
    }
    
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Cập nhật menu mobile */
@media (max-width: 768px) {
  .header-top ul {
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    height: 100px;
    width: 200px;
    padding-top: 100px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1000;
  }

  .header-top ul.active {
    transform: translateX(0);
  }
  .header-top i {
    display: block;
    z-index: 1001;
  }
}


</style>
