<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

// 声明变量并指定类型
let switchCtn: HTMLElement | null = null;
let switchC1: HTMLElement | null = null;
let switchC2: HTMLElement | null = null;
let switchCircle: NodeListOf<HTMLElement> | null = null;
let switchBtn: NodeListOf<HTMLElement> | null = null;
let aContainer: HTMLElement | null = null;
let bContainer: HTMLElement | null = null;
let allButtons: NodeListOf<HTMLElement> | null = null;

// 路由实例
const router = useRouter();

// 返回按钮点击事件
const goBack = () => {
    // 如果有路由历史，返回上一页
    if (router) {
        router.back();
    } else {
        // 如果没有路由，使用浏览器的history返回
        window.history.back();
    }
};

// 防止表单提交
const getButtons = (e: Event) => e.preventDefault();

// 切换表单函数
const changeForm = (e: Event) => {
    // 空值检查
    if (!switchCtn || !switchC1 || !switchC2 || !switchCircle || !aContainer || !bContainer) {
        return;
    }

    switchCtn.classList.add('is-gx');
    setTimeout(function(){
        if (switchCtn) {
            switchCtn.classList.remove('is-gx');
        }
    }, 1500);

    switchCtn.classList.toggle('is-txr');
    if (switchCircle[0]) switchCircle[0].classList.toggle('is-txr');
    if (switchCircle[1]) switchCircle[1].classList.toggle('is-txr');
    switchC1.classList.toggle('is-hidden');
    switchC2.classList.toggle('is-hidden');
    aContainer.classList.toggle('is-txl');
    bContainer.classList.toggle('is-txl');
    bContainer.classList.toggle('is-z');
};

// 添加事件监听器
const addEventListeners = () => {
    if (allButtons) {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener('click', getButtons);
        }
    }

    if (switchBtn) {
        for (let i = 0; i < switchBtn.length; i++) {
            switchBtn[i].addEventListener('click', changeForm);
        }
    }
};

// 移除事件监听器
const removeEventListeners = () => {
    if (allButtons) {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].removeEventListener('click', getButtons);
        }
    }

    if (switchBtn) {
        for (let i = 0; i < switchBtn.length; i++) {
            switchBtn[i].removeEventListener('click', changeForm);
        }
    }
};

// 组件挂载后获取DOM元素并添加事件监听器
onMounted(() => {
    switchCtn = document.querySelector('#switch-cnt');
    switchC1 = document.querySelector('#switch-c1');
    switchC2 = document.querySelector('#switch-c2');
    switchCircle = document.querySelectorAll('.switch_circle');
    switchBtn = document.querySelectorAll('.switch-btn');
    aContainer = document.querySelector('#a-container');
    bContainer = document.querySelector('#b-container');
    allButtons = document.querySelectorAll('.submit');

    addEventListeners();
});

// 组件卸载时移除事件监听器
onUnmounted(() => {
    removeEventListeners();
});
</script>
<template>
  <div class="body">
    <div class="shell">
        <!-- 返回按钮 -->
        <i class="iconfont back-button" @click="goBack">&#xe88f;</i>

        <div class="container a-container" id="a-container">
            <form action="" method="" class="form" id="a-form">
                <h2 class="form_title title">创建账号</h2>
                <input type="text" class="form_input" placeholder="用户名" required>
                <input type="text" class="form_input" placeholder="密码" required>
                <input type="text" class="form_input" placeholder="确认密码" required>
                <input type="text" class="form_input" placeholder="姓名" required>
                <input type="text" class="form_input" placeholder="身份（例如：2025级部员）" required>
                <input type="text" class="form_input" placeholder="激活码" required>
                <button class="form_button button submit">注 册</button>
            </form>
        </div>
        <div class="container b-container" id="b-container">
            <form action="" method="" class="form" id="b-form">
                <h2 class="form_title title">登录账号</h2>
                <input type="text" class="form_input" placeholder="用户名" required>
                <input type="password" class="form_input" placeholder="密码" required>
                <a class="form_link">忘记密码？</a>
                <button class="form_button button submit">登 录</button>
            </form>
        </div>
        <div class="switch" id="switch-cnt">
            <div class="switch_circle"></div>
            <div class="switch_circle switch_circle-t"></div>
            <div class="switch_container" id="switch-c1">
                <h2 class="switch_title title" style="letter-spacing: 0;">欢迎回来！</h2>
                <p class="switch_description description">已经有账号了喵~快去登录吧！</p>
                <button class="switch_button button switch-btn img-right">去 登 录</button >
            </div>

            <div class="switch_container is-hidden" id="switch-c2">
                <h2 class="switch_title title" style="letter-spacing: 0;">你好，新伙伴！</h2>
                <p class="switch_description description">还没有账号？去注册一个吧！</p>
                <button class="switch_button button switch-btn img-left">去 注 册</button>
            </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
  *{
       margin:0;
       padding: 0;
       box-sizing: border-box;
       user-select: none;
   }
   html, body {
       width: 100vw;
       height: 100%;
       margin: 0;
       padding: 0;
   }
   #app {
       width: 100vw;
       height: 100%;
       margin: 0;
       padding: 0;
   }
   header {
       width: 100vw;
       height: 100%;
   }
   .body {
       width:100vw;
       height: 100vh;
       min-height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 12px;
       background: linear-gradient(to top, #fad312, #ff7e5f);
       color:#a0a5a8;
   }
  .shell{
      position: relative;
      width:1000px;
      min-width: 1000px;
      height: 600px;
      min-height: 600px;
      padding: 25px;
      background-color: #ecf0f3;
      box-shadow: 5px 5px 15px #ff7e5f;
      border-radius: 12px;
      overflow: hidden;
      margin: 0 auto;
  }
  /* 返回按钮样式 */
  .back-button {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 24px;
      border: none;
      outline: none;
      cursor: pointer;
      z-index: 300; /* 确保返回按钮在最上层 */
      color:#FF7E5F;
      transition: all 0.3s ease;
  }
  .back-button:hover {
      transform: scale(1.2);
      color: #FF7E5F;
  }
  /* 滑块样式 */
  .switch {
      /* 滑块z-index确保在正确层级 */
      z-index: 200;
      /* 滑块背景色，与shell背景色一致 */
      background-color: #ecf0f3;
      /* 确保滑块是绝对定位 */
      position: absolute;
      /* 添加边框和阴影，让滑块更明显 */
      box-shadow: 4px 4px 10px #b8bec7, inset -8px -8px 12px #fff;
      /* 确保滑块内的内容可见 */
      overflow: hidden;
  }
  @media (max-width: 1200px) {
      .shell{
          transform: scale(0.7);
      }
  }
  @media (max-width: 1000px) {
      .shell{
          transform: scale(0.6);
      }
  }
  @media (max-width: 800px) {
      .shell{
          transform: scale(0.5);
      }
  }
  @media (max-width: 600px) {
      .shell{
          transform: scale(0.4);
      }
  }
  .container{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top:0;
      width:600px;
      height: 100%;
      padding: 25px;
      transition: 1.25s;
      background-color: #ecf0f3;
  }
  .form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width:100%;
      height: 100%;
  }
  .form_input{
      margin: 4px 0;
      padding-left: 25px;
      width: 350px;
      height:40px;
      font-size: 13px;
      border: none;
      outline:none;
      background-color: #ecf0f3;
      letter-spacing: 0.15px;
      transition: 0.25s ease;
      border-radius: 8px;
      box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }
  .form_input:focus{
      box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
  }
  .form_span{
      margin-top: 30px;
      margin-bottom: 12px;
  }
  .form_link{
      color:#181818;
      font-size:15px;
      margin-top: 25px;
      border-bottom: 1px solid #a0a5a8;
      line-height: 2;
  }
  .title{
      font-size:34px;
      font-weight: 700;
      line-height: 3;
      color:#181818;
      letter-spacing: 10px;
  }
  .description{
      font-size:14px;
      letter-spacing: 0.15px;
      text-align: center;
      line-height: 1.6;
  }
  .button{
      width:180px;
      height:50px;
      border-radius:25px;
      margin-top:50px;
      font-weight: 700;
      font-size:14px;
      letter-spacing: 1.15px;
      background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
      color: #f9f9f9;
      box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
      border: none;
      outline: none;
  }
  .a-container{
      z-index: 100;
      left:calc(100% - 600px);
  }
  .b-container{
      left:calc(100% - 600px);
      z-index: 0;
  }
  .switch{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width:400px;
      padding: 50px;
      z-index: 200; /* 滑块z-index设置为200，位于图片z-index之间 */
      transition: 1.25s;
      background-color: #ecf0f3;
      overflow: hidden; /* 确保滑块外的内容不显示 */
      box-shadow: 4px 4px 10px #b8bec7,inset -8px -8px 12px #fff;
  }
  .switch_circle{
      position: absolute;
      width:500px;
      height:500px;
      border-radius: 50%;
      background-color: #ecf0f3;
      box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
      bottom:-60%;
      left:-60%;
      transition: 1.25s;
  }
  .switch_circle-t{
      top:-30%;
      left:60%;
      width:300px;
      height:300px;
  }
  .switch_container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width:400px;
      padding: 50px 55px;
      transition: 1.25s;
  }
  .switch_button{
      cursor: pointer;
  }
  .switch_button:hover,
  .submit:hover{
      box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
      transform: scale(0.985);
      transition: 0.25s;
  }
  .switch_button:active,
  .switch_button:focus{
      box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
      transform: scale(0.97);
      transition: 0.25s;
  }
  .is-txr{
      left:calc(100% - 400px);
      transition: 1.25s;
      transform-origin: left;
  }
  .is-txl{
      left:0;
      transition: 1.25s;
      transform-origin: right;
  }
  .is-z{
      z-index: 200;
      transition: 1.25s;
  }
  .is-hidden{
      visibility: hidden;
      opacity: 0;
      position: absolute;
      transition: 1.25s;
  }
  .is-gx{
      animation: is-gx 1.25s;
  }
  @keyframes is-gx{
      0%,
      10%,
      100%{
          width:400px;
      }
      30%,
      50%{
          width:500px;
      }
  }
</style>
