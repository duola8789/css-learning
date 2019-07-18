<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#切角效果">切角效果</a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient">
          <prism inline>linear-gradient</prism>
        </a>
        +
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path">
          <prism inline>clip-path</prism>
        </a>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            首先可以使用<prism inline>linear-gradient</prism>，首先定义一个方向的直线渐变：
          </p>
          <p>
            <prism language="css">{{code1}}</prism>
          </p>
          <p>
            要注意的是，这个切角是定义的左下角的位置，首先这个「左下角」是由<prism inline>background-position</prism>定义的，
            只不过简写在<prism inline>background</prism>属性中
          </p>
          <p>
            还要注意的是角度，只需要记住<prism inline>to top</prism>是<prism inline>0deg</prism>，
            <prism inline>to right</prism>是<prism inline>90deg</prism>，计算角度时需要从镜像的起始点出发计算
          </p>
          <p>
            然后定义了<prism inline>background-size: 51%  51%;</prism>相当于只定义了左下角四分之一的背景填充：
          </p>
          <p>
            之所以不用<prism inline>50%</prism>而是<prism inline>51</prism>，是为了防止有些浏览器在渲染时出现缝隙的问题，
            和<prism inline>border-radius</prism>设置为<prism inline>51%</prism>是一样的道理。
            所以按照同理，将另外三个角补充完整即可：
          </p>
        </el-card>
        <el-card class="box-card">
          <p>
            也可以使用之前一节学习过的<prism inline>clip-path</prism>来实现，将这个切过角的形状作为一个多边形，将各个坐标点描绘出来即可（当然也可以使用内联SVG）
            在描述各点坐标时，可以使用<prism inline>calc</prism>这个属性来计算，小心点一点别把横纵坐标搞错就行：
          </p>
        </el-card>
        <el-card class="box-card">
          <p>
            圆角切角可以使用<prism inline>radial-gradient</prism>实现，原理与使用<prism inline>linear-gradient</prism>类似，只是需要额外指定径向渐变的圆心位置：
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code2}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner corner1"></div>
          <div class="inner corner2"></div>
          <div class="inner corner3"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`.corner1 {
  background: linear-gradient(45deg, transparent 12px, #FFF 13px) left bottom no-repeat；
  background-size: 51%  51%;
}`;

const CODE2
  = // eslint-disable-next-line
`.corner1 {
  background: linear-gradient(45deg, transparent 12px, #FFF 13px) left bottom no-repeat,
              linear-gradient(135deg, transparent 12px, #FFF 13px) left top no-repeat,
              linear-gradient(-45deg, transparent 12px, #FFF 13px) right bottom no-repeat,
              linear-gradient(-135deg, transparent 12px, #FFF 13px) right top no-repeat;
  background-size: 51%  51%;
}
.corner2 {
  clip-path: polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px,
                    100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px));
}

.corner3 {
    background: radial-gradient(circle at bottom left, transparent 12px, #FFF 13px) bottom left no-repeat,
              radial-gradient(circle at top left, transparent 12px, #FFF 13px) top left no-repeat,
              radial-gradient(circle at bottom right, transparent 12px, #FFF 13px) bottom right no-repeat,
              radial-gradient(circle at top right, transparent 12px, #FFF 13px) top right no-repeat;
  background-size: 51%  51%;
}`;

export default {
  name: 'CornerCut',
  title: '切角效果',
  createdAt: '2019-07-18 09:08:23',
  data() {
    return {
      code1: CODE1,
      code2: CODE2,
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
    width: 100px;
    height: 100px;
  }

  .corner1 {
    background: linear-gradient(45deg, transparent 12px, #FFF 13px) left bottom no-repeat,
                linear-gradient(135deg, transparent 12px, #FFF 13px) left top no-repeat,
                linear-gradient(-45deg, transparent 12px, #FFF 13px) right bottom no-repeat,
                linear-gradient(-135deg, transparent 12px, #FFF 13px) right top no-repeat;
    background-size: 51%  51%;
  }
  .corner2 {
    clip-path: polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px,
                      100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px));
  }

  .corner3 {
    background: radial-gradient(circle at bottom left, transparent 12px, #FFF 13px) bottom left no-repeat,
                radial-gradient(circle at top left, transparent 12px, #FFF 13px) top left no-repeat,
                radial-gradient(circle at bottom right, transparent 12px, #FFF 13px) bottom right no-repeat,
                radial-gradient(circle at top right, transparent 12px, #FFF 13px) top right no-repeat;
    background-size: 51%  51%;
  }
</style>
