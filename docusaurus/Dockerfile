FROM node:12 AS build

WORKDIR /src

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM intility/nginx-unprivileged-react

COPY --from=build /src/build /usr/share/nginx/html
