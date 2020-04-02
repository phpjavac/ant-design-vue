# 组件更新文档

- 2020/4/2

## 修改 props-> loading 接收类型

> 修改 loading 的类型为 fun,接收一个 Promise,点击的时候触发 loading 状态,Promise 成功或者失败都会改变 loading 的值。
