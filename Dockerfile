# Build
FROM node:26-alpine@sha256:7c6af15abe4e3de859690e7db171d0d711bf37d27528eddfe625b2fe89e097f8 AS builder

WORKDIR /app

COPY package.json package-lock.json tailwind.config.js .postcssrc.json ./
COPY src/ src/

RUN npm ci
RUN npm run build

# Serve
FROM nginx:1.31.0-alpine@sha256:c22e76a97fe5bacad9d58bad0a96e903480c05f8dee30884b14550530ddd25a9

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
