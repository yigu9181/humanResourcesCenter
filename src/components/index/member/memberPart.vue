<script setup lang="ts">
  import { ref ,onMounted,onUnmounted, watch,computed} from 'vue'
  const Store=ref(
    {'25':
      {
        NAMES:['胡淙煜','杨智杰','张祥瑞','黎菲','唐梓毓'],
        names:['刘馨屿','王思棠','韩钰柯','任剑卿','梅子涵','许诺','张皓','刘奕翔','李珉轩','陈鲁宇','高嘉铭']
      },
      '24':{
        NAMES:['顾翌炜','陆尚辰','戴琪洋','季凡景'],
        names:['王梓涵','黎菲','傅佳琳','唐梓毓','蒋威博','胡淙煜','周劲松','杨智杰','徐晨凯','张祥瑞']
      }
    }
  )
  const now_rank=ref(25)//当前显示的届数
  const NAMES=ref()//存部长名字
  const names=ref()//存部员名字
  const rank=ref([25,24,23,22,21])//存可选届数
  const box0_rotate=ref(0)//忘记这是什么了，嗯，别删喵~
  const fuequent=ref(2)//转轮的增加角度的频率
  const speed=ref(0.8)//转轮每次增加的角度
  const key=ref(1)//用于控制切换和展示的状态，展示为1，切换为0
  const throttle=ref(0)//用于控制节流
  const boxes3=ref()//封装部长盒子数据的数组
  const boxes4=ref()//封装部员盒子数据的数组
  const boxes5 = ref(Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    rotate: i * 24
  })))//用于绑定右下转轮的线
  const boxes6 = ref(Array.from({ length: rank.value.length }, (_, i) => ({
    id: rank.value[i],
    rotate: i * 30
  })))//用于绑定右下转轮的届数
  const visibleBoxes = computed(() => {
    return boxes6.value.filter(box => box.rotate >= -60 && box.rotate <= 60)
  })//超出屏幕的届选项不显示
  const update=()=>{
    NAMES.value = Store.value[now_rank.value].NAMES
    names.value = Store.value[now_rank.value].names
    boxes3.value=Array.from({ length: NAMES.value.length }, (_, i) => ({
      id: i + 1,
      name:'',
      rotate: -i * 45 + 90
    }))
    boxes4.value=Array.from({ length: names.value.length }, (_, i) => ({
      id: i + 1,
      name:'',
      rotate: -i * 15 + 90
    }))
    boxes3.value.forEach((box) => {
    watch(
    () => box.rotate,  // 精确监听 rotate 属性
    (newRotate, oldRotate) => {
      if (newRotate > 91 && oldRotate <= 91) {
        box.rotate += 45*(8-NAMES.value.length)
        if(key.value==0){
          box.name=''
        }
      }else if (newRotate == 360) {
        box.rotate = 0
      }else if (newRotate%360 > 269 && oldRotate%360 <= 269) {
        if(key.value==1){
          box.name=NAMES.value[box.id-1]
        }
      }
    }
    )
    })
    boxes4.value.forEach((box) => {
    watch(
    () => box.rotate,  // 精确监听 rotate 属性
    (newRotate, oldRotate) => {
      if (newRotate%360 > 91 && oldRotate%360 <= 91) {
        box.rotate += 15*(24-names.value.length)
        if(key.value==0){
          box.name=''
        }
      }else if (newRotate == 360) {
        box.rotate = 0
      }else if (newRotate%360 > 269 && oldRotate%360 <= 269) {
        if(key.value==1){
          box.name=names.value[box.id-1]
        }
      }
    }
    )
  })//监听boxes4的rotate属性，当rotate大于95度时，回正到页面上方
  }//用于切换更新数据
  const rotateBox=(rotate:number)=>{
    if(throttle.value==0){
      throttle.value=1
      setTimeout(() => {
        throttle.value=0
      }, 1500)
      if(rotate<0){
        boxes6.value.forEach((box) => {
          box.rotate += 30
        })
        fuequent.value=2
        speed.value=0.8
        key.value=0
        setTimeout(() => {
            fuequent.value=10
            speed.value=0.2
            del()
            run()
          },1700)
        setTimeout(() => {
          update()
          key.value=1
        }, 1200)
        del()
        run()
        now_rank.value++
      }else if(rotate>0){
        boxes6.value.forEach((box) => {
          box.rotate -= 30
        })
        fuequent.value=2
        speed.value=0.8
        key.value=0
          setTimeout(() => {
            fuequent.value=10
            speed.value=0.2
            del()
            run()
          }, 1700)
          setTimeout(() => {
            update()
            key.value=1
          }, 1200)
        del()
        run()
        now_rank.value--
      }
    }
  }//绑定切换届选项按钮，控制左右轮盘旋转
  let timer3 :number
  let timer4 :number
  let timer5 :number
  const run=()=>{
    timer3 = setInterval(() => {
      boxes3.value.forEach((box) => {
        box.rotate += speed.value
        box.rotate %= 360
      })
    }, fuequent.value)
    timer4 = setInterval(() => {
      boxes4.value.forEach((box) => {
        box.rotate += speed.value
        box.rotate %= 360
      })
    }, fuequent.value)
     timer5 = setInterval(() => {
      boxes5.value.forEach((box) => {
        box.rotate -= speed.value
        box.rotate %= 360
      })
    }, fuequent.value)
  }//用于左右转轮的旋转
  const del=()=>{
    clearInterval(timer3)
    clearInterval(timer4)
    clearInterval(timer5)
  }//停止或重启（更新速率）左右转轮的旋转
  onMounted(() => {
    update()
    run()
    setTimeout(() => {
      fuequent.value=10
      speed.value=0.2
      del()
      run()
    },1500)
  })
  onUnmounted(() => {
    del()
  })
</script>
<template>
  <div class="container">
    <div class="control-rank">
      <div class="rank-box box-1">
      </div>
      <div class="rank-box box-2">
      </div>
      <div class="rank-box box-3">
         <img src="../../../pictures/member/箭头-左上.png" class="arrow1" alt="">
      </div>
      <div class="box-4-container">
        <div v-for="box in boxes5" :key="box.id" class="box-4" :style="{ transform: `rotateZ(${box.rotate}deg)` }"></div>
      </div>
      <div class="choose-container">
      <div v-for="box in visibleBoxes" @click="rotateBox(box.rotate)" :key="box.id" class="rank-choose" :style="{ transform: `translate(0,-50%) rotateZ(${box.rotate}deg)` }"><div class="choose-item" :style="{ transform: `rotateZ(${-box.rotate+135}deg)` }">{{box.id}}</div></div>
      </div>
    </div>
    <div class="box0" :style="{ transform: `rotateZ(${box0_rotate}deg)` }">
    <div class="box-show">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4">
      </div>
      <div class="box5">
        <img src="../../../pictures/member/基本-双箭头左.png" class="arrow" alt="">
      </div>
      <div class="box6-container">
        <div v-for="box in boxes3" :key="box.id" class="box6" :style="{ transform: `rotateZ(${box.rotate+22.5}deg)` }"></div>
        <div v-for="box in boxes3" :key="box.id" class="box6" :style="{ transform: `rotateZ(${box.rotate-22.5}deg)` }"></div>
        <div v-for="(box,index) in boxes3" :class="{ 'first-box-text': index === 0 }" :key="box.id" class="NAME" :style="{ transform: `translate(0, -50%) rotateZ(${box.rotate}deg)` }">{{box.name}}</div>
        <div v-for="box in boxes4" :key="box.id" class="name" :style="{ transform: `translate(0, -50%) rotateZ(${box.rotate}deg)` }">{{box.name}}</div>
        <div v-for="box in boxes4" :key="box.id" class="box7" :style="{ transform: `rotateZ(${box.rotate+7.5}deg)` }"></div>
        <div v-for="box in boxes4" :key="box.id" class="box7" :style="{ transform: `rotateZ(${box.rotate-7.5}deg)` }"></div>
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
*{
  font:400;
  color:black;
  font-size: 2rem;
}
@keyframes scaleUp{
  0%{
    transform: translate(-50%, -50%)  rotateZ(0deg);
  }
  100%{
    transform: translate(-50%, -50%)  rotateZ(180deg);
  }
}
@keyframes scaleDown{
  0%{
    transform: translate(-50%, -50%)  rotateZ(0deg);
  }
  100%{
    transform: translate(-50%, -50%)  rotateZ(-180deg);
  }
}
@keyframes box4-containMove{
  0%{
    transform: rotateZ(0deg);
    opacity: 0;
  }
  66.6%{
    transform: rotateZ(180deg);
    opacity: 0;
  }
  100%{
    transform: rotateZ(360deg);
    opacity: 1;
  }
}
@keyframes arrowMove{
  0%{
    opacity: 1;
    transform: translate(-100%, -50%) rotateZ(360deg);
  }
  66.6%{
    transform: translate(-100%, -50%) rotateZ(360deg);
    opacity: 1;
  }
  100%{
    opacity: 1;
    transform: translate(-100%, -50%) rotateZ(360deg);
  }
}
@keyframes box6-containMove{
  0%{
    opacity: 0;
  }
  75%{
    width:0;
    opacity: 0;
  }
  100%{
    width: 200px;
    opacity: 1;
  }
}
@keyframes box-4{
  0%{
    opacity: 0;
    width: 0;
  }
  75%{
    opacity: 0;
    width: 0;
  }
  100%{
    opacity: 1;
    width: 200px;
  }
}
@keyframes nameMove1{
  0%{
    opacity: 0;
  }
  66.67%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes nameMove2{
  0%{
    opacity: 0;
  }
  75%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@keyframes box7-containMove{
  0%{
    opacity: 0;
  }
  75%{
    width:0;
    opacity: 0;
  }
  100%{
    width: 400px;
    opacity: 1;
  }
}
@keyframes rank-rotate{
  0%{
    transform: rotateZ(0deg);
    opacity: 0;
  }
  66.66%{
    opacity: 1;
    transform: rotateZ(-0deg);
  }
  100%{
    transform: rotateZ(-135deg);
    opacity: 1;
  }
}
.arrow{
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: arrowMove 1.5s ease-in-out forwards;
}
.arrow1{
  width: 140px;
  height: 140px;
  position: absolute;
  top: 43%;
  left: 43%;
  transform: translate(20%, 20%) rotateZ(180deg);
}
.container{
  width:calc(82% - 100px);
  height: 100vh;
  position: absolute;
  top: 0;
  left: calc(18% + 50px);
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  line-height: 50px;
  overflow: hidden;
}
.box0{
position: absolute;
top: 0;
width:900px;
height: 1800px;
transform-origin: 0% 50vh;
transition: transform 0.7s linear;
transform: translateY(-50%);
clip-path: inset(-100vh 0 -100vh 0);
}
.box-show{
  position: absolute;
  top: 50vh;
}
.control-rank{
  position: absolute;
  top: 100vh;
  right: 0px;
  .rank-box{
    border: 2px solid #ff4d00;
    position: absolute;
    border-radius: 50%;
    clip-path: polygon(
      50% 50%,
      50% 0%,
      100% 0%,
      100% 100%,
      50% 100%
    );
  }
  .box-1{
    width: 1100px;
    height: 1100px;
    background: url('../../../pictures/member/background1.png') center/cover no-repeat;
    animation: scaleDown 1s ease-in-out forwards;
  }
  .box-2{
    width: 700px;
    height: 700px;
    background-color: #ffffff;
    animation: scaleDown 1s ease-in-out forwards;
  }
  .box-3{
    width: 400px;
    height: 400px;
    background: url('../../../pictures/member/background1.png') center/cover no-repeat;
    animation: scaleDown 1s ease-in-out forwards;
  }
  .box-4{
    position :absolute;
    right:350px;
    width: 200px;
    height: 2px;
    background-color: #ff4d00;
    transform-origin: 550px 50%;
    animation: box-4 2s ease-in-out forwards;
  }
  .choose-container{
    animation: rank-rotate 1s ease-in-out forwards;
  }
  .rank-choose{
    position :absolute;
    width:70px;
    height: 70px;
    border-radius: 50%;
    left: 235px;
    top:-50%;
    transform-origin: -235px 50%;
    border: 2px solid #000000;
    transition: transform 0.25s linear;
    cursor: pointer;
  }
  .choose-item{
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color:#ffffff;
    border-radius: 50%;
    background-color: rgb(68, 71, 255);
    transition: transform 0.25s linear;
  }
}
.box1 {
  border: 2px solid #ff4d00;
  position: absolute;
  width: 1800px;
  height: 1800px;
  border-radius: 50%;
  background: url('../../../pictures/member/background1.png') center/cover no-repeat;
  /* 下半圆：从中心点 → 左中 → 左下 → 右下 → 右中 → 回到中心 */
   clip-path: polygon(
    50% 50%,   /* 中心点 */
    50% 0%,    /* 上中 */
    0% 0%,     /* 左上 */
    0% 100%,   /* 左下 */
    50% 100%   /* 下中 */
  );
  animation: scaleUp 1s ease-in-out forwards;
}
.box2{
  position: absolute;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background-color: #ffffff;
  clip-path: polygon(
    50% 50%,   /* 中心点 */
    50% 0%,    /* 上中 */
    0% 0%,     /* 左上 */
    0% 100%,   /* 左下 */
    50% 100%
  );
  animation: scaleUp 1s ease-in-out forwards;
   border: 2px solid #ff4d00;
}
.box3{
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: url('../../../pictures/member/background1.png') center/cover no-repeat;
  /* 裁剪出扇形：上半圆白色区域透明，下半圆显示图片 */
   clip-path: polygon(
    50% 50%,   /* 中心点 */
    50% 0%,    /* 上中 */
    0% 0%,     /* 左上 */
    0% 100%,   /* 左下 */
    50% 100%   /* 下中 */
  );
  animation: scaleUp 1s ease-in-out forwards;
   border: 2px solid #ff4d00;
}
.box4{
  border: 2px solid #ff4d00;
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color:  #ffffff;
  clip-path: polygon(
    50% 50%,   /* 中心点 */
    50% 0%,    /* 上中 */
    0% 0%,     /* 左上 */
    0% 100%,   /* 左下 */
    50% 100%
  );
  overflow: visible;
  animation: scaleUp 1s ease-in-out forwards;
}
.box5{
  border: 2px solid #ff4d00;
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: visible;
  background: url('../../../pictures/member/background1.png') center/cover no-repeat;
  /* 裁剪出扇形：上半圆白色区域透明，下半圆显示图片 */
   clip-path: polygon(
    50% 50%,   /* 中心点 */
    50% 0%,    /* 上中 */
    0% 0%,     /* 左上 */
    0% 100%,   /* 左下 */
    50% 100%   /* 下中 */
  );
  animation: scaleUp 1s ease-in-out forwards;
}
.box6{
  position :absolute;
  left:200px;
  height: 2px;
  background-color: #ff4d00;
  transform-origin: -200px 50%;
  animation: box6-containMove 1.5s ease-in-out forwards;
}
.NAME{
  position: absolute;
  left: 200px;
  width: 200px;
  height: 2.4rem;
  text-align: center;
  transform-origin: -200px 50%;
  font-size: 2.4rem;
  font-weight: bold;
  color: #ffffff;
  animation: nameMove1 1.5s ease-in-out forwards;
  -webkit-text-stroke: 1px rgb(177, 177, 177);
}
.first-box-text{
  -webkit-text-stroke: 1px #ff4d00;
}
.name{
  position: absolute;
  left: 500px;
  width: 400px;
  height: 3rem;
  text-align: center;
  transform-origin: -500px 50%;
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  animation: nameMove2 2s ease-in-out forwards;
  -webkit-text-stroke: 1px rgb(177, 177, 177);
}
.box7{
  position :absolute;
  left:500px;
  height: 2px;
  background-color: #ff4d00;
  transform-origin: -500px 50%;
  animation: box7-containMove 2s ease-in-out forwards;
}
</style>
