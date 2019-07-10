<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#不规则卡片">不规则卡片</a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient">
          <prism inline>radial-gradient</prism>
        </a>
        +
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style">
          <prism inline>border-style</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            不规则椭圆切口使用<prism inline>background</prism>的<prism inline>radial-gradient</prism>实现。
          </p>
          <p>
            它的第一个参数定义圆形渐变的中心点，默认为背景的中心，第二个参数定义渐变的形状，可以取值<prism inline>circle</prism>
            （圆形）和<prism inline>ellipse</prism>，这两个参数可以通过<prism inline>at</prism>关键字合并为一个参数，
            比如<prism inline>circle at 50% -5px</prism>
          </p>>
          <p>
            后面的参数和线性填充一样，表示某个确定位置的固定色值，形式为<prism inline>color1 position1, color2 position2</prism>，
            这个位置值是相对虚拟渐变射线的位置值，如果是圆形可以理解为半径
          </p>
          <p>
            下面实现上下两个色块的交界处的波浪线，可以利用伪元素加上样式为<prism inline>dotted</prism>的<prism inline>border</prism>实现：
          </p>
          <p>
            <prism inline>dotted</prism>的边框，显示为一系列圆点。标准中没有定义两点之间的间隔大小，视不同实现而定。
            圆点半径是<prism inline>border-width</prism>计算值的一半。
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`.top {
  position: relative;
  width: 100%;
  height: 120px;
  background: radial-gradient(circle at 50% -5px,transparent 0, transparent 20px, #73d2d3 21px, #73d2d3 100% );
}

.top:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  border-bottom: #f7f7f7 6px dotted;
}

.bottom {
  width: 100%;
  height: 160px;
  background: #f7f7f7;
}`;

export default {
  name: 'SpecialCard',
  title: '不规则卡片',
  createdAt: '2019-07-10 09:12:55',
  data() {
    return {
      code1: CODE1,
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
    width: 200px;
    text-align: center;
    line-height: 1.2;
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
  .top {
    position: relative;
    width: 100%;
    height: 120px;
    background:  radial-gradient(circle at 50% -5px,transparent 0, transparent 20px, #73d2d3 21px, #73d2d3 100% );
  }
  .top:after{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    border-bottom: #f7f7f7 6px dotted ;
  }
  .bottom {
    width: 100%;
    height: 160px;
    background: #f7f7f7;
  }
</style>
