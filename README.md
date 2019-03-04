
### 使用
`git clone https://github.com/Eveveen/react-cli.git`
`cd react-cli`
`npm install`
`npm start` 开启前端服务  
`npm run dev:be` 开启后端服务


### 说明
1. 调用的 be 的配置在 src/config/config.js 中
2. 国际化文件位于 src/locale 中，根据浏览器当前语言进行自适应，如果是中文则显示中文，其它语言则显示英文，当然，也可以自己添加其它语言，只需在 src/component/App/App.js 中添加判断即可
3. create-react-app 支持使用 css-module，如果是 sass 文件，只需要命名中间加一个 .module 即可，如 index.module.sass



## 注意 1
You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack. You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

你应该在 src 下创建子目录。为了更快地重构，只有 src 中的文件才能够被 webpack 处理。 你需要把所有的 js 和 css 文件都放在 src 目录下，否则 webpack 无法识别它们。



