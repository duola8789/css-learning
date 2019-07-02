<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#透明边框">透明边框</a>
    </h1>
    <section class="intro">
      <el-card class="box-card">
        <p>默认情况下，背景的颜色会延伸至边框下层，所以如果边框设置为透明色，会被背景色覆盖掉。</p>
        <p>
          可以设置CSS3的属性<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip"><prism inline>background-clip</prism></a>
          设置元素的背景（背景图片或颜色）是否延伸到边框下面。
        </p>
        <p>
          <prism inline>background-clip</prism>取值有四个：
        </p>
        <ol class="ol-list">
          <li><prism inline>border-box</prism>: 背景延伸至边框外沿（但是在边框下层）</li>
          <li><prism inline>padding-box</prism>: 背景延伸至内边距（<prism inline>padding</prism>）外沿，不会绘制到边框</li>
          <li><prism inline>content-box</prism>: 背景延伸至内容区（<prism inline>content box</prism>）外沿</li>
          <li>
            <prism inline>text</prism>: ：背景剪裁成为文字的前景色。（只有Chrome支持，需加
            <prism inline>-webkit-</prism>前缀）
          </li>
        </ol>
        <p>
          所以将<prism inline>background-clip</prism>
          设置为<prism inline>padding-box</prism>就可以实现透明边框。
        </p>
      </el-card>
    </section>
    <div class="code">
      <prism language="css">{{code}}</prism>
    </div>
    <div class="example">
      <el-card class="box-card">
        <h2 class="input-title"><prism inline>background-clip</prism>取值</h2>
        <div class="input-container">
          <el-radio v-model="value" label="border-box">border-box</el-radio>
          <el-radio v-model="value" label="padding-box">padding-box</el-radio>
          <el-radio v-model="value" label="content-box">content box</el-radio>
          <el-radio v-model="value" label="text">text</el-radio>
        </div>
      </el-card>
      <div class="outer">
        <div class="inner" :style="backgroundClip">background-clip  设置元素的背景（背景图片或颜色）是否延伸到边框下面。</div>
      </div>
    </div>
  </div>
</template>

<script>

const CODE
  = // eslint-disable-next-line
`.transparent-border {
  background-clip: padding-box;
}`;

export default {
  name: 'TransparentBorder',
  title: '透明边框',
  createdAt: '2019-07-02 10:46:12',
  data() {
    return {
      code: CODE,
      value: 'border-box',
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
    background: #B4A078;
  }
  .inner {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    background: #FFF ;
    text-align: justify;
    background-size: cover;
    font-size: 40px;
    line-height: 1.2;
    color: #000;
    border: 20px solid rgba(47, 217, 59, 0.2);
    font-weight: 700;
  }
  .transparent-border {
    background-clip: padding-box;
  }
</style>
