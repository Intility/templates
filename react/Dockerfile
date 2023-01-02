FROM node:lts as build
WORKDIR /src

COPY package*.json .
RUN npm ci

COPY . .
RUN npm run build

FROM intility/nginx-unprivileged-react

COPY --from=build /src/dist /usr/share/nginx/html
