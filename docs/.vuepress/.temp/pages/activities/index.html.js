import comp from "G:/Maths/docs/.vuepress/.temp/pages/activities/index.html.vue"
const data = JSON.parse("{\"path\":\"/activities/\",\"title\":\"课堂时政\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"activities/README.md\",\"excerpt\":\"\\n<h2>2025.10.8日</h2>\\n<h3>找到老师，进入社团</h3>\\n<h3></h3>\\n\"}")
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
