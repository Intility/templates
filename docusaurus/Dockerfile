FROM node:12 AS build

WORKDIR /src

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine

COPY --from=build /src/build /usr/share/nginx/html