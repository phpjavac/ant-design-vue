# 组件更新文档

- 2020/4/2

## 增加可关闭功能全局提示框功能

> 新增 props-> close 参数,默认为 false。当 close 为 true 时,最右侧会出现一个可以点击关闭的图标,点击可以关闭。

```javascript
// 修改弹框的默认值 使全局的弹框都会有一个默认的可关闭操作
this.$message.config({
  close: true,
});
```

```javascript
// 可配置单次弹框
this.$message.info({
  content: 'hello world',
  close: true,
});
```
