<script setup lang="ts">
  import { ref } from 'vue'
  const choose = ref(0)//当前选择的活动类型
  const chooseTransfrom=ref(0)
  const yearChooseTransfrom=ref(0)
  const yearChoose = ref(0)//当前选择的年份
  const choices = ref([
    {name:'全部活动',number:'55'},
    {name:'团校活动',number:'18'},
    {name:'定向越野',number:'11'},
    {name:'技能沙龙',number:'4'},
    {name:'企业参观',number:'10'},
    {name:'评奖评优',number:'12'}
  ])
  const years = ref([
    '全部',
    '2026',
    '2025',
    '2024',
    '2023',
    '2022'
  ])
  /*以下四个变量为分页相关，每次切换选择类型和年份时需要更新*/
  const nowPage = ref(1)//当前页面
  const totalPage = ref(14)//总页数
  const maxlength = ref(totalPage.value<7?totalPage.value:7)//最大显示页数
  const begin_choose = ref(1)//当前显示的第一页
  const clickPage = (index: number) => {
    nowPage.value = index
    if(totalPage.value>7){
      if(index<=3){
        begin_choose.value = 1
        nowPage.value = index
      }
      else if(index>totalPage.value-3){
        begin_choose.value = totalPage.value-6
        nowPage.value = index
      }
      else{
        begin_choose.value = index-3
        nowPage.value = index
      }
    }
  }
  const yearChooseActive = (index: number) => {
    yearChooseTransfrom.value = index * 80
    yearChoose.value = index
    nowPage.value = 1
    begin_choose.value = 1
    maxlength.value = totalPage.value<7?totalPage.value:7
  }
  const chooseActive = (index: number) => {
    choose.value = index
    chooseTransfrom.value = index * 140
    yearChoose.value = 0
    yearChooseTransfrom.value = 0
    nowPage.value = 1
    begin_choose.value = 1
    maxlength.value = totalPage.value<7?totalPage.value:7
  }

</script>
<template>
  <div class="container">
    <div class="logo">人力资源中心</div>
    <div class="navigation">
      <div v-for="(item, index) in choices"
        :key="index" @click="chooseActive(index)">
        <i :style="choose === index ? {color: '#ff7e5f'} : {}">
          {{item.name}}
        </i>
        <span>{{item.number}}</span>
      </div>
      <div class="choose" :style="{transform: `translateX(${chooseTransfrom}px)`}"></div>
    </div>
    <div class="navigation year">
      <div v-for="(item, index) in years"
        :style="yearChoose === index ? {color: '#ff7e5f'} : {}"
        :key="index" class="year-item" @click="yearChooseActive(index)">
        {{item}}
      </div>
      <div class="year-choose" :style="{transform: `translateX(${yearChooseTransfrom}px)`}"></div>
    </div>
    <div class="content">
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/BmYu-vqp1DoMg-Dy7HLZPw">
          <img src="../../../pictures/activity/封面.png" alt="">
          <div class="text">打卡城市地标角逐越野佳绩 | 团校定向越野活动回顾</div>
          <div class="date">2025年12月14日</div>
        </a>
      </div>
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/chN3t6vyRoofzVCQOLx2eQ">
          <img src="../../../pictures/activity/封面1.png" alt="">
          <div class="text">掌握图层奥秘，绘就无限可能 | 团校技能培训沙龙活动总结</div>
          <div class="date">2025年12月27日</div>
        </a>
      </div>
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/aQAvCaTOoZ81nXCiQorBTg">
          <img src="../../../pictures/activity/封面2.png" alt="">
          <div class="text">π计划 | 企业参观回顾 莉莉丝</div>
          <div class="date">2025年12月7日</div>
        </a>
      </div>
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/HCsuiVS6LJNt4G7cG9QArQ">
          <img src="../../../pictures/activity/封面3.png" alt="">
          <div class="text">活动总结 | 团校开学典礼 & 破冰活动</div>
          <div class="date">2025年10月26日</div>
        </a>
      </div>
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/uZX-CvE7T2170NqDw1h2OQ">
          <img src="../../../pictures/activity/封面4.png" alt="">
          <div class="text">第二十四届软件工程学院团校招新</div>
          <div class="date">2025年10月11日</div>
        </a>
      </div>
      <div class="item">
        <a target="_blank" href="https://mp.weixin.qq.com/s/r1sIjNIPe0TsDHm9mUSqYA">
          <img src="../../../pictures/activity/封面5.png" alt="">
          <div class="text">人力资源中心 | 人协智进 力拓新章</div>
          <div class="date">2025年8月31日</div>
        </a>
      </div>
    </div>
    <div class="page">
      <div class="page-item start-end"  @click="clickPage(1)">首页</div>
      <div v-for="index in maxlength"
        :key="index"
        @click="clickPage(index+begin_choose-1)"
        :style="nowPage === index+begin_choose-1 ? {backgroundColor: '#ff7e5f', color: '#ffffff'} : {}"
        class="page-item choose-page">{{index+begin_choose-1}}</div>
      <div class="page-item start-end"  @click="clickPage(totalPage)">末页</div>
    </div>
  </div>
</template>
<style scoped>
*{
  font:400;
  color:black;
}
.container{
  width:calc(82% - 100px);
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: calc(18% + 50px);
  display: flex;
  background-color: #ffffff;
}
.logo{
  position: absolute;
  top: 10px;
  width: 100%;
  height: 90px;
  display: flex;
  padding-left: 40px;
  line-height: 90px;
  border-bottom: 1px solid #F1F2F3;
  color: #ffffff;
  font-size: 2.2rem;
  -webkit-text-stroke: #ff7e5f 1px;
  font-weight: 1000;
  letter-spacing: 10px;
  text-shadow: 2px 2px 0 #ff7e5f;
}
.navigation{
  position: absolute;
  top:100px;
  height: 60px;
  margin: 0 40px;
  width: calc(100% - 80px);
  border-bottom: 1px solid #F1F2F3;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  justify-items: start;
  align-items: center;
  div{
    width: 100px;
    margin-right: 40px;
    i{
      color: #707070;
      font-style: normal;
      cursor: pointer;
      font-weight: 500;
    }
    i:hover{
      color: #ff7e5f;
    }
    span{
      color: #707070;
      margin-left: 5px;
      padding: 2px 7px;
      border-radius: 15px;
      background-color: #eaeaea;
      font-size: 12px;
    }
  }
  .choose{
    position: absolute;
    height: 4px;
    width:44px;
    background-color: #ff7e5f;
    bottom: 7px;
    margin: 0 10px;
    transition: transform 0.2s ease-in-out;
  }
}
.year{
  top:160px;
  border-bottom: none;
  margin-left: 40px;
  .year-item{
    width: 50px;
    margin-right: 30px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    color: #707070;
    text-align: center;
    font-weight: 500;
  }
  .year-item:hover{
    color: #ff7e5f;
  }
  .year-choose{
    position: absolute;
    height: 4px;
    width:25px;
    background-color: #ff7e5f;
    bottom: 10px;
    margin: 0 12.5px;
    transition: transform 0.2s ease-in-out;
  }
}
.content{
  position: absolute;
  top: 235px;
  margin: 0 40px;
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 25px;
  justify-items: start;
  align-items: start;
  .item{
    position: relative;
    width:360px;
    height: 280px;
    .date{
       position: absolute;
       top: 258px;
       left: 0px;
       font-size: 14px;
       font-weight: 400;
       color: #646464;
       border-radius: 5px;
     }
     .date:hover{
      color: #ff7e5f;
     }
     img{
      position: absolute;
      top: 0px;
      left: 0px;
      width: 360px;
      height: 220px;
      margin: 0px;
      padding: 0px;
      border-radius: 10px;
      border: 1px solid #d8d8d8;
     }
     img:hover{
      transform: scale(1.02);
      transition: transform 0.2s ease-in-out;
     }
     .text{
      position: absolute;
      top: 225px;
      left: 0px;
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      padding-top:5px;
      height: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
     }
     .text:hover{
      color: #ff7e5f;
     }
  }
}
.page{
  position: absolute;
  top: 850px;
  left: 620px;
  transform: translateX(-50%);
  height: 50px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ffffff;
  display: flex;
  gap: 15px;
  text-align: center;
  .page-item{
    cursor: pointer;
    height: 40px;
    font-weight: 400;
    font-size: 16px;
    line-height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #d8d8d8;
  }
  .choose-page{
    width: 40px;
  }
  .start-end{
    width: 80px;
  }
  .page-item:hover{
    background-color: #d8d8d8;
  }
}
</style>
