# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 相关技术
``` bash
# postcss-px2rem 
<style src="../../static/css/base.css"></style>
/* 这种方案解决了引入css不能转换成rem的问题 */
css后加入/*px*/,会根据dpr的不同生成3套代码,一般用在字体上
css后加入/*no*/,不转换成rem,一般用在border上

# sass

```

