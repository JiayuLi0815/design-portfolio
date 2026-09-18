#!/bin/bash
# 作品集网站本地开发服务
# 用法: ./start.sh          (默认端口 8443)
#       PORT=9000 ./start.sh (自定义端口)

set -e
cd "$(dirname "$0")"

if [ ! -d node_modules ]; then
  echo "首次运行，正在安装依赖..."
  pnpm install
fi

PORT="${PORT:-8443}"
echo "启动中... 打开 http://localhost:$PORT/"
PORT="$PORT" pnpm dev
