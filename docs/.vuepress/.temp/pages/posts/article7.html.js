import comp from "G:/Maths/docs/.vuepress/.temp/pages/posts/article7.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article7.html\",\"title\":\"Article 7\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-07T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"git\":{},\"filePathRelative\":\"posts/article7.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
