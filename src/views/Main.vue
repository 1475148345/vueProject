<template>
    <div class="hello">
        <Header :headerMsg="headerData"></Header>
        <section class="contain">
            <nav>
                <div v-for="(item,key) in navs" :key="key" @click="onPressAction(key)">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </div>
            </nav>
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
        { icon: "footer-icon1", text: "首页", active: true },
        { icon: "footer-icon2", text: "消息", active: false },
        { icon: "footer-icon3", text: "我的", active: false }
      ],
      navs: [
        {icon: "icon1",text: "业务"},
        {icon: "icon2",text: "工程"},
        {icon: "icon3",text: "财务"},
        {icon: "icon4",text: "材料"},
        {icon: "icon5",text: "客户"},
        {icon: "icon6",text: "应标"},
        {icon: "icon7",text: "日志"},
        {icon: "icon8",text: "备忘"},
        {icon: "icon9",text: "邮箱"},
        {icon: "icon10",text: "通讯录"},
        {icon: "icon11",text: "公告"},
        {icon: "icon12",text: "培训"},
        {icon: "icon13",text: "招聘"},
        {icon: "icon14",text: "网站"},
        {icon: "icon15",text: "合作"}
      ]
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
.hello {
  nav {
    display: flex;
    flex-wrap: wrap;
    div {
      background-color: #fff;
      width: 25%;
      height: 25vw;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border: 1px solid #eaeff1; /*no*/
      font-size: 28px; /*px*/
      border-top: 0;
      border-left: 0;
      &:nth-child(4n + 4) {
        border-right: 0;
      }
    }
    i {
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
    }
  }
}
@for $i from 1 through 15 {
  .icon#{$i} {
    background: url(/static/images/icon#{$i}.png) no-repeat;
    background-size: contain;
  }
}
</style>