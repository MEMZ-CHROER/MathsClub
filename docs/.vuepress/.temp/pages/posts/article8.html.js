import comp from "G:/Maths/docs/.vuepress/.temp/pages/posts/article8.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article8.html\",\"title\":\"Article 8\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2022-01-08T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag C\",\"tag D\"]},\"git\":{\"updatedTime\":1760452637000,\"contributors\":[{\"name\":\"MEMZ-CHROER\",\"username\":\"MEMZ-CHROER\",\"email\":\"lxy130523@outlook.com\",\"commits\":1,\"url\":\"https://github.com/MEMZ-CHROER\"}],\"changelog\":[{\"hash\":\"85e3e2143b4d7761fca3d1d7e65e2a321a60e135\",\"time\":1760452637000,\"email\":\"lxy130523@outlook.com\",\"author\":\"MEMZ-CHROER\",\"message\":\"first:上传网站\"}]},\"filePathRelative\":\"posts/article8.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
