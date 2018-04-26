<template>
  <header class="flex flex-jc-sb flex-ai-c">
    <div class="l flex flex-jc-c flex-ai-c">
      <i :class="[headerMsg.leftIcon]"></i>
    </div>
    <h1 class="flex-1">{{headerMsg.header}}</h1>
    <div class="r flex flex-jc-c flex-ai-c"></div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props:['headerMsg'],
    data() {
      return {
        msg: '2'
      }
    },
    created(){
      console.log(1)
    },
    mounted(){
      console.log()
    },
    updated(){
      console.log(3)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* 这种方案解决了引入css不能转换成rem的问题 */
<style src="../../static/css/base.css"></style>
<style scoped lang="scss">
  @import '/static/css/flex.css';
  header{
    min-height: 100px;
    background: #00bbff;
    position: relative;
    h1{
      font-size: 36px;/*px*/
      color: #fff;
    }
    .l,.r{
      min-width: 75px;
      min-height: 100px;
    }
  }
</style>