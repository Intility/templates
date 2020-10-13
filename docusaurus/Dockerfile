FROM node:12 AS build

WORKDIR /src

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM intility/nginx-unprivileged-react:1.18.2

COPY --from=build /src/build /usr/share/nginx/html
