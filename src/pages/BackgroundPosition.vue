<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#背景定位">背景定位</a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position">
          <prism inline>background-position</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            <prism inline>background-position</prism>使用时要注意三点：
          </p>
          <p>
            1. <prism inline>background-position</prism>
            指定的位置是相对于由<prism inline>background-origin</prism>定义的位置图层的，默认定位于元素的左上角
          </p>
          <p>
            2. <prism inline>background-position</prism>在一个方向上，可以指定一个值，也可以指定两个值，
            可以在<prism inline>right</prism>后面跟一个数值，表示相对于边缘的位置
          </p>
          <p>
            3. 如果指定的是百分比，<prism inline>0%</prism>代表图片的左（上）边界和容器的左（上）边界重合，
            <prism inline>100%</prism>代表图片的右（下）边界与容器的右（下）边界重合，
            <prism inline>50%</prism>代表图片的中心与容器的中心重合
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner backgroundPosition">Background-Position</div>
        </div>
      </div>
    </section>

    <hr>

    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin">
          <prism inline>background-origin</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            <prism inline>background-origin</prism>
            规定了背景图片的属性的原点位置与容器的关系（与<prism inline>background-clip</prism>类似）
          </p>
          <p>
            可以取值有：
          </p>
          <ol class="ol-list">
            <li><prism inline>border-box</prism>: 图片边界与<prism inline>border</prism>重合</li>
            <li><prism inline>padding-box</prism>: 图片边界与<prism inline>padding</prism>区域重合</li>
            <li><prism inline>content-box</prism>: 图片边界与<prism inline>content</prism>区域重合</li>
          </ol>
          <p>
            可以取值<prism inline>content-box</prism>，借用<prism inline>padding</prism>定位实现
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code2}}</prism>
      </div>
      <div class="example">
        <el-card class="box-card">
          <h2 class="input-title"><prism inline>background-origin</prism>取值</h2>
          <div class="input-container">
            <el-radio v-model="backgroundOrigin" label="border-box">border-box</el-radio>
            <el-radio v-model="backgroundOrigin" label="padding-box">padding-box</el-radio>
            <el-radio v-model="backgroundOrigin" label="content-box">content box</el-radio>
          </div>
        </el-card>
        <div class="outer">
          <div class="inner" :style="{ 'background-origin': backgroundOrigin }">Background-Origin</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`.inner {
  padding: 20px;
  border: 10px solid red;
  background: #fff url('../assets/images/css-tricks.png') no-repeat;
  background-position: right 20px bottom 20px;
  /* 这样写也可以： */
  /* background: #fff url('../assets/images/css-tricks.png') no-repeat right 20px bottom 20px; */
}`;

const CODE2
  = // eslint-disable-next-line
`.inner {
  padding: 20px;
  border: 10px solid red;
  background: #fff url('../assets/images/css-tricks.png') no-repeat right bottom;
  background-origin: content-box;
}`;

export default {
  name: 'BackgroundPosition',
  title: '背景定位',
  createdAt: '2019-07-07 10:02:50',
  data() {
    return {
      code1: CODE1,
      code2: CODE2,
      value: 'border-box',
      backgroundOrigin: 'border-box'
    };
  },
  computed: {
    backgroundClip() {
      if (this.value === 'text') {
        return {
          '-webkit-background-clip': this.value,
          'color': 'transparent'
        };
      }
      return {
        'background-clip': this.value,
        'color': '#000'
      };
    }
  },
  methods: {},

};
</script>

<style scoped lang="less">
  .outer {
    margin: 20px 0;
    padding: 20px;
    background: #B4A078;
  }
  .inner {
    width: 50%;
    height: 200px;
    margin: 0 auto;
    padding: 20px;
    border: 10px solid red;
    background: #fff url('../assets/images/css-tricks.png') no-repeat right bottom;
    background-size:  50px;
    text-align: justify;
    line-height: 1.2;
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
  .backgroundPosition {
    background-position: right 20px bottom 20px;
  }
</style>
