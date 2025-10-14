import comp from "G:/Maths/docs/.vuepress/.temp/pages/posts/article6.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article6.html\",\"title\":\"Article 6\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-06T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag A\",\"tag B\"]},\"git\":{},\"filePathRelative\":\"posts/article6.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
