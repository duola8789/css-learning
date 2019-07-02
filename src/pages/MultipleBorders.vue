<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#多重边框">多重边框</a>
    </h1>
    <section>
      <h2 class="section-title"><prism inline>box-shadow</prism></h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            <prism inline>box-shadow</prism>
            用来产生阴影效果，如果只给出两个数值，那么浏览器解析为x方向偏移量和y方向偏移量；如果给出第三个值，将被解释为模糊半径的大小；
            如果给出第四个值，将被监事未扩展半径的大小。
          </p>
          <p>
            可以通过将<prism inline>x-offset</prism>、<prism inline>y-offset</prism>
            、模糊半径都设为0，设置不同尺寸的扩展半径，来实现多重边框的效果：
          </p>
          <p>
            优点是很容易实现2条以上的边框，且可以实现圆角边框，缺点是无法实现非实线的边框。
          </p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner">
            box-shadow接受第四个参数作为阴影扩张半径，当我们只设置扩张半径时，零偏移，零模糊，产生的效果其实相当于一条实线“边框”。
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section>
      <h2 class="section-title">
        <prism inline>outline</prism> +
        <prism inline>outline-offset</prism>
      </h2>
      <section class="intro">
        <el-card class="box-card">
          <p>
            <prism inline>outline</prism>
            可以设置一个或者或者多个单独轮廓属性，轮廓不占据空间
            （<prism inline>outline</prism>和<prism inline>border</prism>都占据空间）
          </p>
          <p>
            <prism inline>outline-offset</prism>用来设置一个
            <prism inline>outline</prism>与一个元素边缘或者边框的间隙
          </p>
          <p>
            将两者结合，就可以实现多种边框，并且可以实现<prism inline>box-shadow</prism>无法实现的，非实线的多重边框
          </p>
          <p>优点是可以实现非实线的边框，缺点是实现2条以上的边框不方便，且无法实现圆角边框。</p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="inner2">
            可以通过类似于border的描边outline和对应的描边偏移outline-offset来实现。
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const CODE1
  = // eslint-disable-next-line
`.inner {
  box-shadow: 30px 50px 0 30px #000;
}`;

const CODE2
  = // eslint-disable-next-line
`.inner2 {
  border: aqua dotted 5px;
  outline: red dotted 5px;
  outline-offset: -15px;
}`;

export default {
  name: 'MultipleBorders',
  title: '多重边框',
  data() {
    return {
      code1: CODE1,
      code2: CODE2,
    };
  }
};
</script>

<style scoped lang="less">
  .inner {
    width: 400px;
    margin: 50px 0 35px;
    padding: 20px;
    line-height: 1.5;
    text-align: justify;
    background: darkgray;
    border-radius: 10px;
    box-shadow: 0 0 0 5px darkgoldenrod, 0 0 0 10px darkolivegreen, 0 0 0 15px red;
  }
  .inner2 {
    width: 400px;
    margin: 20px 0 ;
    padding: 20px;
    line-height: 1.5;
    text-align: justify;
    background: darkgray;
    border: aqua dotted 5px;
    outline: red dotted 5px;
    outline-offset: -15px;
  }
</style>
