<template>
  <div id="app">
    <div>
      <button v-waves type="plain" icon="el-icon-refresh">搜索</button>
    </div>
 
  </div>
</template>

<script>
import waves from '@/directive/waves.js'// 水波纹指令
export default {
  name: 'APP',
  directives: {
    waves
  },
}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css'; // normalize.css 样式格式化
</style>
