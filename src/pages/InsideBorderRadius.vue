<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#边框内圆角">边框内圆角</a>
    </h1>
    <section>
      <section class="intro">
        <el-card class="box-card">
          <p>
            边框外围没有圆角，内部有圆角，所以单独使用<prism inline>border-radius</prism>是不行的。
            上一部分内容中，我们可以发现，<prism inline>box-shadow</prism>是跟随边框有圆角的，
            而<prism inline>outline</prism>则是没有圆角的，所以我们可以使用三者的组合实现边框内圆角。
          </p>
          <p>
            利用<prism inline>border-radius</prism>设置圆角，假设为<prism inline>r</prism>，
            但是不设置<prism inline>border</prism>，设置<prism inline>outline</prism>为<prism inline>w</prism>，这样外边框是没有圆角的，
          </p>
          <p>
            所以这里取值最大值不能超过<prism inline>outline</prism>的宽度<prism inline>w</prism>，
            而最小宽度根据勾股定理不能小于<prism inline>1.414r - r</prism>，即<prism inline>0.414r</prism>，
            在我们的设置中，扩展半径的取值范围是<prism inline>[5, 2.07]</prism>
          </p>
          <p></p>
        </el-card>
      </section>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <el-card class="box-card example-select">
          <h2 class="input-title"><prism inline>box-shadow</prism></h2>
          <div class="input-container">
            <el-switch v-model="value"></el-switch>
          </div>
        </el-card>
        <div class="outer">
          <div class="inner" :style="value ? { 'box-shadow': '0 0 0 5px darkgreen' } : ''">
            我们知道box-shadow是会紧贴border-radius圆角边的，但是，描边outline并不会与圆角边border-radius贴合，
            我们可以将两者组合，通过box-shadow去填补描边outline所产生的间隙来达到我们想要的效果。
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
    border-radius: 5px;
    outline: 5px solid darkgreen;
    box-shadow: 0 0 0 5px darkgreen;
}`;

export default {
  name: 'InsideBorderRadius',
  title: '边框内圆角',
  data() {
    return {
      code1: CODE1,
      value: true,
    };
  },
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
    border-radius: 5px;
    outline: 5px solid darkgreen;
  }
</style>
