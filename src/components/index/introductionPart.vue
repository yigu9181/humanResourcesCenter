<script setup lang="ts">

</script>
<template>
    <div class="right">
        <div class="title main-title">人 力 资 源 中 心</div>
        <div class="section-container">
            <div class="title section-title">部 门 简 介</div>
            <div class="activities-container">
                <div class="content">人力资源部门作为院学生会部门之一，负责学院举行的各种<i class="stronger">评奖评优选举活动</i>，其中包括<i class="stronger">通知信息，名单确认，场务引导，维护秩序</i>等任务。此外，我们还负责<i class="stronger">团校，团务和人力调动</i>的相关事务。总的来讲，我们做的是一些学院平凡但重要的工作。</div>
            </div>
        </div>
        <div class="section-container">
            <div class="title section-title">部 门 活 动</div>
            <div class="activities-container">
                <div class="activity-title">
                    <span class="activity-number">01</span>
                    <span class="activity-text">企 业 参 观 活 动 >></span>
                </div>
                <div class="content">走进<i class="stronger">企业文化展厅</i>，见证产品从设计到成品的流程，听从企业导师全程讲解，我们曾组织前往<i class="stronger">腾讯，美团，联通，小红书</i>这些知名企业参观。未来的就业形势怎样？企业的招聘流程要求有哪些？专业知识如何迁移到实际工作中？我们与各位感兴趣的同学一同亲身体验，前往现场解答心中疑惑。</div>
                <div class="activity-title">
                    <span class="activity-number">02</span>
                    <span class="activity-text">定 向 越 野 活 动 >></span>
                </div>
                <div class="content">在定向越野活动中，参与者将被分为多个小组，在规定时间内，小组成员<i class="stronger">共同合作</i>完成精心规划的打卡路线，妙趣横生的解密挑战，<i class="stronger">穿梭在城市大街小巷，探寻历史文化气息，拓展知识面，同时收获友谊和成长</i>。</div>
                <div class="activity-title">
                    <span class="activity-number">03</span>
                    <span class="activity-text">技 能 培 训 沙 龙 >></span>
                </div>
                <div class="content">我们每年都会邀请优秀的学长学姐，以及技能丰富的老师为大家进行<i class="stronger">技能培训课程</i>。在这里，我们将收获<i class="stronger">从“知道”到“做到”的质变突破，掌握技能核心方法论+避坑指南，拓展自己的技能树</i>。</div>
            </div>
        </div>
        <div class="section-container">
            <div class="title section-title">我 们 的 日 常</div>
            <div class="activities-container">
                <div class="content">每周一次的例会都可能有一份惊喜——<i class="stronger">奶茶</i>，而每位新成员的生日都会得到特别准备的<i class="stronger">蛋糕</i>，这些已成为我们的常规活动。此外，每周我们还设有<i class="stronger">“树洞”</i>环节，无论是关于生活的吐槽还是学习上的疑惑，新成员们都能获得学长学姐们的耐心指导和解答。我们的团建活动同样丰富多彩，<i class="stronger">从桌游游玩到美食聚餐，再到小屋聚会</i>，你总能找到属于自己的快乐时光。
                    <div class="section-container">
                        <div class="shell">
                            <div class="Content">
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                                <div class="item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
        .right{
            width:calc(82% - 100px);
            min-height: 100vh;
            position: absolute;
            top: 0;
            left: calc(18% + 50px);
            display: flex;
            flex-direction: column;
            justify-content:flex-start;
            font-size: 1.7rem;
            padding: 40px;
            overflow: visible;
        }
        .right .title{
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 30px;
            margin-bottom: 15px;
            position: relative;
            display: inline-block;
        }
        /* 主标题样式 */
        .right .main-title{
            font-size: 3rem;
            color: white;
            margin-top: 0;
            padding: 15px 30px 20px;
            /* 只设置顶部圆角，底部保持直角 */
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            display: inline-block;

            /* 底部横线效果 */
            border-bottom: 4px solid #FDB021;
            /* 文字黑色边框 + 橙色大偏移无模糊阴影效果 */
            text-shadow:
                -2px -2px 0 #f8651b,  /* 左上黑色边框 */
                2px -2px 0 #f8651b,   /* 右上黑色边框 */
                -2px 2px 0 #f8651b,   /* 左下黑色边框 */
                2px 2px 0 #f8651b,    /* 右下黑色边框 */
                5px 5px 0 #ff6505;  /* 橙色大偏移无模糊阴影 */
            background-color: transparent;
        }

        /* 章节容器样式 */
        .right .section-container{
            margin-bottom: 30px;
            display: block;
        }
        .right .activity-title{
            font-size: 1.2rem;
            color: white;
            background-color: rgb(253, 176, 33);
            padding: 0px 0;
            border-radius: 30px;
            display: flex;
            align-items: center;
            margin: 15px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            font-weight: 500;
            border: 1px solid black;
            width: fit-content;
        }
        .right .activity-title:hover{
            background-color: rgb(253, 176, 33);
            transform: translateY(-2px);
            box-shadow: 0 3px 6px rgba(0,0,0,0.15);
        }

        /* 数字样式 - 圆形背景 */
        .right .activity-number{
            background-color: #001EF9;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: bold;
            margin: 0 10px 0 0;
            border: 4px solid white;
        }

        /* 文字样式 - 白色文字带黑色描边 */
        .right .activity-text{
            color: white;
            font-weight: bold;
            margin-right: 15px;
            /* 文字描边效果 */
            text-shadow:
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px 1px 0 #000,
                1px 1px 0 #000;
        }

        /* 章节标题样式 - 深蓝色背景带黑色边框 */
        .right .section-title{
            display: inline-block !important;
            background-color: #001EF7;
            color: white;
            padding: 8px 15px;
            border: 2px solid #000;
            border-radius: 25px;
            margin: 20px 0 5px 0;
            font-size: 1.2rem;
            font-weight: bold;
            text-align: center;
            /* 黑色内外边框文字效果 */
            text-shadow:
                -0.5px -0.5px 0 #000,
                0.5px -0.5px 0 #000,
                -0.5px 0.5px 0 #000,
                0.5px 0.5px 0 #000;
            /* 确保宽度根据内容调整，且总宽度比内容宽30px */
            width: fit-content;
            max-width: none;
            box-sizing: content-box;
            /* 左右各15px内边距，总共比内容宽30px */
        }

        /* 部门活动容器样式 - 黄色边框带黑色内外边线 */
        .right .activities-container{
            border: 7px solid rgb(253, 176, 33);
            border-radius: 20px;
            padding: 20px;
            margin: 5px 0;
            background-color: rgba(255, 255, 255, 0.95);
            /* 黑色内外边线效果 */
            box-shadow:
                inset 0 0 0 1px #000, /* 内侧黑色边线 */
                0 0 0 1px #000;     /* 外侧黑色边线 */
        }

        @media (max-width: 768px) {
            .right .activity-title{
                font-size: 1rem;
            }
            .right .activity-number{
                width: 25px;
                height: 25px;
                font-size: 0.8rem;
                margin: 0 8px 0 12px;
            }
            .right .activity-text{
                margin-right: 12px;
            }
        }
        @media (max-width: 480px) {
            .right .activity-title{
                font-size: 0.9rem;
            }
            .right .activity-number{
                width: 22px;
                height: 22px;
                font-size: 0.7rem;
                margin: 0 6px 0 10px;
            }
            .right .activity-text{
                margin-right: 10px;
            }
        }
        .right .content{
            color: #575655;
            font-size: 1rem;
            line-height: 1.8;
            margin-bottom: 25px;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            background-color: rgb(245, 243, 231);
            font-weight: bold;
        }
        .right .content:first-of-type{
            margin-top: 10px;
        }
        /* 媒体查询，根据屏幕尺寸调整布局 */
        @media (max-width: 768px) {
            .container {
                width: 25%;
                font-size: 0.9rem;
            }
            .avatar {
                width: 60px;
                height: 60px;
            }
            .item1 {
                min-height: 70px;
            }
            .right{
                width: calc(75% - 60px);
                left: calc(25% + 30px);
                padding: 20px;
                font-size: 1.2rem;
            }
            .right .title:first-child{
                font-size: 1.8rem;
            }
            .right .title:nth-child(2){
                font-size: 1.5rem;
            }
            .right .section-title{
                font-size: 1.3rem;
                padding: 8px 16px;
            }
            .right .content{
                padding: 15px;
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            .container {
                width: 30%;
                font-size: 0.8rem;
                padding-top: 60px;
            }
            .avatar {
                width: 50px;
                height: 50px;
            }
            .item1 {
                min-height: 60px;
            }
            .right{
                width: calc(70% - 40px);
                left: calc(30% + 20px);
                padding: 15px;
                font-size: 1rem;
            }
            .right .title:first-child{
                font-size: 1.5rem;
            }
            .right .title:nth-child(2){
                font-size: 1.3rem;
            }
            .right .section-title{
                font-size: 1.1rem;
                padding: 6px 12px;
            }
            .right .content{
                padding: 12px;
                font-size: 0.85rem;
            }
            .right .activities-container{
                padding: 15px;
                margin: 15px 0;
            }
        }

        .stronger{
            color:#f8651b;
            font-style: normal;
            font-weight: bold;
        }

        /* 3D旋转轮播样式 */
        .shell {
            position: relative;
            width: 100%;
            height: 45vw;
            max-width: 480px;
            max-height: 320px;
            margin: 0 auto;
            color: white;
            perspective: 1000px;
            transform-origin: center;
            margin-top: 20px;
        }
        .Content {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
            transform: translateZ(-35vw) rotateY(0);
            animation: carousel 18s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        .item {
            position: absolute;
            width: 65vw;
            height: 45vw;
            max-width: 500px;
            max-height: 340px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            background-size: cover;
            -webkit-box-reflect: below 25px -webkit-linear-gradient(transparent 50%, rgba(255, 255, 255, 0.3));
        }
        .item:nth-child(1) {
            background-image: url(../../pictures/introduction/01.png);
            border: 2px solid #999;
            transform: rotateY(0) translateZ(35vw);
        }
        .item:nth-child(2) {
            background-image: url(../../pictures/introduction/02.png);
            border: 2px solid #999;
            transform: rotateY(60deg) translateZ(35vw);
        }
        .item:nth-child(3) {
            background-image: url(../../pictures/introduction/03.png);
            border: 2px solid #999;
            transform: rotateY(120deg) translateZ(35vw);
        }
        .item:nth-child(4) {
            background-image: url(../../pictures/introduction/04.png);
            border: 2px solid #999;
            transform: rotateY(180deg) translateZ(35vw);
        }
        .item:nth-child(5) {
            background-image: url(../../pictures/introduction/05.png);
            border: 2px solid #999;
            transform: rotateY(240deg) translateZ(35vw);
        }
        .item:nth-child(6) {
            background-image: url(../../pictures/introduction/06.png);
            border: 2px solid #999;
            transform: rotateY(300deg) translateZ(35vw);
        }
        @keyframes carousel {
            0%,
            7.1% {
                transform: translateZ(-40vw) rotateY(0);
            }
            14.2%,
            21.3% {
                transform: translateZ(-40vw) rotateY(-60deg);
            }
            28.4%,
            35.5% {
                transform: translateZ(-40vw) rotateY(-120deg);
            }
            42.6%,
            50.5% {
                transform: translateZ(-40vw) rotateY(-180deg);
            }
            58.6%,
            65.7% {
                transform: translateZ(-40vw) rotateY(-240deg);
            }
            72.5%,
            79.6% {
                transform: translateZ(-40vw) rotateY(-300deg);
            }
            86.7%,
            100% {
                transform: translateZ(-40vw) rotateY(-360deg);
            }
        }
</style>
