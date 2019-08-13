<template>
  <div>
    <h1 class="content-title">
      <a href="https://duola8789.github.io/2019/06/30/03%20读书笔记/10 You-need-to-know-css/#使用一个div实现进度条">
        使用一个div实现进度条
      </a>
    </h1>
    <section>
      <h2 class="section-title">
        <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient">
          <prism inline>linear-gradient</prism>
        </a>
        +
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient">
          <prism inline>radial-gradient</prism>
        </a>
      </h2>
      <div class="code">
        <prism language="css">{{code1}}</prism>
      </div>
      <div class="example">
        <div class="outer">
          <div class="bar"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

const CODE1
  = // eslint-disable-next-line
`.bar {
  --c: #5b8b7b;
  --h: 80px;
  --p: 60%;
  width: 800px;
  height: var(--h);
  border-radius: calc(var(--h) / 2);
  background-color: lightgray;
  background-image: radial-gradient(closest-side circle at var(--p) center, var(--c), var(--c) 100%, transparent),
                      linear-gradient(var(--c), var(--c));
  background-repeat: no-repeat;
  background-size: 100%, var(--p);
}`;

export default {
  name: 'ProgressBar',
  title: '进度条',
  createdAt: '2019-07-18 09:08:23',
  data() {
    return {
      code1: CODE1
    };
  }
};
</script>

<style scoped>
  .outer {
    margin: 20px 0;
    padding: 20px;
    background: #B4A078;
    text-align: left;
  }
  .bar {
    --c: #5b8b7b;
    --h: 80px;
    --p: 60%;
    width: 800px;
    height: var(--h);
    border-radius: calc(var(--h) / 2);
    background-color: lightgray;
    background-image: radial-gradient(closest-side circle at var(--p) center, var(--c), var(--c) 100%, transparent),
                      linear-gradient(var(--c), var(--c));
    background-repeat: no-repeat;
    background-size: 100%, var(--p);
  }

</style>
