# Vue 3 + TypeScript + Vite

# vue 项目模板


## 项目结构

- config 配置
- pages 页面
- components 组件
- router 路由
- hooks 页面级的共享
- services 服务，restful
- store 存储 
- utils 辅助工具
- test 单元测试


## npm 第三方库

在项目中使用第三方库作为一些场景的解决方案，如：router, axios

- UI 组件库: [Ant Design](https://ant.design/index-cn)
- 路由: [React Router](https://reactrouter.com/)
- 状态: [redux]https://redux.js.org/
- css类: [classnames](https://www.npmjs.com/package/classnames)
- style: 样式使用 [styled-components](https://styled-components.com/)
- http 库: [axios](https://github.com/axios/axios)

> 样式的解决方案，推荐css-in-js, 完全组件化


This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
