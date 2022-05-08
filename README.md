# Vue 3 + TypeScript + Vite

做一个前端项目目录结构设计，注重的是一个结构的设计。在开发的过程中，经常会遇到把什么内容，放在哪个目录下？如何去抽象一个业务，它们之间如何去通讯？觉得这个事情是蛮有趣的，就把它记录下来了。

## 项目特点

- 突出特点：注重的是项目的结构设计过程，为什么这样做
- 雏形：这一个项目，不聚焦功能的集成，每个项目需求千差万别，取舍到到什么程度，因项目而异。


## 原则 

- 单一职责：任一目录，都只做一个事情，要有明确的边界
- 集中处理：如一个变量，方法会分散到各个地方，那就要在集中在一个地方处理
- 机制优先：问题千千万，预置解决方案的终归是有限，提供一个解决问题的机制是一个更好的选择，如：中间件，多态，依赖反转


## 项目结构

- api 接口
- config 配置
- pages 页面
- components 组件
- router 路由
- hooks 公用业务逻辑
- store 存储
- utils 工具

### api 接口

一个前端，必然要与外界发生数据交互，这样就得有一个目录来承担这个角色。前端目前是通过http协议、websock 与外界进行通讯，当然，绝大多数是用http进行通讯。现在如何去设计这个目录呢？命令一个目录，本质上是在定义问题，定义边界（什么内容应当归到这个目录下）

- 定义：对外界发起请求，如: fetch, ajax 的请求
- 边界：侧重的是请求，如：get, post 发起一个接口请求，像触发请求的动作，获取数据后的处理不可归到本目录中

### 应用说明

边界是定义的再清晰的，也会遇到模糊的时候，需要面对取舍，达到竞争平衡。

#### 有一个接口 getList, 返回数据要进行复杂适配处理才可以被渲染，并且在多个地方被调用，我们来分析一下：

1. 被多个地方调用，根据集中处理原则，应该被抽像到一个地方
2. 适配处理是复杂，应当被抽成一个复用单位，如函数或者类

```ts
// 实际的效果如下：
const adapter = (data: any) => {
  // do something
  return data;
};

export const getList = (params: any, fn: Function = adapter) => {
  return fetch.get('/list', params).then(res => {
    const { data } = res;
    // fn 就是复杂适配的处理函数
    res.data = fn(data);
    return { ...res, data };
  });
};
```


#### 接口与接口之间，有明显的被调用关系，如：接口 getUser 之后要调用 getRole，在多个地方被调用？

- 如一个解码片段，多次重复出现，那么一定有被复用的价值
- 任何复用，都要考虑到定制的多样化。将来不知道什么时候就发生变化了，要提供扩展的能力
- 复用的颗粒度，也要由小到大

```ts
// 小的复用单位
export const getUser = (params: any) => {
  return fetch.get('/user', params);
};

// 小的复用单位
export const getRole = (params: any) => {
  return fetch.get('/role', params);
};

// 组装成一个大的复用单位
export const getRoleByUser = async (params: any) => {
  const user = await getUser({ id: 0 });
  const role = await getRole(user);
  return role
};
```
### config 配置

与环境相关的一个配置信息，为什么要这样一目录，vite 自身就已经集成了 .env.local， .env.[mode].local    

- fetch: 请求后端服务的baseURL
- build: 构建时区分测试，演示，生产环境的一些变量
- ...

### pages 页面

页面，这个就是分发业务，也是一种借鉴后端架构设计的controller。一个页面，集中处理一块业务。有如下明显的边界：

- 必须是一个视图，可见的
- 有一个访问url与之对应的

### components 组件

页面调用的组件，是一个视图组件，有以下特征：

- 必须是一个视图组件，样式独立
- 多个页面调用的，通常颗粒度小于页面

> 任何组件，不得跨页面调用，如A页面调用B页面的组件，这样会发生耦合，且引用关系不清晰。其它影响范围比较大，改动这个组件时，一定要谨慎。
### router 

[路由](https://router.vuejs.org/)：处理页面与url 的映射关系，可以理解为一个空管中心，指挥哪个飞机下落在哪个跑道。

- 指定url 与页面映射关系
- 控制页面的访问权限
### hooks 


页面级的业务逻辑共享

### store [存储](https://pinia.vuejs.org/) 
### utils 工具




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
