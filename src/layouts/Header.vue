<template>
  <header class="header">
    <div class="left">
      <a href="/"><img src="../assets/images/logo.svg" alt="embark.org" class="logo" /></a>

      <!-- Dropdown button for desktop -->
      <div class="dropdown">
        <button @click="toggleDropdown" :class="{ active: dropdownOpen }" class="dropdown-btn">
          Menu <span class="arrow">▲</span>
        </button>
      </div>

      <!-- Hamburger menu for mobile -->
      <div class="hamburger" @click="toggleDropdown">
        <span :class="{ open: dropdownOpen }"></span>
        <span :class="{ open: dropdownOpen }"></span>
        <span :class="{ open: dropdownOpen }"></span>
      </div>
    </div>

    <div class="search-box" v-if="!isMobile">
      <input type="text" placeholder="Search" />
      <span class="search-icon">🔍</span>
    </div>

    <div class="right">
      <template v-if="isLoggedIn">
        <div class="account-dropdown" @click="toggleAccountMenu">
          <span class="username">👤 {{ userName }}</span>
          <div v-if="accountMenuOpen" class="account-menu">
            <a @click.prevent="goToProfile">Thông tin tài khoản</a>
            <a @click.prevent="logout">Đăng xuất</a>
          </div>
        </div>
      </template>
      <template v-else>
        <a href="#" @click.prevent="goToLogin" :class="{ active: selectedLink === 'login' }">Đăng Nhập</a>
        <a href="#" @click.prevent="goToRegister" :class="{ active: selectedLink === 'register' }">Đăng Ký</a>
      </template>
    </div>
  </header>

  <!-- Mega Dropdown -->
  <div v-if="dropdownOpen" class="mega-dropdown">
    <div class="dropdown-content">
      <a href="#" class="item" @click.prevent="goToMap"><span class="icon">📍</span><span>Bản Đồ</span></a>
      <a href="#" class="item" @click.prevent="goToPlace"><span class="icon">💬</span><span>Bài Viết</span></a>
      <a href="#" class="item"><span class="icon">🏞</span><span>Đặt Tour</span></a>
      <a href="#" class="item"><span class="icon">👥</span><span>Đánh Giá</span></a>
      <a href="#" class="item" @click.prevent="goToConTact"><span class="icon">🌆</span><span>Liên Hệ</span></a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const dropdownOpen = ref(false);
const selectedLink = ref(null);
const isLoggedIn = ref(true);
const userName = ref("Người dùng");
const accountMenuOpen = ref(false);
const isMobile = ref(false);

// Kiểm tra đăng nhập & kích thước màn hình
onMounted(() => {
  const user = localStorage.getItem("user");
  if (user) {
    isLoggedIn.value = true;
    userName.value = JSON.parse(user).name || "Người dùng";
  }

  isMobile.value = window.innerWidth <= 768;
  window.addEventListener("resize", () => {
    isMobile.value = window.innerWidth <= 768;
  });

  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
  if (dropdownOpen.value) selectedLink.value = null;
}

function toggleAccountMenu() {
  accountMenuOpen.value = !accountMenuOpen.value;
}

function handleClickOutside(e) {
  if (
    !e.target.closest(".dropdown") &&
    !e.target.closest(".hamburger") &&
    !e.target.closest(".mega-dropdown") &&
    !e.target.closest(".right") &&
    !e.target.closest(".account-menu")
  ) {
    dropdownOpen.value = false;
    accountMenuOpen.value = false;
    selectedLink.value = null;
  }
}

// Navigation
const goToLogin = () => router.push("/login");
const goToRegister = () => router.push("/register");
const goToMap = () => router.push("/map");
const goToPlace = () => router.push("/place");
const goToConTact = () => router.push("/contact");
const goToProfile = () => {
  router.push("/account/info");
  accountMenuOpen.value = false;
};
const logout = () => {
  localStorage.removeItem("user");
  isLoggedIn.value = false;
  router.push("/");
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-bottom: 1px solid #ddd;
  font-family: sans-serif;
  background: white;
  position: relative;
  z-index: 100;
}

.left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  height: 32px;
}

.dropdown-btn,
.right a {
  background: none;
  border: none;
  font-size: 16px;
  color: black;
  padding: 10px 16px;
  cursor: pointer;
  text-decoration: none;
}

.dropdown-btn.active,
.right a.active {
  background-color: #333;
  color: white;
  border-radius: 4px;
}

.arrow {
  color: #e40066;
  margin-left: 6px;
}

.search-box {
  position: relative;
  width: 250px;
}

.search-box input {
  width: 100%;
  padding: 8px 30px 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: gray;
}

.right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Mega dropdown */
.mega-dropdown {
  background-color: #2b2b2b;
  color: white;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
}
.dropdown-content {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  justify-content: space-between;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 100px;
  padding: 10px 12px;
  border-right: 1px solid #444;
  color: white;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.item:last-child {
  border-right: none;
}
.item:hover {
  background-color: #444;
  color: #fff;
  border-radius: 4px;
}
.icon {
  font-size: 20px;
  margin-bottom: 6px;
}

/* Account dropdown */
.account-dropdown {
  position: relative;
  cursor: pointer;
  color: black;
  font-weight: bold;
}
.username {
  padding: 10px 16px;
}
.account-menu {
  position: absolute;
  right: 0;
  top: 110%;
  background: white;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  border-radius: 4px;
  z-index: 200;
}
.account-menu a {
  display: block;
  padding: 10px 16px;
  text-decoration: none;
  color: black;
  white-space: nowrap;
}
.account-menu a:hover {
  background-color: #eee;
}

/* Hamburger menu */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  cursor: pointer;
}
.hamburger span {
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: 0.3s;
}
.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger span.open:nth-child(2) {
  opacity: 0;
}
.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .dropdown-btn {
    display: none;
  }

  .search-box {
    display: none;
  }
}
</style>
