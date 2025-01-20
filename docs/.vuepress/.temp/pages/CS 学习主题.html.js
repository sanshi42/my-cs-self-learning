import comp from "/home/huanglei/workspace/my-cs-self-learning/docs/.vuepress/.temp/pages/CS 学习主题.html.vue"
const data = JSON.parse("{\"path\":\"/CS%20%E5%AD%A6%E4%B9%A0%E4%B8%BB%E9%A2%98.html\",\"title\":\"计算机的学习主题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"概述\",\"slug\":\"概述\",\"link\":\"#概述\",\"children\":[{\"level\":3,\"title\":\"十大主题\",\"slug\":\"十大主题\",\"link\":\"#十大主题\",\"children\":[]}]}],\"git\":{\"updatedTime\":1737373109000,\"contributors\":[{\"name\":\"sanshi\",\"username\":\"sanshi\",\"email\":\"sanshizhisu@outlook.com\",\"commits\":1,\"url\":\"https://github.com/sanshi\"}]},\"filePathRelative\":\"CS 学习主题.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
