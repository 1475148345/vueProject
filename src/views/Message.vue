<template>
    <div class="hello">
        <Header :headerMsg="headerData"></Header>
        <section class="contain">
            message
        </section>
        <Footer :footerInfo="footerInfo"></Footer>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  name: "Main",
  components: { Header,Footer },
  data() {
    return {
     headerData: {
        leftIcon: "angle-left",
        header: "家装助手"
      },
      footerInfo: [
        { icon: "footer-icon1", text: "首页", active: false },
        { icon: "footer-icon2", text: "消息", active: true },
        { icon: "footer-icon3", text: "我的", active: false }
      ],
    };
  },
  methods:{
      onPressAction:function(index){
          console.log(index)
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../static/css/base.css"></style>
<style scoped lang="scss">
</style>