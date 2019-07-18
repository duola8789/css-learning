<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#四边形">四边形</a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew">
          <prism inline>transform: skew</prism>
        </a>
        +
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path">
          <prism inline>clip-path</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            实现一个四边形我首先想到的方案是使用矩形+三角形拼接而成，三角形使用<prism inline>border</prism>来实现
          </p>
          <p>
            能够实现，但是代码量是在是不少，而且还占据了两个伪元素。
            其实有两种更简单的方法，一种是使用<prism inline>transform: skew</prism>，
            它定义了在2D平面上一个对象的歪斜变换，参数可以使一个也可以是两个，当是两个的时候，分别表示沿着横坐标、从坐标扭曲元素的角度。
          </p>
          <p>
            这八个取值以<prism inline>/</prism>进行分割，每一组四个值，分别代表左上、右上、右下、左下四个角的圆角半径，第一组值是水平方向半径，第二组是垂直方向的半径
          </p>
          <p>
            还有一种方法是使用<prism inline>clip-path</prism>，
            它可以用来创建一个只有元素的部分区域显示的剪切区域，区域内的部分显示，区域外的隐藏（这个属性替代了已经弃用的<prism inline>clip</prism>属性）
          </p>
          <p>
            用这个属性与使用SVG是很类似的，可以实现多种多样的形状，
            使用<prism inline>clie-path: polygon(A, B, C, D)</prism>，就可以实现各种四边形。其中A/B/C/D分别是四个点的坐标值，其中横坐标在前，纵坐标在后
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner parallel1"></div>
          <div class="inner parallel2"></div>
          <div class="inner parallel3"></div>
          <div class="inner parallel4"></div>
          <div class="inner parallel5"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`.parallel1 {
  position: relative;
  width: 100px;
  height: 100px;
  background: #FFF;
}

.parallel1:before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  transform: translateX(-100%);
  border: 50px solid transparent;
  border-right-color: #FFF;
  border-bottom-color: #FFF;
}

.parallel1:after {
  content: '';
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  transform: translateX(100%);
  border: 50px solid transparent;
  border-left-color: #FFF;
  border-top-color: #FFF;
}

.parallel2 {
  width: 200px;
  height: 100px;
  background: #FFF;
  transform: skewX(-45deg);
}

.parallel3 {
  margin-left: 20px;
  width: 300px;
  height: 100px;
  background: #FFF;
  clip-path: polygon(33% 0, 100% 0, 66% 100%, 0 100%);
}

.parallel4 {
  margin-left: 20px;
  width: 100px;
  height: 100px;
  background: #FFF;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: clip-path 0.5s;
}

.parallel4:hover {
  clip-path: polygon(0 0,100% 0, 100% 100%, 0 100%);
}

.parallel5 {
  margin-left: 20px;
  width: 100px;
  height: 100px;
  background: #FFF;
  clip-path: polygon(0 100%, 100% 100%, 100% 0);
  transition: clip-path 0.5s;
}`;

export default {
  name: 'Parallel',
  title: '四边形',
  createdAt: '2019-07-15 09:38:13',
  data() {
    return {
      code1: CODE1,
    };
  },
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
    margin-left: 120px;
    background: #FFF;
  }

  .parallel1 {
    position: relative;
    width: 100px;
    height: 100px;
    background: #FFF;
  }
  .parallel1:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    transform: translateX(-100%);
    border: 50px solid transparent;
    border-right-color: #FFF;
    border-bottom-color: #FFF;
  }
  .parallel1:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    transform: translateX(100%);
    border: 50px solid transparent;
    border-left-color: #FFF;
    border-top-color: #FFF;
  }

  .parallel2 {
    width: 200px;
    height: 100px;
    background: #FFF;
    transform: skewX(-45deg);
  }

  .parallel3 {
    margin-left: 20px;
    width: 300px;
    height: 100px;
    background: #FFF;
    clip-path: polygon(33% 0, 100% 0, 66% 100%, 0 100%)
  }

  .parallel4 {
    margin-left: 20px;
    width: 100px;
    height: 100px;
    background: #FFF;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: clip-path 0.5s;
  }

  .parallel4:hover {
    clip-path: polygon(0 0,100% 0, 100% 100%, 0 100%);
  }

  .parallel5 {
    margin-left: 20px;
    width: 100px;
    height: 100px;
    background: #FFF;
    clip-path: polygon(0 100%, 100% 100%, 100% 0);
    transition: clip-path 0.5s;
  }
</style>
