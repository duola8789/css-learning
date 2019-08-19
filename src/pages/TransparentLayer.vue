<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/08/19/01%20%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AE%B0/09%20HTML+CSS/HTML+CSS37%20%E9%95%82%E7%A9%BA%E9%81%AE%E7%BD%A9/">镂空遮罩</a>
    </h1>
    <section>
      <section class="intro">
        <el-card class="box-card">
          <p>透明边框</p>
          <div class="code">
            <prism language="css">{{code1}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <div class="inner"></div>
          </div>
        </div>
      </section>

      <section class="intro">
        <el-card class="box-card">
          <p>透明轮廓</p>
          <div class="code">
            <prism language="css">{{code2}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <div class="inner2"></div>
          </div>
        </div>
      </section>

      <section class="intro">
        <el-card class="box-card">
          <p>透明阴影</p>
          <div class="code">
            <prism language="css">{{code3}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <div class="inner3"></div>
          </div>
        </div>
      </section>
      <section class="intro">
        <el-card class="box-card">
          <p>Canvas1</p>
          <div class="code">
            <prism language="javascript">{{code4}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <canvas id="canvas" class="canvas" width="1500" height="500"></canvas>
          </div>
        </div>
      </section>
      <section class="intro">
        <el-card class="box-card">
          <p>Canvas2</p>
          <div class="code">
            <prism language="javascript">{{code5}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <canvas id="canvas2" class="canvas" width="1500" height="500"></canvas>
          </div>
        </div>
      </section>
      <section class="intro">
        <el-card class="box-card">
          <p>SVG</p>
          <div class="code">
            <prism language="html">{{code6}}</prism>
          </div>
        </el-card>
        <div class="example">
          <div class="outer">
            <div class="content">
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
              <p>这是要露出来的字</p>
            </div>
            <svg class="svg" width="1500" height="500">
              <defs>
                <mask id="myMask">
                  <rect x="0" y="0" width="100%" height="100%" style="stroke:none; fill: #ccc"></rect>
                  <rect width="200" height="80" x="100" y="100" style="fill: #000"></rect>
                </mask>
              </defs>
              <rect x="0" y="0" width="100%" height="100%"
                    style="stroke: none; fill: rgba(0, 0, 0, 0.6); mask: url(#myMask)"
              >
              </rect>
            </svg>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
const CODE1
  = // eslint-disable-next-line
`.inner {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: content-box;
  width: 200px;
  height: 80px;
  border-color: rgba(0, 0, 0, 0.5);
  border-style: solid;
  border-width: 100px 1500px 1500px 100px;
  background: transparent;
}`;

const CODE2
  = // eslint-disable-next-line
`.inner2 {
  position: absolute;
  left: 100px;
  top: 100px;
  box-sizing: content-box;
  width: 200px;
  height: 80px;
  outline: rgba(0, 0, 0, 0.5) 1500px solid;
  background: transparent;
}`;

const CODE3
  = // eslint-disable-next-line
`.inner3 {
  position: absolute;
  left: 100px;
  top: 100px;
  box-sizing: content-box;
  width: 200px;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 1500px;
  background: transparent;
}`;

const CODE4
  = // eslint-disable-next-line
`const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';

ctx.fillRect(0, 0, 1500, 1500);
ctx.clearRect(100, 100, 200, 80);`;

const CODE5
  = // eslint-disable-next-line
`const canvas = document.querySelector('#canvas2');
const ctx = canvas.getContext('2d');

// 外围
ctx.moveTo(0, 0);
ctx.lineTo(1500, 0);
ctx.lineTo(1500, 1500);
ctx.lineTo(0, 1500);
ctx.closePath();

// 内层
ctx.moveTo(300, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 180);
ctx.lineTo(300, 180);
ctx.closePath();

ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
ctx.fill();`;

const CODE6
  = // eslint-disable-next-line
`<svg class="svg" width="1500" height="500">
  <defs>
    <mask id="myMask">
      <rect x="0" y="0" width="100%" height="100%" style="stroke:none; fill: #ccc"></rect>
      <rect width="200" height="80" x="100" y="100" style="fill: #000"></rect>
    </mask>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" style="stroke: none; fill: rgba(0, 0, 0, 0.6); mask: url(#myMask)"></rect>
</svg>`;

export default {
  name: 'TransparentLayer',
  title: '镂空遮罩',
  createdAt: '2019-08-19 09:42:58',
  data() {
    return {
      code1: CODE1,
      code2: CODE2,
      code3: CODE3,
      code4: CODE4,
      code5: CODE5,
      code6: CODE6,
      value: 'border-box'
    };
  },
  mounted() {
    this.clearReact();
    this.fillPath();
  },
  methods: {
    clearReact() {
      const canvas = document.querySelector('#canvas');
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, 1500, 1500);
      ctx.clearRect(100, 100, 200, 80);
    },

    fillPath() {
      const canvas = document.querySelector('#canvas2');
      const ctx = canvas.getContext('2d');

      // 外围
      ctx.moveTo(0, 0);
      ctx.lineTo(1500, 0);
      ctx.lineTo(1500, 1500);
      ctx.lineTo(0, 1500);
      ctx.closePath();

      // 内层
      ctx.moveTo(300, 100);
      ctx.lineTo(100, 100);
      ctx.lineTo(100, 180);
      ctx.lineTo(300, 180);
      ctx.closePath();

      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fill();
    }
  }
};
</script>

<style scoped lang="less">
  .outer {
    position: relative;
    margin: 20px 0;
    height: 500px;
    background: darksalmon;
    overflow: hidden;
  }
  .content {
    width: 200px;
    height: 80px;
    color: #FFF;
    line-height: 1.5;
    background: #5b8b7b;
    margin: 100px 0 0 100px;
  }
  .inner {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: content-box;
    width: 200px;
    height: 80px;
    border-color: rgba(0, 0, 0, 0.5);
    border-style: solid;
    border-width: 100px 1500px 1500px 100px;
    background: transparent;
  }
  .inner2 {
    position: absolute;
    left: 100px;
    top: 100px;
    box-sizing: content-box;
    width: 200px;
    height: 80px;
    outline: rgba(0, 0, 0, 0.5) 1500px solid;
    background: transparent;
  }
  .inner3 {
    position: absolute;
    left: 100px;
    top: 100px;
    box-sizing: content-box;
    width: 200px;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 1500px;
    background: transparent;
  }
  .canvas {
    position: absolute;
    left: 0;
    top: 0;
  }
  .svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  .transparent-border {
    background-clip: padding-box;
  }
</style>
