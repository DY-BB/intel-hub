#!/usr/bin/env bash
# intel-hub 一键部署到 GitHub
#
# 前置条件（在 GitHub 网页上完成一次即可）：
#   1. 把 ~/.ssh/id_ed25519.pub 的内容添加到 GitHub → Settings → SSH and GPG keys → New SSH key
#   2. 在 GitHub 新建一个空仓库（不要勾选 README / .gitignore / License）
#
# 用法（在项目目录下用 Git Bash 运行）：
#   ./deploy.sh <GitHub用户名> <GitHub邮箱> [仓库名，默认 intel-hub]
# 示例：
#   ./deploy.sh yufg yufg@example.com

set -euo pipefail

GH_USER="${1:-}"
GH_EMAIL="${2:-}"
REPO="${3:-intel-hub}"

if [ -z "$GH_USER" ] || [ -z "$GH_EMAIL" ]; then
  echo "用法: ./deploy.sh <GitHub用户名> <GitHub邮箱> [仓库名]"
  echo "示例: ./deploy.sh yufg yufg@example.com intel-hub"
  exit 1
fi

cd "$(dirname "$0")"

echo "==> 1/6 配置 Git 身份（$GH_USER <$GH_EMAIL>）"
git config user.name  "$GH_USER"
git config user.email "$GH_EMAIL"

echo "==> 2/6 启动 ssh-agent 并加载密钥"
if [ -f "$HOME/.ssh/id_ed25519" ]; then
  eval "$(ssh-agent -s)" >/dev/null
  ssh-add "$HOME/.ssh/id_ed25519" 2>/dev/null || echo "    (密钥可能已加载，继续)"
else
  echo "    未找到 ~/.ssh/id_ed25519，请先运行："
  echo "    ssh-keygen -t ed25519 -C 'intel-hub' -f ~/.ssh/id_ed25519 -N ''"
  exit 1
fi

echo "==> 3/6 把访问地址写进 README"
sed -i "s|<你的 GitHub 用户名>|$GH_USER|g; s|github.io/intel-hub/|github.io/$REPO/|g" README.md
git add -A

echo "==> 4/6 提交"
if git diff --cached --quiet; then
  echo "    没有需要提交的变更，跳过"
else
  git commit -q -m "feat: 初始化情报库静态站点（首页 3D 查看器 + 情报库主应用）

- index.html: 首页，含 3D 模型查看器
- app.html:   情报库主应用（情报流 / 观察列表 / 术语表 / 科普）
- editor.html: 内容编辑器
- data.js:    情报数据、默认词库、默认术语表
- models.js:  内嵌 7 个演示 3D 模型（约 542KB）
- 修复公司详情「编辑」弹窗因 × 重复绑定产生野定时器而冻结的问题"
fi

echo "==> 5/6 关联远程仓库 git@github.com:$GH_USER/$REPO.git"
if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "git@github.com:$GH_USER/$REPO.git"
else
  git remote add origin "git@github.com:$GH_USER/$REPO.git"
fi

echo "==> 6/6 推送到 GitHub"
git push -u origin main

echo
echo "✅ 推送完成！"
echo "现在去开启 GitHub Pages："
echo "   https://github.com/$GH_USER/$REPO/settings/pages"
echo "   → Source 选 'Deploy from a branch'"
echo "   → Branch 选 main，目录选 /(root)，点 Save"
echo
echo "稍等 1-2 分钟，访问："
echo "   https://$GH_USER.github.io/$REPO/"
