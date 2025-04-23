<script setup>
</script>

<template>
    
  <section class="contact">
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

  </section>
</template>

<style scoped>
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
</style>
