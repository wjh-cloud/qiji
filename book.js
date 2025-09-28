module.exports = {
  plugins: [
    "-lunr",
    "-search",
    "search-pro",
    "code",
    "theme-lou",
    "expandable-chapters",
    "back-to-top-button"
  ],
  pluginsConfig: {
    // "search-pro": {
    //   "path": "search_plus_index.json"
    // },
    // "code": {
    //   "theme": "github"
    // }
  },
  // 隐藏目录导航栏
  structure: {
    readme: "README.md",
    summary: "SUMMARY.md"
  },
  // 自定义样式隐藏目录
  styles: {
    website: "styles/website.css"
  }
};
