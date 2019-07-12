<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#圆和椭圆">圆和椭圆</a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/">
          <prism inline>border-radius</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            一般我们会使用<prism inline>border-radius</prism>实现圆角效果，
            但是实际上使用<prism inline>border-radius</prism>可以实现圆、椭圆、半圆等各种圆形的效果。
          </p>
          <p>
            我们常用的可能就是<prism inline>border-radius: 5px</prism>，但是实际上它是一个缩写，它的完整写法是：
            <prism language="css">{{code1}}</prism>
          </p>
          <p>
            这八个取值以<prism inline>/</prism>进行分割，每一组四个值，分别代表左上、右上、右下、左下四个角的圆角半径，第一组值是水平方向半径，第二组是垂直方向的半径
          </p>
          <p>
            <prism language="css">{{code2}}</prism>
          </p>
          <p>
            理解了完整的取值，就可以通过设置不同的值来实现不同的圆形。
            要注意，<prism inline>border-radius</prism>的百分比是相对于<prism inline>offsetWidth</prism>和
            <prism inline>offsetHeight</prism>进行设置的，及包括了<prism inline>content</prism>、
            <prism inline>padding</prism>以及<prism inline>border</prism>的宽度。
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code3}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner circle"></div>
          <div class="inner semicircle"></div>
          <div class="inner quarterCircle"></div>
          <div class="inner ellipse1"></div>
          <div class="inner ellipse2"></div>
          <div class="inner ellipse3"></div>
          <div class="inner ellipse4"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`border-radius: 5px 5px 5px 5px / 5px 5px 5px 5px`;

const CODE2
  = // eslint-disable-next-line
`border-radius: 上角水平圆角半径大小 右上角水平圆角半径大小 右下角水平圆角半径大小 左下角水平圆角半径大小
               / 左上角垂直圆角半径大小 右上角垂直圆角半径大小 右下角垂直圆角半径大小 左下角垂直圆角半径大小`;

const CODE3
  = // eslint-disable-next-line
`.circle {
  width: 100px; height: 100px; border-radius: 50%;
}

.semicircle {
  width: 200px; height: 100px; border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.quarterCircle {
  width: 100px; height: 100px; border-radius: 100% 0 0 0;
}

.ellipse1 {
  width: 150px; height: 100px; border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.ellipse2 {
  width: 50px; height: 100px; border-radius: 100% 0 0 0;
}

.ellipse3 {
  width: 200px;height: 100px; border-radius: 0 50% 0 50% / 0 100% 0 100%;
}

.ellipse4 {
  width: 200px; height: 100px; border-radius: 50% 0 50%  0 / 100% 0 100% 0;
}`;

export default {
  name: 'Circles',
  title: '圆和椭圆',
  createdAt: '2019-07-12 09:19:52',
  data() {
    return {
      code1: CODE1,
      code2: CODE2,
      code3: CODE3,
    };
  },
  methods: {},

};
</script>

<style scoped>
  .outer {
    margin: 20px 0;
    padding: 20px;
    background: #B4A078;
    text-align: left;
  }
  .inner {
    display: inline-block;
    margin: 0 26px;
    background: #FFF;
  }
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .semicircle {
    width: 200px;
    height: 100px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
  .quarterCircle {
    width: 100px;
    height: 100px;
    border-radius: 100% 0 0 0 ;
  }
  .ellipse1 {
    width: 150px;
    height: 100px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
  .ellipse2 {
    width: 50px;
    height: 100px;
    border-radius: 100% 0 0 0 ;
  }
  .ellipse3 {
    width: 200px;
    height: 100px;
    border-radius: 0 50% 0 50% / 0 100% 0 100%;
  }
  .ellipse4 {
    width: 200px;
    height: 100px;
    border-radius:  50% 0 50%  0 / 100% 0 100% 0;
  }
</style>
