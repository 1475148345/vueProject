<template>
  <footer class="flex flex-jc-sb flex-ai-c">
    <div v-for="(item,key) in footerInfo" :key="key" @click="onPressAction(item)" :class="!item.active||'active'">
        <i :class="item.icon"></i>
        <span>{{item.text}}</span>
    </div>
    
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    // props:['headerMsg'],
    data() {
      return {
        footerInfo:[
            {icon:'footer-icon1',text:'首页',active:true},
            {icon:'footer-icon2',text:'消息',active:false},
            {icon:'footer-icon3',text:'我的',active:false},
        ]
      }
    },
    methods:{
        /* 底部样式切换 */
      onPressAction:function(item){
          this.footerInfo.map(function(v){
              v.active=false;
              if(item.active==v.active){
                  item.active=true;
              }
          });
      }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* 这种方案解决了引入css不能转换成rem的问题 */
<style src="../../static/css/base.css"></style>
<style scoped lang="scss">
  @import '/static/css/flex.css';
  footer{
      height: 100px;
      padding: 0 70px;
      border-top: 1px solid #e5e5e5;/*no*/
      div{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 24px;/*px*/
          color: #999;
          transition: all .3s ease-in;
          &.active{
              color: #00bbff;
              .footer-icon1{
                    background: url(/static/images/footer-icon1-active.png) no-repeat;
                    background-size: contain;
                }
                .footer-icon2{
                    background: url(/static/images/footer-icon2-active.png) no-repeat;
                    background-size: contain;
                }
                .footer-icon3{
                    background: url(/static/images/footer-icon3-active.png) no-repeat;
                    background-size: contain;
                }
          }
      }
      span{
          margin-top: 8px;
      }
  }
  .footer-icon1{
      width: 40px;
      height: 36px;
      background: url(/static/images/footer-icon1.png) no-repeat;
      background-size: contain;
  }
  .footer-icon2{
      width: 38px;
      height: 36px;
      background: url(/static/images/footer-icon2.png) no-repeat;
      background-size: contain;
  }
  .footer-icon3{
      width: 34px;
      height: 38px;
      background: url(/static/images/footer-icon3.png) no-repeat;
      background-size: contain;
  }
</style>