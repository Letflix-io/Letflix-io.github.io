"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[996],{1501:function(n,e,t){var i,a=t(1880),r=t(4657),o=t(7294);var d=r.Z.div(i||(i=(0,a.Z)(["\n  overflow: hidden;\n  * {\n    margin: 0;\n    padding: 0;\n    color: var(--themFont);\n    font-size: 2vw;\n  }\n  @media screen and (min-width: 1920px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    margin: 22px 34px;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    margin: 22px 34px;\n  }\n  @media screen and (max-width: 767px) {\n    margin: 12px;\n  }\n"])));e.Z=function(n){var e=n.children;return o.createElement(d,null,e)}},914:function(n,e,t){t.d(e,{Z:function(){return M}});var i,a=t(1880),r=t(4657),o=t(7294),d=t(1597);var l,c=function(n){var e=n.post,i=n.isSlide,a=(0,o.useState)(!1),r=a[0],l=a[1];return"/"!==i?o.createElement(s,{onClick:function(){l(!1),(0,d.navigate)(e.fields.slug)}},o.createElement("img",{src:"/poster/"+(e.frontmatter.imgname?e.frontmatter.imgname:"default.png"),alt:e.frontmatter.title})):o.createElement(s,{onMouseOver:function(){l(!0)},onMouseLeave:function(){l(!1)},onDoubleClick:function(){l(!1),(0,d.navigate)(e.fields.slug)}},o.createElement("img",{src:"/poster/"+(e.frontmatter.poster?e.frontmatter.poster:"default.png"),alt:e.frontmatter.title}),o.createElement("div",{onClick:function(){l(!1),(0,d.navigate)(e.fields.slug)},className:r?"valid":"unvalid"},o.createElement("img",{src:t(6976).Z,alt:"이동"})))},s=r.Z.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 30px;\n  box-sizing: border-box;\n  border-radius: 12px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  &:hover {\n    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,\n      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n      rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */\n  }\n  .unvalid {\n    display: none;\n  }\n  .valid {\n    display: block;\n    width: 50%;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: calc(-25%);\n    background-color: rgba(255, 255, 255, 0.4);\n  }\n  img {\n    display: block;\n    width: 100%;\n  }\n"]))),g=t(9646),m=t(9499);var u=r.Z.div(l||(l=(0,a.Z)(['\n  width: 100%;\n  .item {\n    float: left;\n  }\n  &::after {\n    content: "";\n    display: block;\n    clear: both;\n    visibility: hidden;\n  }\n  @media screen and (min-width: 1920px) {\n    .item {\n      padding: 20px;\n      width: 10%;\n    }\n    margin: 30px -10px 0 0;\n  }\n  @media screen and (min-width: 1080px) and (max-width: 1919px) {\n    .item {\n      padding: 20px;\n      width: 20%;\n    }\n    margin: 25px -10px 0 0;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1079px) {\n    .item {\n      padding: 16px;\n      width: 25%;\n    }\n    margin: 20px -8px 0 0;\n  }\n  @media screen and (min-width: 375px) and (max-width: 767px) {\n    .item {\n      padding: 8px;\n      width: 33%;\n    }\n    margin: 15px -4px 0 0;\n  }\n  @media screen and (max-width: 374px) {\n    .item {\n      padding: 6px;\n      width: 50%;\n    }\n    margin: 10px -3px 0 0;\n  }\n']))),M=function(n){var e=n.postList,t=n.isSlide,i=(0,m.useLocation)().pathname;return o.createElement(u,null,e.length?e.map((function(n){return o.createElement("div",{className:"item",key:(0,g.Z)()},o.createElement(c,{isSlide:t,post:n}))})):i.includes("search")?o.createElement("div",{className:"msg"},"검색 결과가 없습니다"):o.createElement("div",{className:"msg"},"준비 중"))}},5875:function(n,e,t){t.r(e);var i,a=t(1880),r=t(7294),o=t(4584),d=t(2899),l=t(914),c=t(9102),s=t(1501);var g=t(4657).Z.strong(i||(i=(0,a.Z)(["\n  font-size: 2.8vw;\n"])));e.default=function(n){var e,t=n.data,i=n.location,a=decodeURI(null===(e=i.search)||void 0===e?void 0:e.replace("?q=","")),m=(t.allMarkdownRemark.nodes||[]).filter((function(n){var e=n.frontmatter,t=e.title,i=e.description,r=e.genre,o=e.countries,d=e.ott,l=e.categories;return i&&i.toLowerCase().includes(null==a?void 0:a.toLowerCase())||t&&t.toLowerCase().includes(null==a?void 0:a.toLowerCase())||r&&r.toLowerCase().includes(null==a?void 0:a.toLowerCase())||o&&o.toLowerCase().includes(null==a?void 0:a.toLowerCase())||d&&d.join("").toLowerCase().includes(null==a?void 0:a.toLowerCase())||l&&l.join("").toLowerCase().includes(null==a?void 0:a.toLowerCase())}));return r.createElement("div",null,r.createElement(c.Z,null),r.createElement(d.Z,{location:i},r.createElement(o.Z,{title:a+" 검색 결과",description:""}),r.createElement(s.Z,null,r.createElement(g,null,a?a+" 검색 결과":"검색어를 입력해주세요"),r.createElement(l.Z,{postList:m,isSlide:!1}))))}},6976:function(n,e){e.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDg1IiBoZWlnaHQ9IjQ4NSIgdmlld0JveD0iMCAwIDQ4NSA0ODUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00MTMuOTc0IDcxLjAyNkMzNjguMTcxIDI1LjIyNSAzMDcuMjc0IDAgMjQyLjUgMEMxNzcuNzI2IDAgMTE2LjgyOSAyNS4yMjUgNzEuMDI2IDcxLjAyNkMyNS4yMjUgMTE2LjgyOSAwIDE3Ny43MjYgMCAyNDIuNUMwIDMwNy4yNzQgMjUuMjI1IDM2OC4xNzEgNzEuMDI2IDQxMy45NzRDMTE2LjgyOSA0NTkuNzc1IDE3Ny43MjYgNDg1IDI0Mi41IDQ4NUMzMDcuMjc0IDQ4NSAzNjguMTcxIDQ1OS43NzUgNDEzLjk3NCA0MTMuOTc0QzQ1OS43NzUgMzY4LjE3MSA0ODUgMzA3LjI3NCA0ODUgMjQyLjVDNDg1IDE3Ny43MjYgNDU5Ljc3NSAxMTYuODI5IDQxMy45NzQgNzEuMDI2Wk0yNDIuNSA0NTVDMTI1LjMyNyA0NTUgMzAgMzU5LjY3MyAzMCAyNDIuNUMzMCAxMjUuMzI3IDEyNS4zMjcgMzAgMjQyLjUgMzBDMzU5LjY3MyAzMCA0NTUgMTI1LjMyNyA0NTUgMjQyLjVDNDU1IDM1OS42NzMgMzU5LjY3MyA0NTUgMjQyLjUgNDU1WiIgZmlsbD0iI0VDMjUxNiIvPgo8cGF0aCBkPSJNMTgxLjA2MiAzMzYuNTc1TDM0My45MzggMjQyLjVMMTgxLjA2MiAxNDguNDI1VjMzNi41NzVaIiBmaWxsPSIjRUMyNTE2Ii8+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-search-js-dba20dfff019defcd0bd.js.map