# 情报库（Intelligence Hub）

一个纯静态的科技情报站点，无需后端、无需构建，直接用浏览器打开 `index.html` 即可运行。

## 文件说明

| 文件 | 作用 |
| --- | --- |
| `index.html` | 首页，含 3D 模型查看器 |
| `app.html` | 情报库主应用（情报流 / 观察列表 / 术语表 / 科普） |
| `editor.html` | 内容编辑器 |
| `data.js` | 情报数据、默认词库、默认术语表 |
| `models.js` | 内嵌的 7 个演示 3D 模型（约 542 KB，请勿删除） |

## 本地运行

```bash
# 方式一：直接双击打开 index.html

# 方式二：起一个本地服务（推荐，避免部分浏览器的本地文件限制）
python -m http.server 8000
# 然后访问 http://127.0.0.1:8000/index.html
```

## 在线访问

本项目通过 GitHub Pages 部署，访问地址：

```
https://DY-BB.github.io/intel-hub/
```

## 技术栈

原生 HTML + CSS + JavaScript，无框架、无构建步骤。
