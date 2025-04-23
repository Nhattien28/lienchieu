<template>
  <section class="map-container">
    <div class="container">
      <h1>Bản Đồ</h1>
    </div>
    <div id="map"></div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import customMarker from "@/assets/icons/namo.svg";
import customMarker1 from "@/assets/icons/sea.svg";
import customMarker2 from "@/assets/icons/house.svg"; 
import customMarker3 from "@/assets/icons/mountain.svg"; 
import customMarker4 from "@/assets/icons/home.svg"; 
import customMarker5 from "@/assets/icons/rannamo.svg"; 


import { useRouter } from "vue-router";

const router = useRouter();

// Tạo các icon tùy chỉnh cho từng loại
const customIcon1 = L.icon({
  iconUrl: customMarker,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});

const customIcon2 = L.icon({
  iconUrl: customMarker1,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});

const customIcon3 = L.icon({
  iconUrl: customMarker2,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});
const customIcon4 = L.icon({
  iconUrl: customMarker3,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});
const customIcon5 = L.icon({
  iconUrl: customMarker4,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});
const customIcon6 = L.icon({
  iconUrl: customMarker5,
  iconSize: [60, 80],
  iconAnchor: [30, 80],
  popupAnchor: [0, -40],
});

onMounted(() => {
  const map = L.map("map").setView([16.117271, 108.152874], 12.2);

  // Bản đồ thường (OpenStreetMap)
  const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 50,
  });

  // Vệ tinh (Esri)
  const satellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "© Esri, Earthstar Geographics",
      maxZoom: 50,
    }
  );

  // Lớp tên đường (Labels)
  const labels = L.tileLayer(
    "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Labels © Esri",
      maxZoom: 50,
    }
  );

  // Gộp lớp vệ tinh + nhãn
  const satelliteWithLabels = L.layerGroup([satellite, labels]);

  // Mặc định là OSM
  osm.addTo(map);

  // Cho phép chuyển chế độ bản đồ
  const baseMaps = {
    "🗺 Bản đồ thường": osm,
    "🛰 Vệ tinh + Tên đường": satelliteWithLabels,
  };
  L.control.layers(baseMaps).addTo(map);

  // Hàm tạo marker với tooltip luôn hiển thị
  const createMarker = (lat, lng, tooltip, redirectUrl, icon) => {
    const marker = L.marker([lat, lng], { icon: icon })
      .addTo(map)
      .bindTooltip(tooltip, { permanent: true, direction: "top" }) // Hiển thị tên luôn, không cần nhấp vào
      .openTooltip()
      .on("click", () => {
        map.setView([lat, lng], 16); // Phóng to vào marker khi nhấp
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      });
    return marker;
  };
  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    L.popup()
      .setLatLng([lat, lng])
      .setContent(`📍 Vị trí: ${lat.toFixed(6)}, ${lng.toFixed(6)}`)
      .openOn(map);
  });

  // Các marker với icon riêng
  createMarker(16.110835, 108.127543, "<b>Đình Làng Nam Ô</b>", "/login", customIcon5);
  createMarker(16.106950, 108.170278, "<b>Vịnh Đà Nẵng</b>", "https://vi.wikipedia.org/wiki/Thành_phố_Hồ_Chí_Minh", customIcon2);
  createMarker(16.066447, 108.169574, "<b>Làng Trung Nghĩa</b><br>Điểm du lịch truyền thống.", "/place", customIcon3);
  createMarker( 16.133853, 108.124197
  , "<b>Rạn Nam Ô</b>", "https://vi.wikipedia.org/wiki/Biển_Xuân_Thiều", customIcon6);
  createMarker(16.187652, 108.131255, "<b>Hải Vân Quan</b>", "https://vi.wikipedia.org/wiki/Hải_Vân_Quan", customIcon4);
  createMarker(16.089538, 108.120929, "<b>B1 Hồng Phước</b>", "https://vi.wikipedia.org/wiki/B1_Hồng_Phước", customIcon1);
});
</script>

<style scoped>
#map {
  width: 88%;
  height: 600px;
  margin: auto;
  border: 5px solid var(--main-color);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1024px;
  margin: auto;
}

.map-container {
  padding: 100px 0;
}

.map-container h1 {
  text-align: center;
  margin-bottom: 50px;
  color: var(--main-color);
  position: relative;
}
.map-container h1::before {
  position: absolute;
  content: "";
  height: 5px;
  width: 100px;
  background-color: var(--main-color);
  border-radius: 10px;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 768px) {
  #map {
    height: 300px;
    width: 95%;
  }

  .map-container h1 {
    font-size: 24px;
  }
}
</style>
