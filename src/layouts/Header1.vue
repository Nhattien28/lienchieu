<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const menuActive = ref(false);
const accountDropdown = ref(false);

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};


const goToHome = () => {
  router.push("/");
};


// Các trang riêng biệt
const goToPlace = () => {
  router.push("/place");
};

const goToMap = () => {
  router.push("/map");
};

const goToContact = () => {
  router.push("/contact");
};
const goToAccountInfo = () => {
  router.push("/account/info");
};
const goToChangePassword = () => {
  router.push("/account/changepassword");
};
</script>

<template>
  <div class="header-top" @mouseleave="accountDropdown = false">
    <i :class="{ open: menuActive }" @click="toggleMenu">
      <img src="../assets/icons/menu.svg" alt="" />
    </i>
    <ul :class="{ active: menuActive }">
      <li><a href="#" @click.prevent="goToHome('/')">Trang Chủ</a></li>
      <li><a href="#" @click.prevent="goToPlace('/place')">Đặc Điểm</a></li>
      <li><a href="#" @click.prevent="goToMap('/map')">Bản Đồ</a></li>
      <li><a href="#" @click.prevent="goToContact('/contact')">Liên Hệ</a></li>
      <li class="account-item"
          @mouseenter="accountDropdown = true"
          @mouseleave="accountDropdown = false">
        <a href="#">Tài khoản</a>
        <div v-if="accountDropdown" class="dropdown-menu">
          <a href="#" @click.prevent="goToAccountInfo('/account/info')">Thông tin cá nhân</a>
          <a href="#" @click.prevent="goTo('/account')">Lịch sử đặt chỗ</a>
          <a href="#" @click.prevent="goToChangePassword('/account')">Thay đổi mật khẩu</a>
        </div>
      </li>
    </ul>
  </div>
  <div class="overlay" @click="toggleMenu" :class="{ active: menuActive }"></div>
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
.account-menu {
  position: relative;
}

.account-menu .dropdown {
  display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  border-radius: 8px;
  z-index: 1001;
  min-width: 180px;
}

.account-menu .dropdown li a {
  display: block;
  padding: 10px 16px;
  color: var(--main-color);
  white-space: nowrap;
  transition: background-color 0.2s ease;
}

.account-menu .dropdown li a:hover {
  background-color: var(--main-color);
  color: white;
}

.account-menu:hover .dropdown {
  display: block;
}
.account-item {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid var(--main-color);
  padding: 10px;
  border-radius: 8px;
  z-index: 2000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dropdown-menu a {
  display: block;
  padding: 6px 12px;
  color: var(--main-color);
  text-decoration: none;
  transition: background 0.3s;
}

.dropdown-menu a:hover {
  background-color: var(--main-color);
  color: white;
}

.account-item {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 110%;
  left: 0;
  min-width: 200px;
  background: white;
  border-radius: 12px;
  padding: 8px 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 2000;
  transition: all 0.2s ease;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.dropdown-menu a:hover {
  background-color: var(--main-color);
  color: white;
  border-radius: 8px;
}


</style>
