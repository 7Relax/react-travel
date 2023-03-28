# 第一个阶段：拉取 node 镜像来打包 React 项目

# 创建 react 构建环境，拉取 node 镜像  :选择版本  as给阶段起名称
FROM node:14 as build

# 设置 Docker命令的运行目录，工作空间设置为 /app
WORKDIR /app

# 把 package.json package-lock.json 复制到 app 目录中
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制到 app 目录中
COPY tsconfig.json ./

# 复制到 public 目录中
COPY public public/

# 复制到 src 目录中
COPY src src/

# 打包 React 项目
RUN npm run build


# 第二个阶段：创建并运行 Nginx 服务器，并且把打包好的文件复制到服务器文件夹中

# 拉取 nginx 镜像，版本选择高山版alpine（基于Linux的内核版本）
FROM nginx:alpine

# 将第一阶段构建好的 build 目录全部复制到 nginx 镜像中
# --from=阶段 原文件目录 目标目录nginx/html
COPY --from=build /app/build/ /usr/share/nginx/html

# 暴露 nginx 服务器端口 80
EXPOSE 80

# 使用 CMD 命令来启动 nginx 服务器
CMD ["nginx", "-g", "daemon off;"]
