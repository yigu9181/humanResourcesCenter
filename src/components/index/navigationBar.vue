<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleClick1 = () => {
    router.push('/login')
}
const handleClick2 = () => {
    router.push('/introduction')
}
const handleClick3 = () => {
    router.push('/member')
}
const handleClick4 = () => {
    router.push('/personal')
}
const handleClick5 = () => {
    router.push('/materials')
}
const handleClick6 = () => {
    router.push('/activity')
}
</script>
<template>
  <div class="container">
        <div class="avatar-container">
            <div class="avatar" @click="handleClick4"><img src="../../pictures/navigation/头像.png" alt="头像" style="width: 100%; height: 100%; border-radius: 50%;"></div>
            <div class="login" @click="handleClick1" style="font-size: 1rem;"><span>注册&nbsp;|&nbsp;登录</span></div>
        </div>
        <div class="container-check">
            <div class="item1" @click="handleClick2"><span class="iconfont icon-bumen"></span>&nbsp;&nbsp; 部 门 介 绍 </div>
            <div class="item1" @click="handleClick6"><span class="iconfont icon-jieri"></span>&nbsp;&nbsp; 往 期 活 动</div>
            <div class="item1" @click="handleClick3"><span class="iconfont icon-renshu"></span>&nbsp;&nbsp; 往 届 部 员</div>
            <div class="item1" @click="handleClick5"><span class="iconfont icon-ziliaoku"></span>&nbsp;&nbsp; 内 部 资 料</div>
        </div>
    </div>
</template>
<style scoped>
  .container {
      width:18vw;
      height:100%;
      min-height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      display: flex;
      color: white;
      flex-direction: column;
      background: linear-gradient(to top, #fad312, #ff7e5f);
      justify-content:flex-start;
      padding-top: 70px;
      font-size: 1.7rem;
      z-index: 1000;
      box-shadow:  2px 2px 10px #d8d8d8;
  }
  .avatar-container {
      width:100%;
      min-height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
  .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: white;
      border: 1.5px solid rgb(255, 255, 255);
      cursor: pointer;
  }
  .iconfont {
    font-size: 30px;
  }
  .container-check {
      width:100%;
      justify-content:flex-start;
      flex-direction: column;
      flex: 1;
      display: flex;
      margin-top:60px;
      padding-top:80px;
      border-top:2px white dashed;
  }
  .item1{
      display: flex;
      width:100%;
      min-height: 100px;
      justify-content: center;
      align-items: center;
      font-size: 1.7rem;
  }
  .login{
      padding: 8px 16px;
      border: 1.5px solid white;
      border-radius: 20px;
      margin-top:25px;
  }
  .login:hover,.item1:hover{
      opacity: 0.6;
      cursor: pointer;
  }
</style>
