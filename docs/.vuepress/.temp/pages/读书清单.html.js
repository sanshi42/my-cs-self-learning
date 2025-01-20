import comp from "/home/huanglei/workspace/my-cs-self-learning/docs/.vuepress/.temp/pages/读书清单.html.vue"
const data = JSON.parse("{\"path\":\"/%E8%AF%BB%E4%B9%A6%E6%B8%85%E5%8D%95.html\",\"title\":\"读书清单\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 软件工程：\",\"slug\":\"_1-软件工程\",\"link\":\"#_1-软件工程\",\"children\":[]},{\"level\":2,\"title\":\"2. Python\",\"slug\":\"_2-python\",\"link\":\"#_2-python\",\"children\":[]},{\"level\":2,\"title\":\"3. 网络\",\"slug\":\"_3-网络\",\"link\":\"#_3-网络\",\"children\":[]},{\"level\":2,\"title\":\"4. 项目管理\",\"slug\":\"_4-项目管理\",\"link\":\"#_4-项目管理\",\"children\":[]},{\"level\":2,\"title\":\"5. 架构学习\",\"slug\":\"_5-架构学习\",\"link\":\"#_5-架构学习\",\"children\":[]},{\"level\":2,\"title\":\"6. 数据库\",\"slug\":\"_6-数据库\",\"link\":\"#_6-数据库\",\"children\":[]}],\"git\":{\"updatedTime\":1737373109000,\"contributors\":[{\"name\":\"sanshi\",\"username\":\"sanshi\",\"email\":\"sanshizhisu@outlook.com\",\"commits\":7,\"url\":\"https://github.com/sanshi\"},{\"name\":\"Huang Lei\",\"username\":\"Huang Lei\",\"email\":\"huanglei@exocr.com\",\"commits\":1,\"url\":\"https://github.com/Huang Lei\"}]},\"filePathRelative\":\"读书清单.md\"}")
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
